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
    <Section className="mt-4 items-center">
      <SectionExplain className="w-2/5">
        <SectionHeading>
          The workspace that works for you & your team
        </SectionHeading>
        <SectionDescription>
          A safe, comfortable, and hassle-free Coworking workspace increases
          productivity. Ideal workspaces make life easier and more productive.
        </SectionDescription>

        <div className="space-x-6">
          <Button>Dscover Now</Button>
          <Button variant="secondary">Book a tour</Button>
        </div>
      </SectionExplain>

      <div className="">
        <img src="/images/home1.png" alt="hero" />
      </div>
    </Section>
  );
}

const services = [
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
  },
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
  },
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
  },
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
  },
  {
    title: "Hot Desks",
    desc: "Ideal for members who need a productive space to work.",
  },
];

function OurServicesSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain>
        <SectionTag>OUR SERVICES</SectionTag>
        <SectionHeading>
          Flexible Solutions for Your Business - Choose What Works Best for You
        </SectionHeading>
      </SectionExplain>

      <div className="grid grid-cols-3 gap-7">
        {services.map((service, index) => (
          <Card active={index === 1}>
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
      <div className="">
        <img src="/images/home4.png" alt="hero" />
      </div>

      <SectionExplain className="w-2/5">
        <SectionHeading>
          A complete coworking space solution for your business and team
        </SectionHeading>

        <div className="grid gap-7">
          {secsOne.map((item, index) => (
            <Card active={index === 1}>
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
      <SectionExplain>
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
        {whyServiced.map((item, index) => (
          <Card active={index === 1}>
            <img src={item.image} alt="why" />
            <CardTitle>{item.title}</CardTitle>
            <CardDesc>{item.desc}</CardDesc>
            <div>
              <p className="text-primary-default font-bold">Learn more</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function OurOfficeSection() {
  return (
    <Section className="mt-4 flex flex-row ">
      <div className="w-1/2">
        <img src="/images/home2.png" alt="hero" />
      </div>
      <SectionExplain className="w-1/2">
        <SectionTag>OUR OFFICE</SectionTag>
        <SectionHeading>
          Discover the Location that Best Fits Your Business Needs
        </SectionHeading>
        <SectionDescription>
          As we headstart into this new normal, we are ensuring your workspace
          experience remains exceptional.
        </SectionDescription>

        <Button>View Locations</Button>
      </SectionExplain>
    </Section>
  );
}

function SectionTwo() {
  return (
    <Section className="mt-4 flex flex-row ">
      <div className="bg-[#F0F6FF] p-14 w-full rounded-2xl flex justify-between items-center">
        <div className="flex flex-col gap-6">
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
      <SectionExplain>
        <SectionHeading className="text-center">
          We enable people to work where they want, when they want and how they
          want
        </SectionHeading>
        <SectionDescription className="text-center">
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
      <SectionTwo />
      <SectionThree />
    </>
  );
}

export default MainPage;
