import {Navbar, NavbarBlue} from "@/components/nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
