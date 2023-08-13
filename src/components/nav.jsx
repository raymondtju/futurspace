import React from "react";
import { Button } from "./shared/button";

function NavLogo() {
  return (
    <div className="flex gap-2 items-center text-lg">
      <img src="/logo-filled.svg" alt="logo" />
      <h1 className="text-primary-default font-bold">FUTURSPACE</h1>
    </div>
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
        <li className="" key={i}>
          {item.name}
        </li>
      ))}
      <Button>Sign up</Button>
    </ul>
  );
}

function Navbar() {
  return (
    <div className="flex justify-between items-center cont my-8">
      <NavLogo />
      <NavItems />
    </div>
  );
}

export default Navbar;
