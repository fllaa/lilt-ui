"use client";

import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/lilt/ui/alert-dialog";
import { Button } from "@/registry/lilt/ui/button";

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="secondary">Delete this list</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this list?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          This deletes the list and every item on it. There is no undo and no
          archive to restore it from.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogClose
            render={<Button variant="danger">Delete it</Button>}
          />
          <AlertDialogClose
            render={<Button variant="secondary">Keep it</Button>}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
