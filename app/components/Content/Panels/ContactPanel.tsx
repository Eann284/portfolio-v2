import React from "react";
import ContactForm from "../ContactForm";
import MoreContact from "../MoreContact";

function ContactPanel() {
  return (
    <section className="flex flex-col gap-5 py-4 lg:px-20 ">
      <h1 className="mx-auto text-3xl">Contact</h1>

      <p className="text-center">Feel free to leave a message for me!</p>

      <div className="flex flex-col gap-5 mx-auto rounded-lg w-full ">
        <ContactForm />

        {/* <MoreContact /> */}
      </div>
    </section>
  );
}

export default ContactPanel;
