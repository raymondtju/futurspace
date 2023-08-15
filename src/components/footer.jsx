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
    title: "Product",
    children: [
      {
        name: "Office Space",
        link: "#",
      },
      {
        name: "Business Lounge",
        link: "#",
      },
      {
        name: "Meeting Room",
        link: "#",
      },
      {
        name: "Virtual Office",
        link: "#",
      },
    ],
  },
  {
    title: "Contact",
    children: [
      {
        name: "Help Desk",
        link: "#",
      },
      {
        name: "Book A Tour",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Forum",
        link: "#",
      },
    ],
  },
];

const icons = [
  {icon: "./icons/facebook.png"},
  {icon: "./icons/linkidn.png"},
  {icon: "./icons/instagram.png"},
  {icon: "./icons/twitter.png"}
]

export default function Footer() {
  return (
    <footer className="cont border-t pt-16 mb-32">
      <div className="flex justify-between">
        <div>
          <h1 className="text-primary-default text-2xl font-bold">FUTURSPACE</h1>
          <p className="text-sm leading-6 text-[#000]/50 text-left max-w-xs mt-4">
            We want to build more than nice, shared office spaces. We want to
            build a community.
          </p>
          <div className="flex gap-5 my-10">
            {icons.map((icon) => <img className="h-5" src={icon.icon} alt="icon"/>)}
          </div>
        </div>

        <div className="flex gap-48 text-sm">
          {footItems.map((item, i) => (
            <div key={i}>
              <h4 className="font-bold text-xl">{item.title}</h4>
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
