import React from "react";

const footItems = [
  {
    title: "About",
    children: [
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Pricing ",
        link: "#",
      },
      {
        name: "Offices",
        link: "#",
      },
      {
        name: "Spaces",
        link: "#",
      },
    ],
  },
  {
    title: "About",
    children: [
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Pricing ",
        link: "#",
      },
      {
        name: "Offices",
        link: "#",
      },
      {
        name: "Spaces",
        link: "#",
      },
    ],
  },
  {
    title: "About",
    children: [
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Pricing ",
        link: "#",
      },
      {
        name: "Offices",
        link: "#",
      },
      {
        name: "Spaces",
        link: "#",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="cont border-t pt-16 mb-32">
      <div className="flex justify-between">
        <div>
          <h1 className="text-primary-default font-bold">FUTURSPACE</h1>
          <p className="text-sm leading-6 text-[#000]/50 text-left max-w-xs mt-4">
            We want to build more than nice, shared office spaces. We want to
            build a community.
          </p>
        </div>

        <div className="flex gap-48">
          {footItems.map((item, i) => (
            <div key={i}>
              <h4 className="font-bold text-2xl">{item.title}</h4>
              <ul className="flex flex-col gap-4 mt-6">
                {item.children.map((child, i) => (
                  <li key={i}>
                    <a href={child.link} className="text-[#000]/50">
                      {child.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[#000]/50 text-sm">
          © 2023 All rights reserved - Futurspace
        </p>
      </div>
    </footer>
  );
}
