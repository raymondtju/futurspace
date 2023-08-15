import React from "react";

import { Button } from "../components/button";
import {
  Section,
  SectionHeading,
  SectionDescription,
  SectionTag,
  SectionExplain,
} from "../components/section";
import { Card, CardDesc, CardTitle } from "../components/card";

function HeroSection() {
  return (
    <Section className="mt-4 items-center ">
      <SectionExplain className="space-y-10 w-[40%]">
        <SectionHeading>
          The workspace that works for you & your team
        </SectionHeading>
        <SectionDescription>
          A safe, comfortable, and hassle-free Coworking workspace increases
          productivity. Ideal workspaces make life easier and more productive.
        </SectionDescription>

        <div className="space-x-6">
          <Button>Discover Now</Button>
          <Button variant="secondary">Book a tour</Button>
        </div>
      </SectionExplain>

      <div className="w-[40%]">
        <img src="/images/home1.png" alt="hero" />
      </div>
    </Section>
  );
}

const services = [
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
    icon: "./icons/services1.png"
  },
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
    icon: "./icons/services2.png"
  },
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
    icon: "./icons/services3.png"
  },
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
    icon: "./icons/services4.png"
  },
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
    icon: "./icons/services5.png"
  },
];

function OurServicesSection() {
  return (
    <Section className="mt-4 flex flex-col items-start">
      <SectionExplain className="w-[80%]">
        <SectionTag>OUR SERVICES</SectionTag>
        <SectionHeading>
          Flexible Solutions for Your Business - Choose What Works Best for You
        </SectionHeading>
      </SectionExplain>

      <div className="grid grid-cols-3 gap-10">
        {services.map((service, i) => (
          <Card key={i} active={i === 1}>
            <img src={service.icon} alt="icon" className="w-10"/>
            <CardTitle>{service.title}</CardTitle>
            <CardDesc>{service.desc}</CardDesc>
            <div>
              <p className="text-primary-default font-bold">Learn more</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const secsOne = [
  {
    title: "Discover a busines location",
    desc: "Our mission is to provide unparalleled value that increases over time. Our space is more than a shared office.",
  },
  {
    title: "The most efficient workspace solutions",
  },
  {
    title: "Design your productive space",
  },
];

function SectionOne() {
  return (
    <Section className="mt-4">
      <div className="my-20">
        <img src="/images/home4.png" alt="hero" className="w-5/6" />
      </div>

      <SectionExplain className="w-2/5 ">
        <SectionHeading>
          A complete coworking space solution for your business and team
        </SectionHeading>

        <div className="grid gap-7 pt-10">
          {secsOne.map((item, i) => (
            <Card key={i} active={i === 0}>
              <CardTitle>{item.title}</CardTitle>
              {item.desc && <CardDesc>{item.desc}</CardDesc>}
            </Card>
          ))}
        </div>
      </SectionExplain>
    </Section>
  );
}

const whyServiced = [
  {
    title: "Office Space",
    image: "/images/home-why1.png",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
  },
  {
    title: "Office Space",
    image: "/images/home-why2.png",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
  },
  {
    title: "Office Space",
    image: "/images/home-why3.png",
    desc: "Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.",
  },
];

function WhyServicesSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="w-2/3">
        <SectionTag className="text-center">WHY SERVICED OFFICE</SectionTag>
        <SectionHeading className="text-center">
          We've helped thousands of fast-growing startups and teams
        </SectionHeading>
        <SectionDescription className="text-center">
          Grow without restriction. By giving you space that can be changed as
          your business grows. Only pay for the space you use with everything
          you need to be included in one price.
        </SectionDescription>
      </SectionExplain>

      <div className="grid grid-cols-3 gap-7">
        {whyServiced.map((item, i) => (
          <Card key={i}>
            <img src={item.image} alt="why" />
            <CardTitle>{item.title}</CardTitle>
            <CardDesc>{item.desc}</CardDesc>
            <div className="flex cursor-pointer gap-3 items-center">
              <p className="text-primary-default font-bold">Learn more</p>
              <img src="./icons/r-arrow.png" alt="icon" className="w-5 h-5"/>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const locations = [
  {
    name: "New Orleans, USA"
  },
  {
    name: "Bangalore, India"
  },
  {
    name: "Sydney, Australia "
  }
]

function OurOfficeSection() {
  return (
    <Section className="mt-4 flex gap-x-28">
      <div className="w-1/2">
        <img src="/images/home2.png" alt="hero" />
      </div>
      <SectionExplain className="w-1/2">
        <SectionTag>OUR OFFICES</SectionTag>
        <SectionHeading>
          Discover the Location that Best Fits Your Business Needs
        </SectionHeading>
        <SectionDescription>
          As we headstart into this new normal, we are ensuring your workspace
          experience remains exceptional.
        </SectionDescription>

        <div className="space-y-5 py-10">
          {locations.map((location, i) => (
            <div key={i} className="flex items-center gap-5">
              <img className="w-10" src="./icons/map.png" alt="icon" />
              <p className="font-bold text-lg text-[#2E3135]">{location.name}</p>
            </div>
          ))}
        </div>

        <Button>View Locations</Button>
      </SectionExplain>
    </Section>
  );
}

const reviews = [
  {
    user: "Del Gibbs",
    desc: "Futurspace is an excellent coworking space for my agency. It’s a great place to meet other business. owners expectations",
    position: "VP, Globee Softech",
    img: "./images/home-rev1.png",
    rating: "⭐ ⭐ ⭐ ⭐"
  },
  {
    user: "Britanny",
    desc: "Quisque consectetur vulputate odio, non dictum metus porttitor molestie. Duis pharetra suscipit dolor, quis euismod velit fringilla sed.",
    position: "Co-Founder & CTO - Payfi",
    img: "./images/home-rev2.png",
    rating: "⭐ ⭐ ⭐ ⭐"
  },
  {
    user: "Randal Robertson",
    desc: "Lorem ipsum dolor sit amet consectetur non adipiscing elit gravida posuere odio metus adipiscing tincidunt venenatis amet sagittis tellus porttitor enim blandit venenatis tellus.",
    position: "Project lead at Zoole",
    img: "./images/home-rev3.png",
    rating: "⭐ ⭐ ⭐ ⭐"
  }
]


function ReviewsSection() {
  return (
    <div className="mb-32">
      <Section>
        <div className="gap-10">
          <SectionExplain>
            <SectionTag>REVIEWS</SectionTag>
            <SectionHeading>What Our Members Say</SectionHeading>
          </SectionExplain>
        </div>
        <div className="inline-flex gap-10">
          <img className="w-10" src="./icons/L-arrow.png" alt="btn" />
          <img className="w-10" src="./icons/RB-arrow.png" alt="btn" />
        </div>
      </Section>

      <div className="grid grid-cols-3 gap-10 -mt-10">
        {reviews.map((rev, i) => (
          <Card key={i}>
            <h2>{rev.rating}</h2>
            <CardDesc>{rev.desc}</CardDesc>
            <div className="flex gap-3">
              <div className="rounded-full">
                <img className="w-10" src={rev.img} alt="user-img" />
              </div>
              <div>
                <CardTitle>{rev.user}</CardTitle>
                <CardDesc>{rev.position}</CardDesc>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

function SectionTwo() {
  return (
    <Section className="mt-4">
      <div className="bg-[#F0F6FF] p-14 w-full rounded-2xl flex justify-between items-center">
        <div className="flex flex-col gap-6 w-3/4">
          <SectionHeading>
            Customised workspace for rent wherever you need it
          </SectionHeading>
          <Button className="w-fit">Book Tour</Button>
        </div>
        <div>
          <img src="/images/home3.png" alt="hero" />
        </div>
      </div>
    </Section>
  );
}

function SectionThree() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="w-5/6">
        <SectionHeading className="text-center">
          We enable people to work where they want, when they want and how they
          want
        </SectionHeading>
        <SectionDescription className="text-center w-2/3">
          We offer offices for lease by the day, by the week, or by the year.
          Choose from any of our 3000 locations. Get a free quote!
        </SectionDescription>
      </SectionExplain>

      <div className="">
        <div className="rounded-full border border-gray-300 flex justify-between max-w-xl p-2.5 mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none pl-4 w-full"
          />
          <Button>Submit</Button>
        </div>

        <SectionDescription className="text-center mt-4">
          No worries, we don’t do spam!
        </SectionDescription>
      </div>
    </Section>
  );
}

function MainPage() {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
      <SectionOne />
      <WhyServicesSection />
      <OurOfficeSection />
      <ReviewsSection />
      <SectionTwo />
      <SectionThree />
    </>
  );
}

export{
  MainPage, 
  WhyServicesSection,
};
