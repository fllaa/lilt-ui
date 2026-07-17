"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { ComponentProps } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import { cn } from "@/registry/lilt/lib/utils";
import { Drawer, DrawerContent } from "@/registry/lilt/ui/drawer";
import { MenuIcon } from "@/registry/lilt/ui/icons";
import { Separator } from "@/registry/lilt/ui/separator";

const SIDEBAR_COOKIE_NAME = "lilt_sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

const MOBILE_QUERY = "(max-width: 767px)";

const subscribeToMobileQuery = (onStoreChange: () => void) => {
  const query = window.matchMedia(MOBILE_QUERY);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
};

const getIsMobile = () => window.matchMedia(MOBILE_QUERY).matches;

// SSR snapshot: the server always renders the desktop rail.
const getServerIsMobile = () => false;

const getInitialOpen = (defaultOpen: boolean): boolean => {
  // Cookies are unreadable on the server, so SSR always renders defaultOpen
  // and the first client render may briefly disagree with the stored state.
  // Accepted hydration trade-off — it keeps the provider dependency-free.
  if (typeof document === "undefined") {
    return defaultOpen;
  }
  const entry = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${SIDEBAR_COOKIE_NAME}=`));
  if (!entry) {
    return defaultOpen;
  }
  return entry.split("=")[1] === "true";
};

interface SidebarContextValue {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "expanded" | "collapsed";
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
  const value = useContext(SidebarContext);
  if (!value) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return value;
};

export interface SidebarProviderProps extends ComponentProps<"div"> {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}

export const SidebarProvider = ({
  children,
  className,
  defaultOpen = true,
  onOpenChange,
  open: openProp,
  ...props
}: SidebarProviderProps) => {
  const [internalOpen, setInternalOpen] = useState(() =>
    getInitialOpen(defaultOpen)
  );
  const [openMobile, setOpenMobile] = useState(false);
  const isMobile = useSyncExternalStore(
    subscribeToMobileQuery,
    getIsMobile,
    getServerIsMobile
  );

  const isControlled = openProp !== undefined;
  const open = openProp ?? internalOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
      // oxlint-disable-next-line unicorn/no-document-cookie -- one first-party persistence cookie; the Cookie Store API is not yet available in Safari or Firefox and a cookie library is not worth the dependency
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${next}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [isControlled, onOpenChange]
  );

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setOpenMobile((current) => !current);
    } else {
      setOpen(!open);
    }
  }, [isMobile, open, setOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "b") {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  const value = useMemo<SidebarContextValue>(
    () => ({
      isMobile,
      open,
      openMobile,
      setOpen,
      setOpenMobile,
      state: open ? "expanded" : "collapsed",
      toggleSidebar,
    }),
    [isMobile, open, openMobile, setOpen, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={value}>
      <div className={cn("flex min-h-svh w-full", className)} {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  const { isMobile, open, openMobile, setOpenMobile } = useSidebar();

  if (isMobile) {
    return (
      <Drawer onOpenChange={setOpenMobile} open={openMobile} side="left">
        <DrawerContent className="w-[18rem] p-3">{children}</DrawerContent>
      </Drawer>
    );
  }

  return (
    <div
      className={cn(
        "group/sidebar flex h-auto shrink-0 flex-col border-r border-[var(--lilt-border)] bg-[var(--lilt-surface)] transition-[width] duration-[var(--duration-base)] ease-[var(--ease-out)]",
        open ? "w-64" : "w-[4.25rem]",
        className
      )}
      data-state={open ? "expanded" : "collapsed"}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarTrigger = ({
  className,
  onClick,
  ...props
}: ComponentProps<"button">) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      aria-label="Toggle sidebar"
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-control-sm)] text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--lilt-canvas)] disabled:pointer-events-none disabled:opacity-45",
        className
      )}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      type="button"
      {...props}
    >
      <MenuIcon size={20} />
    </button>
  );
};

export const SidebarHeader = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-2 p-3", className)} {...props} />
);

export const SidebarContent = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-3",
      className
    )}
    {...props}
  />
);

export const SidebarFooter = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex flex-col gap-2 border-t border-[var(--lilt-border)] p-3",
      className
    )}
    {...props}
  />
);

export const SidebarGroup = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-1", className)} {...props} />
);

export const SidebarGroupLabel = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn(
      "px-2 pb-1 font-display text-xs font-bold uppercase tracking-[0.15em] text-[var(--lilt-text-subtle)] group-data-[state=collapsed]/sidebar:sr-only",
      className
    )}
    {...props}
  />
);

export const SidebarMenu = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul className={cn("flex flex-col gap-1", className)} {...props} />
);

export const SidebarMenuItem = (props: ComponentProps<"li">) => (
  <li {...props} />
);

export interface SidebarMenuButtonProps extends useRender.ComponentProps<"button"> {
  /** Marks this item as the current page (mint fill + aria-current). */
  isActive?: boolean;
}

/**
 * Navigation row for the sidebar menu. Children convention:
 * `<SomeIcon size={18} /><span>Label</span>` — the trailing span truncates
 * while expanded and hides when the rail collapses to icons only.
 * Pass `render={<a href="..." />}` to render as a link.
 */
export const SidebarMenuButton = ({
  className,
  isActive = false,
  render,
  ...props
}: SidebarMenuButtonProps) => {
  const defaultProps: ComponentProps<"button"> & { "data-active"?: string } = {
    "aria-current": isActive ? "page" : undefined,
    className: cn(
      "flex min-h-11 w-full items-center gap-3 rounded-[var(--radius-control-sm)] px-3 text-sm font-medium text-[var(--lilt-text-muted)] outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:bg-[var(--lilt-surface-2)] hover:text-[var(--lilt-text)] focus-visible:ring-2 focus-visible:ring-[var(--lilt-focus)] data-[active]:bg-[var(--lilt-primary-soft)] data-[active]:font-semibold data-[active]:text-[var(--lilt-primary-text)] group-data-[state=collapsed]/sidebar:justify-center group-data-[state=collapsed]/sidebar:px-0 [&>span:last-child]:truncate group-data-[state=collapsed]/sidebar:[&>span:last-child]:hidden",
      className
    ),
    "data-active": isActive ? "" : undefined,
    type: render ? undefined : "button",
  };

  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(defaultProps, props),
    render,
  });
};

export const SidebarSeparator = ({
  className,
  ...props
}: ComponentProps<typeof Separator>) => (
  <Separator className={cn("mx-2 my-1", className)} {...props} />
);

export const SidebarInset = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div className={cn("flex min-w-0 flex-1 flex-col", className)} {...props} />
);
