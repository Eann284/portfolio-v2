import React from "react";
import ContactForm from "../ContactForm";
import MoreContact from "../MoreContact";

function ContactPanel() {
  return (
    <section className="relative flex flex-col gap-5 py-4 px-20 ">
      <h1 className="mx-auto text-3xl">Contact</h1>

      <p className="text-center">Feel free to leave a message for me!</p>

      <div className="flex flex-row gap-5 mx-auto border rounded-lg p-4">
        <ContactForm />

        <MoreContact />
      </div>
    </section>
  );
}

export default ContactPanel;
