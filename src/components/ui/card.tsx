import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border bg-card text-card-foreground shadow-md",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-muted-foreground/20",
        "overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5" />
      <div className="relative z-10">{children}</div>
    </div>
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