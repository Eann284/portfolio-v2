'use client';

import { sendEmail } from '@/app/actions/contact';
import React, { useState } from 'react'

function ContactForm() {

    const [message, setMessage] = useState('');


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const result = await sendEmail(formData);

        if (result.success) {
            setMessage(message);
            e.currentTarget.reset();
        } else {
            setMessage(message)
        }
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-100 mx-auto p-4'>

      
        
        <div className='flex flex-col'>
            <label htmlFor="firstName">Name</label>
            <input type="text" name='firstName' className='border border-gray-400 rounded-md' />
        </div>
     

       
       <div className='flex flex-col'>
            <label htmlFor="email">Email</label>
            <input type="text" name='email' className='border border-gray-400 rounded-md' />
       </div>


        <div className='flex flex-col'>
            <label htmlFor="">Message</label>
            <textarea name="body" id="body" className='border border-gray-400 rounded-md' ></textarea>
        </div>

        <button type='submit'>Send Message</button>


        {message && (
          <div> 
            {message}
          </div>
        )}

    </form>
  )
}

export default ContactForm