"use client";

import { Button } from "@/registry/lilt/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHandle,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/lilt/ui/drawer";

export default function DrawerDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Drawer>
        <DrawerTrigger
          render={<Button variant="secondary">Today’s notes</Button>}
        />
        <DrawerContent>
          <DrawerHandle />
          <DrawerTitle>Today’s notes</DrawerTitle>
          <DrawerDescription>
            Two small wins, one stubborn bug, and a reminder to water the desk
            fern. Swipe down when you’re done reading.
          </DrawerDescription>
          <DrawerFooter>
            <DrawerClose render={<Button>Tuck them away</Button>} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer side="right">
        <DrawerTrigger render={<Button variant="secondary">Settings</Button>} />
        <DrawerContent>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>
            Everything here saves as you go — no submit button, no suspense.
          </DrawerDescription>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-[var(--lilt-text-muted)]">Theme</dt>
              <dd className="font-semibold">Follows system</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-[var(--lilt-text-muted)]">Weekly digest</dt>
              <dd className="font-semibold">Fridays</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-[var(--lilt-text-muted)]">Sounds</dt>
              <dd className="font-semibold">Just the nice ones</dd>
            </div>
          </dl>
          <DrawerFooter>
            <DrawerClose render={<Button variant="secondary">Done</Button>} />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
