import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const IconBase = ({ children, size = 20, className, ...props }: IconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    {children}
  </svg>
);

export const SparkIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="M12 2.8c.25 5.4 2.4 7.7 7.7 8.2-5.2.55-7.45 2.8-7.7 8.2-.3-5.35-2.55-7.65-7.7-8.2 5.2-.5 7.4-2.8 7.7-8.2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.65"
    />
    <path
      d="M19.2 3.8c.1 1.65.8 2.35 2.4 2.55-1.6.15-2.3.85-2.4 2.5-.15-1.65-.85-2.35-2.4-2.5 1.6-.2 2.25-.9 2.4-2.55Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.35"
    />
  </IconBase>
);

export const ArrowIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="M4 12.4c4.2-.15 8.1-.1 15.5-.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
    <path
      d="m15.2 7.8 4.5 4.35-4.3 4.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </IconBase>
);

export const SunIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.7"
    />
  </IconBase>
);

export const MoonIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.6 8.6 0 1 0 20.2 15Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </IconBase>
);

export const CheckIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="m5 12.4 4.25 4.05L19.4 6.8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </IconBase>
);

export const CloseIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="m6.4 6.4 11.2 11.2M17.6 6.4 6.4 17.6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </IconBase>
);

export const MenuIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="M4 6.8c4.4-.2 9.6-.1 16 0M4 12c5.5-.1 10.4 0 16 0M4 17.2c3.9.15 8.8.1 12.5 0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </IconBase>
);

export const ChevronIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="m6.2 9.4 5.7 5.5 5.9-5.6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </IconBase>
);

export const PlusIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="M12.05 5.5c-.05 4.3-.05 8.7 0 13M5.5 12.05c4.3-.1 8.7-.05 13-.05"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </IconBase>
);

export const MinusIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="M5.4 12.1c4.4-.2 8.9-.15 13.2-.1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </IconBase>
);

export const InfoIcon = (props: IconProps) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.65" />
    <path
      d="M12 10.8c.05 2.1.05 4.2 0 6.3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
    <path
      d="M11.95 7.2h.1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.2"
    />
  </IconBase>
);

export const WarningIcon = (props: IconProps) => (
  <IconBase {...props}>
    <path
      d="M11.1 3.9 2.9 18.3c-.5.9.1 2 1.15 2h15.9c1.05 0 1.65-1.1 1.15-2L12.9 3.9a1.03 1.03 0 0 0-1.8 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.65"
    />
    <path
      d="M12 9.4c.05 1.75.05 3.5 0 5.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
    <path
      d="M11.95 17.6h.1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.2"
    />
  </IconBase>
);

export const ScribbleArrow = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    viewBox="0 0 104 60"
  >
    <path
      d="M5 14c22-8 45-5 58 5 12 9 10 22-1 28-8 4-20 1-17-8 4-11 27-13 48-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
    <path
      d="m86 26 9 7-10 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
