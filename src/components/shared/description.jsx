import { rc } from "@/lib/utils";

function Description({ className, children }) {
  return <h1 className={rc("text-lg leading-6", className)}>{children}</h1>;
}

export default Description;
