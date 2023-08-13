import Navbar from "@/components/nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}
