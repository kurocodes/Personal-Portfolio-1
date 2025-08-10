import React, { useState } from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedInput, setFocusedInput] = useState(null); // State to track the focused input
  const [isSending, setIsSending] = useState(false);

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null); // Remove focus when the input loses focus
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = formData;

    // Simple Validation
    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_API_KEY
      )
      .then((response) => {
        toast.success("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((err) => {
        toast.error("Failed to send email. Please try again!");
        console.log("FAILED...", err);
        setIsSending(false);
      });
  };

  return (
    <div className="page lg:h-full lg:overflow-y-auto">
      <Title text="Contact" />

      {/* ----- Email and Phone ----- */}
      <div className="flex flex-col 2xl:flex-row gap-10 my-5 font-[poppins]">
        {/* ----- My Phone no. ----- */}
        <div className="w-full bg-[#FFEED9] p-10 rounded-xl flex flex-col items-start gap-3">
          <div className="flex gap-3">
            <img src={assets.phone_icon_2} alt="" />
            <p className="font-semibold">Phone:</p>
          </div>
          <p className="text-sm">91+ 9887236064</p>
        </div>

        {/* ----- My Email ----- */}
        <div className="w-full bg-[#FFEED9] p-10 rounded-xl flex flex-col items-start gap-3">
          <div className="flex gap-3">
            <img src={assets.email_icon_2} alt="" />
            <p className="font-semibold">Email:</p>
          </div>
          <p className="text-sm">vaishnavdeepak3112@gmail.com</p>
        </div>
      </div>

      {/* ----- Send Message ----- */}
      <div className="bg-[#F8FBFB] px-10 py-8 font-[Raleway] rounded-xl">
        <div className="flex flex-col">
          <p>
            I am always open to discussing{" "}
            <span className="font-bold">
              new projects, opportunities in tech world.
            </span>
          </p>

          <div className="mt-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Name Input */}
              <div
                className={`relative border-b-2 ${
                  focusedInput === "name" || formData.name ? "focused" : ""
                }`}
              >
                <input
                  className="w-full bg-transparent outline-none font-[Poppins] text-sm"
                  type="text"
                  id="name"
                  required
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={formData.name}
                />
                <label
                  className="label font-bold text-sm absolute top-0 left-0 cursor-text"
                  htmlFor="name"
                >
                  Name:
                </label>
              </div>

              {/* Email Input */}
              <div
                className={`relative border-b-2 ${
                  focusedInput === "email" || formData.email ? "focused" : ""
                }`}
              >
                <input
                  className="w-full bg-transparent outline-none font-[Poppins] text-sm"
                  type="email"
                  id="email"
                  required
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={formData.email}
                />
                <label
                  className="label font-bold text-sm absolute top-0 left-0 cursor-text"
                  htmlFor="email"
                >
                  Email:
                </label>
              </div>

              {/* Message Input */}
              <div
                className={`relative border-b-2 ${
                  focusedInput === "message" || formData.message
                    ? "focused"
                    : ""
                }`}
              >
                <textarea
                  className="w-full bg-transparent outline-none font-[Poppins] text-sm"
                  id="message"
                  required
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={formData.message}
                />
                <label
                  className="label font-bold text-sm absolute top-0 left-0 cursor-text"
                  htmlFor="message"
                >
                  Message:
                </label>
              </div>

              <button
                disabled={isSending}
                className="gradient-border self-start rounded-full px-8 py-3 font-bold text-sm text-white transition-all"
                type="submit"
              >
                {isSending ? <SyncLoader color="white" size={7} /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        💡{" "}
        <span className="font-semibold">
          Looking for a website that’s fast, modern, and reflects your style?
        </span>
        Let’s make it happen! I reply within 24 hours~
      </div>
    </div>
  );
};

export default Contact;
