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
      className="flex flex-col gap-5 w-150 mx-auto p-4 ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e] rounded-lg"
    >
      <FieldSet className="w-full  mx-auto">
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city">Name</FieldLabel>
            <Input name="firstName" type="text" required className="ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]"/>
          </Field>
          <Field>
            <FieldLabel htmlFor="zip">Email</FieldLabel>
            <Input name="email" type="text" required className="ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]"/>
          </Field>
        </div>
         <Field>
          <FieldLabel htmlFor="street">Message</FieldLabel>
          <Textarea name="body" placeholder="Hello, Eann!" required className="ring-2 ring-green-500 shadow-[0_0_8px_#22c55e,0_0_16px_#22c55e]"/>
        </Field>
      </FieldGroup>
      <Button type="submit">Send Message</Button>
    </FieldSet>


     

    </form>
  );
}

export default ContactForm;
