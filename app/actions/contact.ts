'use server'; 

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {

    // declare form values

    const firstName = formData.get('firstName') as string
    const email = formData.get('email') as string;
    const body = formData.get('body') as string;

    if(!firstName || !email || !body) {
        return {
            success: false,
            message: 'Please fill out all fields!'
        }
    }

    try {
       const {data, error} = await resend.emails.send({
        from: process.env.EMAIL_SENDER!,
        to: process.env.EMAIL_RECEIVER!,
        subject: `Message from ${firstName}`,
        replyTo: email, 
        html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${body}</p>
      `
    })

    return {success: true, message: "Email send successfully!"}
       
    } catch (error) {
         console.error('Resend error:', error)
      return { 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      }
    }
    
}