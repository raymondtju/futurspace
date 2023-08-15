import React from "react";
import { MainPage, WhyServicesSection } from "./index";

import { Button } from "../components/button";
import {
  Section,
  SectionHeading,
  SectionDescription,
  SectionTag,
  SectionExplain,
} from "../components/section";
import { Card, CardDesc, CardTitle } from "../components/card";
import { rc } from "../lib/utils";

function HeroPage() {
  return (
    <Section className="flex-col mb-10">
      <SectionExplain className="flex justify-between items-center md:flex-row flex-col">
        <SectionHeading className="md:w-[20%] md:text-left text-center">
          About our company
        </SectionHeading>
        <SectionDescription className="md:w-[40%] text-white leading-7 text-lg opacity-80 font-thin md:text-left text-center">
          Our space is more than a shared office. It is a meeting ground for
          creatives and teams <br />
          <br /> Find focus and clarity space to do the things you need to do to
          grow your business in New York. Book by the month, daily or by the
          hour.
        </SectionDescription>
      </SectionExplain>

      <div className="">
        <img src="./images/about1.png" alt="" />
      </div>
    </Section>
  );
}

const datas = [
  {
    dataInt: "3000+",
    title: "Happy Members",
    desc: "We offer offices for lease by the day, by the week, or by the year.",
  },
  {
    dataInt: "12+",
    title: "Locations across the globe",
    desc: "We offer offices for lease by the day, by the week, or by the year.",
  },
  {
    dataInt: "10+",
    title: "Years Of Service",
    desc: "We offer offices for lease by the day, by the week, or by the year.",
  },
];

function DataSection() {
  return (
    <Section className="flex-col">
      <SectionExplain>
        <SectionHeading>
          Our space is more than a shared office. It is a meeting ground for
          creatives and teams
        </SectionHeading>
        <SectionDescription className="mx-0">
          Find focus and clarity space to do the things you need to do to grow
          your business in New York. Book by the month, daily or by the hour.
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-16 gap-8 border-t-2 border-gray-300 pt-10">
        {datas.map((data, i) => (
          <div key={i} className="space-y-3">
            <SectionTag className="text-3xl">{data.dataInt}</SectionTag>
            <CardTitle className="text-lg">{data.title}</CardTitle>
            <CardDesc>{data.desc}</CardDesc>
          </div>
        ))}
      </div>
    </Section>
  );
}

const profiles = [
  {
    img: "./images/about-team1.png",
    name: "John Carter",
    position: "CEO & Founder",
  },
  {
    img: "./images/about-team2.png",
    name: "Sophie Moore",
    position: "CTO & Founder",
  },
  {
    img: "./images/about-team4.png",
    name: "Matt Cannon",
    position: "VP Of Finance",
  },
  {
    img: "./images/about-team3.png",
    name: "Andy Smith",
    position: "VP Of Design",
  },
  {
    img: "./images/about-team5.png",
    name: "Sam Houston",
    position: "VP Of Products",
  },
];

function LeadershipSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="w-[60%] mx-auto">
        <SectionTag className="text-center">OUR LEADERSHIP TEAM</SectionTag>
        <SectionHeading className="text-center">
          Meet the great team behind Futurspace
        </SectionHeading>
        <SectionDescription className="text-center">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sapien
          vestibulum quam massa viverra blandit sit auctor vestibulum semper
          viverra aliquet sit.
        </SectionDescription>
      </SectionExplain>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-20">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className={rc(
              "flex flex-col justify-center text-center space-y-3",
              "sm:col-span-1",
              i === 4 && "col-span-2"
            )}
          >
            <img
              src={profile.img}
              alt="leader"
              className="max-w-[170px] mx-auto"
            />
            <CardTitle>{profile.name}</CardTitle>
            <CardDesc>{profile.position}</CardDesc>
          </div>
        ))}
      </div>
    </Section>
  );
}

function JoinTeamSection() {
  return (
    <Section row>
      <div className="bg-[#0190fe11] flex md:flex-row flex-col md:p-20 p-14 items-baseline rounded-3xl">
        <SectionHeading className="md:w-[40%] mx-0">
          Join our team
        </SectionHeading>
        <SectionExplain className="md:w-[60%] w-full md:mt-0 mt-12">
          <SectionDescription>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sapien eget
            eu elementum velit nunc tortor pulvinar ornare at mi sed nisl in
            proin sollicitudin ultricies aliquet malesuada aliquet.
          </SectionDescription>
          <div className="flex gap-2 items-center">
            <p className="text-primary-default font-bold">Explore Jobs</p>
            <img className="w-5 h-5" src="./icons/r-arrow.png" alt="icon" />
          </div>
        </SectionExplain>
      </div>
    </Section>
  );
}

function ClientSection() {
  return (
    <div className="cont text-center px-20 mb-20">
      <p className="opacity-60 font-bold mb-5">
        Trusted by top companies and startups around the world
      </p>
      <div>
        <img src="./images/about-company.png" alt="partners" />
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <Section className="">
      <div className="md:p-20 p-12 bg-[#0190fe11] rounded-3xl gap-20 flex md:flex-row flex-col-reverse">
        <SectionExplain className="md:w-[60%]">
          <SectionHeading>
            We have all the amenities you need to grow your business starting on
            day one
          </SectionHeading>
          <SectionDescription>
            We strive to create a professional and welcoming environment in
            order to foster collaboration, creativity, and productivity.
          </SectionDescription>
          <Button>Get Started</Button>
        </SectionExplain>
        <div>
          <img src="./images/space2.png" alt="cta-img" />
        </div>
      </div>
    </Section>
  );
}

function SubscribeSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain>
        <SectionHeading className="text-center">
          Modern workspaces that fits your needs
        </SectionHeading>
        <SectionDescription className="text-center">
          No subscriptions or lousy monthly fees. Only pay for the space and
          time you need
        </SectionDescription>
      </SectionExplain>

      <div className="w-full">
        <div className="rounded-full border md:w-[40%] border-gray-300 flex justify-between p-2 mx-auto">
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

function AboutPage() {
  return (
    <>
      <div className="bg-primary-default text-white pb-1 mb-32">
        <HeroPage />
      </div>
      <DataSection />
      <WhyServicesSection />
      <LeadershipSection />
      <JoinTeamSection />
      <ClientSection />
      <CtaSection />
      <SubscribeSection />
    </>
  );
}

export default AboutPage;
