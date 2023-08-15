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
  return(
    <Section>
      <SectionExplain className="w-[60%] mt-10 mx-auto">
        <SectionHeading className="text-center">Discover flexible spaces and solutions to your business</SectionHeading>
        <SectionDescription className="text-center">For companies of all sizes, we provide the global scale and flexibility to help your business adapt to uncertainty. Find the space that's right for you.</SectionDescription>
      </SectionExplain>
    </Section>
  )
}

const prices = [
  {
    icon: "./icons/silver-price.png",
    tag: "Silver",
    price: "$399/mth",
    desc: "Pay one simple price for everything related to your workspace.",
  },
  {
    icon: "./icons/gold-price.png",
    tag: "Gold",
    price: "$599/mth",
    desc: "Pay one simple price for everything related to your workspace."
  },
  {
    icon: "./icons/platinum-price.png",
    tag: "Platinum",
    price: "$999",
    desc: "Pay one simple price for everything related to your workspace."
  },
]

function PricingSection() {
  return(
    <Section className="flex-col">
      <div className="bg-[#C9E8FF] h-14 p-2 mx-auto w-[25%] rounded-full flex items-center gap-5">
        <div className="bg-white w-[40%] flex items-center text-primary-default rounded-full h-full">
          <p className="font-bold mx-auto">Monthly</p>
        </div>
        <p>Annual (save 15%)</p>
      </div>

      <div className="flex justify-between gap-10">
        {prices.map((price, i) => (
          <Card key={i} active={i === 1}>
            <img src={price.icon} alt="icon" className="w-8"/>
            <p className="font-semibold">{price.tag}</p>
            <h3 className="font-bold text-3xl">{price.price}</h3>
            <p className="opacity-60 text-sm" >{price.desc}</p>
            <div className="border-t-2">
              
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

const questions = [
  {
    text: "What are the benefits of joining the Futurspace network?",
    icon: "./icons/plus.png"
  },
  {
    text: "What should I expect from the screening process?",
    icon: "./icons/plus.png"
  },
  {
    text: "Is Telephone service available?",
    icon: "./icons/plus.png"
  },
  {
    text: "Is the money refundable if I am unable to register?",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare",
    icon: "./icons/min.png"
  },
]

function FAQSection() {
  return(
    <Section className="flex-col">
      <SectionExplain className="w-[80%] mb-10 mx-auto">
        <SectionHeading className="text-center">Frequently asked questions about coworking</SectionHeading>
        <SectionDescription className="text-center w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus commodo at sit mi sed gravida et imperdiet sagittis euismod tortor fringilla amet.</SectionDescription>
      </SectionExplain>
      <div className="space-y-5">
        {questions.map((faq, i) => (
          <Card key={i}>
            <div className="flex justify-between items-center">
              <div className="w-[80%]">
                <CardTitle>{faq.text}</CardTitle>
                <CardDesc className="opacity-80">{faq.desc}</CardDesc>
              </div>
              <img src={faq.icon} alt="icon" className="w-7 h-7"/>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function ContactSection() {
  return (
    <Section className="mt-4 flex flex-row ">
      <div className="bg-[#F0F6FF] p-10 rounded-2xl flex gap-20 justify-between items-center">
        <div className="flex flex-col gap-10 w-[80%]">
          <SectionHeading>
            Confused about which plan would be most suitable for me?
          </SectionHeading>
          <Button className="w-fit">Contact us</Button>
        </div>
        <div>
          <img src="/images/pricing1.png" alt="hero" />
        </div>
      </div>
    </Section>
  );
}

function SubscribeSection() {
  return (
    <Section className="mt-4 flex flex-col">
      <SectionExplain className="w-[80%]">
        <SectionHeading className="text-center">
        We enable people to work where they want, when they want and how they want
        </SectionHeading>
        <SectionDescription className="text-center w-[60%]">
        We offer offices for lease by the day, by the week, or by the year. Choose from any of our 3000 locations. Get a free quote!
        </SectionDescription>
      </SectionExplain>

      <div className="w-full">
        <div className="rounded-full border w-[40%] border-gray-300 flex justify-between p-2 mx-auto">
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

function PricingPage() {
  return(
    <>
      <HeroSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <SubscribeSection />
    </>
  )
}

export default PricingPage;
