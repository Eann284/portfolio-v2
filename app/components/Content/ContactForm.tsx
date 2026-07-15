"use client";

import { sendEmail } from "@/app/actions/contact";
import React, { useRef, useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"



function ContactForm() {
  const [message, setMessage] = useState("");
  const [resetKey, setResetKey] = useState(0)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const result = await sendEmail(formData);

    if (result.success) {
      setMessage(message);
      setResetKey(prev => prev + 1)
      const successToast = () => (
        toast.success("Message has been sent!")
      )
      successToast()
    } else {
     setMessage(message)
    }
  };

  return (
    <form
      key={resetKey}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-100 mx-auto p-4"
    >
      <FieldSet className="w-full max-w-sm">
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city">Name</FieldLabel>
            <Input name="firstName" type="text"/>
          </Field>
          <Field>
            <FieldLabel htmlFor="zip">Email</FieldLabel>
            <Input name="email" type="text"/>
          </Field>
        </div>
         <Field>
          <FieldLabel htmlFor="street">Street Address</FieldLabel>
          <Textarea name="body" placeholder="Hello, Eann!" />
        </Field>
      </FieldGroup>
      <Button type="submit">Send Message</Button>
    </FieldSet>


     

    </form>
  );
}

export default ContactForm;
