import { rc } from "@/lib/utils";

function Heading({ className, children }) {
  return <h1 className={rc("font-bold text-4xl", className)}>{children}</h1>;
}

export default Heading;
