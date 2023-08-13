import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

function NavLogo() {
  return (
    <Link className="flex gap-2 items-center text-lg cursor-pointer" to="/">
      <img src="/logo-filled.svg" alt="logo" />
      <h1 className="text-primary-default font-bold">FUTURSPACE</h1>
    </Link>
  );
}

const navItemList = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "Office",
    path: "/office",
  },
  {
    name: "Spaces",
    path: "/spaces",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
];

function NavItems() {
  return (
    <ul className="flex gap-6 items-center">
      {navItemList.map((item, i) => (
        <Link className="" key={i} to={item.path}>
          {item.name}
        </Link>
      ))}
      <Button>Sign up</Button>
    </ul>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between items-center cont my-12">
      <NavLogo />
      <NavItems />
    </div>
  );
}

export default Navbar;
