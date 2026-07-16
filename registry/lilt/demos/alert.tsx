"use client";

import { Alert, AlertDescription, AlertTitle } from "@/registry/lilt/ui/alert";

export default function AlertDemo() {
  return (
    <div className="grid w-full max-w-lg gap-4">
      <Alert variant="success">
        <AlertTitle>Nice. Everything is up to date.</AlertTitle>
        <AlertDescription>Your changes synced a moment ago.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Storage is almost full</AlertTitle>
        <AlertDescription>
          You have 2&nbsp;GB left. Consider archiving older projects.
        </AlertDescription>
      </Alert>
      <Alert variant="danger">
        <AlertTitle>Export failed</AlertTitle>
        <AlertDescription>
          The file could not be written. Check permissions and try again.
        </AlertDescription>
      </Alert>
    </div>
  );
}
