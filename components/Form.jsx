"use client";

import useContactForm from "@hooks/useContactForm";
import { useState } from "react";

const Form = () => {
  const { values, setValues, handleChange } = useContactForm();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setValues({ name: "", email: "", subject: "", message: "" });
    }
  };

  if (submitted) {
    return (
      <div className="w-full h-[300px] flex justify-center items-center">
        <h1 className="text-green-500 drop-shadow-lg text-center italic font-thin">
          Thank you for your message!
        </h1>
      </div>
    );
  }

  return (
    <form
      method="post"
      className="mt-6 w-[800px] max-w-full"
      onSubmit={handleSubmit}
    >
      <span className="text-lg font-thin italic">Send Me a Message!</span>
      <div className="relative z-0 my-6">
        <input
          type="text"
          id="name"
          name="name"
          className="block py-2.5 px-0 w-full text-sm text-neutral-200 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
          placeholder=" "
          required
          value={values.name}
          onChange={handleChange}
        />
        <label
          htmlFor="name"
          className="absolute text-md text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
        >
          Your Name
        </label>
      </div>
      <div className="relative z-0 my-6">
        <input
          type="email"
          id="email"
          name="email"
          className="block py-2.5 px-0 text-sm w-full text-neutral-200 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
          placeholder=" "
          required
          value={values.email}
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          className="absolute text-md text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
        >
          Your Email Address
        </label>
      </div>
      <div className="relative z-0 mb-12">
        <input
          type="text"
          id="subject"
          name="subject"
          className="block py-2.5 px-0 text-sm w-full text-neutral-200 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
          placeholder=" "
          required
          value={values.subject}
          onChange={handleChange}
        />
        <label
          htmlFor="email"
          className="absolute text-md text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
        >
          Email Subject
        </label>
      </div>
      <div className="relative z-0">
        <textarea
          id="message"
          name="message"
          className="block py-2.5 px-0 w-full text-sm text-neutral-200 bg-transparent border-0 border-b-2 border-neutral-200 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer"
          placeholder=" "
          required
          value={values.message}
          onChange={handleChange}
        />
        <label
          htmlFor="message"
          className="absolute text-md text-cyan-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-12"
        >
          Your message
        </label>
      </div>
      <button
        className="mt-6 w-full text-center font-semibold py-4 border-2 border-cyan-500 duration-500 ease-in-out hover:bg-cyan-500"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
