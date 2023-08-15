import React from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  iconButton
} from "@material-tailwind/react";


function NavLogo() {
  return (
    <Link className="flex gap-2 items-center text-lg cursor-pointer" to="/">
      <img src="/logo-filled.svg" alt="logo" className="w-8" />
      <h1 className="text-primary-default text-2xl font-bold">FUTURSPACE</h1>
    </Link>
  );
}

function NavBlueLogo() {
  return (
    <Link className="flex gap-2 items-center text-lg cursor-pointer" to="/">
      <img src="/logo-white.svg" alt="logo" className="w-8" />
      <h1 className="text-white text-2xl font-bold">FUTURSPACE</h1>
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
    name: "Offices",
    path: "/offices",
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
    <ul className="lg:flex gap-8 items-center hidden">
      {navItemList.map((item, i) => (
        <Link className="opacity-80 hover:opacity-100 focus:font-semibold focus:opacity-100" key={i} to={item.path}>
          {item.name}
        </Link>
      ))}
      <Button>Sign up</Button>
    </ul>
  );
}

function NavBlueItems() {
  return (
    <ul className="flex gap-8 items-center text-white">
      {navItemList.map((item, i) => (
        <Link className="opacity-80 hover:opacity-100 focus:font-semibold focus:opacity-100" key={i} to={item.path}>
          {item.name}
        </Link>
      ))}
      <Button variant="secondary">Sign up</Button>
    </ul>
  );
}

function DrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <IconButton variant="text" className="ml-auto h-8 w-8 text-inherit hover:bg-gray-300 focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={openDrawer}>
      <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
      </IconButton>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-5 space-x-5">
          <NavLogo />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </IconButton>
        </div>
        <List>
          {navItemList.map((item, i) => (
            <ListItem>
              <Link className="opacity-80 hover:opacity-100 focus:font-semibold focus:opacity-100" key={i} to={item.path}>
                {item.name}
              </Link>
            </ListItem>

          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
function Navbar() {
  return (
    <div className="flex justify-between items-center cont my-12">
      <NavLogo />
      <NavItems />
      <DrawerWithNavigation />
    </div>
  );
}

function NavbarBlue() {
  return (
    <div className="bg-primary-default py-12">
      <div className="flex justify-between items-center cont">
        <NavBlueLogo />
        <NavBlueItems />
      </div>
    </div>
  );
}

export {
  Navbar,
  NavbarBlue,
  DrawerWithNavigation
};
