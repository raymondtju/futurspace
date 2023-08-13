import React from "react";
import { rc } from "@/lib/utils";

function SectionHeading({ className, children }) {
  return (
    <h1
      className={rc(
        "font-bold text-4xl max-w-[1166px] mx-auto text-left",
        className
      )}
    >
      {children}
    </h1>
  );
}

function SectionDescription({ className, children }) {
  return (
    <h1
      className={rc(
        "text-lg leading-6 text-[#000]/50 max-w-5xl mx-auto text-left",
        className
      )}
    >
      {children}
    </h1>
  );
}

function SectionTag({ className, children }) {
  return (
    <p className={rc("text-primary-default font-bold", className)}>
      {children}
    </p>
  );
}

function SectionExplain({ className, children }) {
  return <div className={rc("space-y-6", className)}>{children}</div>;
}

function Section({ children, className }) {
  return (
    <section
      className={rc(
        "flex justify-between cont gap-16 mb-32 items-center",
        className
      )}
    >
      {children}
    </section>
  );
}

export {
  Section,
  SectionHeading,
  SectionDescription,
  SectionTag,
  SectionExplain,
};
