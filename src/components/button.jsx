import * as React from "react";
import { cva } from "class-variance-authority";

import { rc } from "@/lib/utils";

const buttonVariants = cva("rounded-3xl font-bold", {
  variants: {
    variant: {
      default: "bg-primary-default text-white",
      secondary: "bg-white text-primary-default border border-primary-default",
    },
    size: {
      default: "px-7 py-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={rc(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
