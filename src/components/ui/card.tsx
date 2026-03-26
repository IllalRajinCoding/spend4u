import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#e5e9f2] bg-white shadow-[0_12px_28px_rgba(15,22,40,0.06)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return <div className={cn("px-6 pt-6", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}
