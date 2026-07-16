"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/lilt/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage alt="Portrait of a shiba inu" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=96&h=96&fit=crop" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>LT</AvatarFallback>
      </Avatar>
      <Avatar className="size-14">
        <AvatarFallback className="text-base">UI</AvatarFallback>
      </Avatar>
    </div>
  );
}
