"use client";

import { Button } from "@/registry/lilt/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/lilt/ui/dialog";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary">Archive project</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Archive this project?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          It moves out of your workspace but nothing is deleted. You can
          restore it any time from the archive.
        </DialogDescription>
        <DialogFooter>
          <DialogClose render={<Button>Archive it</Button>} />
          <DialogClose render={<Button variant="secondary">Keep it</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
