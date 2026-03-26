import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"span">>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#dbe3ff] bg-[#eef2ff] px-3 py-1 text-xs font-medium text-[#345dfb]",
        className,
      )}
      {...props}
    />
  );
}
