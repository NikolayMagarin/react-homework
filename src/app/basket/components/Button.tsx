import { ComponentProps } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  className,
  ...props
}: {
  variant?: "primary" | "outline";
} & ComponentProps<"button">) {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: variant === "primary",
        [styles.outline]: variant === "outline",
      })}
      {...props}
    />
  );
}
