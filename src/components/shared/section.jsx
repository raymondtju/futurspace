import React from "react";
import { rc } from "@/lib/utils";

function Section({ children, className }) {
  return (
    <section className={rc("flex justify-between cont", className)}>
      {children}
    </section>
  );
}

export default Section;
