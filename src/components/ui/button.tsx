import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700 shadow-soft",
        destructive: "bg-danger-600 text-white hover:bg-danger-700 shadow-soft",
        outline: "border border-secondary-300 bg-white hover:bg-secondary-50 hover:text-secondary-900",
        secondary: "bg-secondary-100 text-secondary-900 hover:bg-secondary-200",
        ghost: "hover:bg-secondary-100 hover:text-secondary-900",
        link: "text-primary-600 underline-offset-4 hover:underline",
        success: "bg-success-600 text-white hover:bg-success-700 shadow-soft",
        warning: "bg-warning-600 text-white hover:bg-warning-700 shadow-soft",
        calm: "bg-calm-500 text-white hover:bg-calm-600 shadow-soft",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };