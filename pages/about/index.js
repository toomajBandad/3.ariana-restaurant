import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Story from "@/components/templates/About/Story";
import React from "react";

function About() {
  return (
    <>
      <PageHeader route="About" bg="/images/darkTop.png" />
      <Story />
    </>
  );
}

export default About;
