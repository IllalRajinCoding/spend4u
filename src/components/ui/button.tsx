import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-[#2f5bff] text-white shadow-[0_10px_28px_rgba(47,91,255,0.32)] hover:bg-[#224df0] focus-visible:ring-[#9bb0ff]",
  secondary:
    "bg-white text-[#11172a] border border-[#d9dfec] hover:bg-[#f7f9ff] focus-visible:ring-[#d7def3]",
  ghost:
    "bg-transparent text-[#4f5a78] hover:bg-[#f2f5ff] focus-visible:ring-[#d7def3]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function sharedClasses(variant: ButtonVariant, size: ButtonSize) {
  return cn(
    "inline-flex items-center justify-center rounded-xl font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
  );
}

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={cn(sharedClasses(variant, size), className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "default",
  size = "md",
  ...props
}: Readonly<ButtonLinkProps>) {
  return (
    <Link className={cn(sharedClasses(variant, size), className)} {...props} />
  );
}
