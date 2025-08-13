import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ContactDetails from "@/components/templates/Contact/ContactDetails";
import React from "react";

function Contact() {
  return (
    <>
      <PageHeader route="Contact" bg="/images/darkTop.png"/>
      <ContactDetails />
    </>
  );
}

export default Contact;
