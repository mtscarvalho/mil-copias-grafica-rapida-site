import { cn } from "@/utilities/cn";
import React from "react";

type HeroProps = {
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
};

export default function BoxedSection({ children, className, fullScreen = true }: HeroProps) {
  return (
    <section className={cn("grid", fullScreen && "min-h-screen")}>
      <div className={cn("bg-primary border-primary grid items-center overflow-hidden border pt-32 pb-24 shadow-2xs sm:m-6 lg:pt-40", className)}>{children}</div>
    </section>
  );
}
