import React from "react";

import Heading from "../components/shared/heading";
import { Button } from "../components/shared/button";
import Description from "../components/shared/description";
import Section from "../components/shared/section";

function MainPage() {
  return (
    <Section className="mt-4">
      <div className="w-2/5">
        <Heading>The workspace that works for you & your team</Heading>
        <Description>
          A safe, comfortable, and hassle-free Coworking workspace increases
          productivity. Ideal workspaces make life easier and more productive.
        </Description>

        <div>
          <Button>Dscover Now</Button>
          <Button variant="secondary">Book a tour</Button>
        </div>
      </div>

      <div className="">
        <img src="/images/home1.png" alt="hero" />
      </div>
    </Section>
  );
}

export default MainPage;
