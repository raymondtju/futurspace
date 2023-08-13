import React from "react";
import { rc } from "../lib/utils";

function CardTitle({ children }) {
  return <h4 className="font-bold">{children}</h4>;
}

function CardDesc({ children }) {
  return <p>{children}</p>;
}

function Card({ children, className, active = false }) {
  return (
    <div
      className={rc(
        "p-11 space-y-6 border rounded-2xl def-shadow",
        active ? "border-primary-default" : "border-none",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Card, CardTitle, CardDesc };
