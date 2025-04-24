import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
          });
          formRef.current.reset();
          setSending(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
          });
          console.error("EmailJS error:", error);
          setSending(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gray-900 flex items-center justify-center p-6"
    >
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Have any questions or feedback? We'd love to hear from you!
        </p>
        <form ref={formRef} onSubmit={handleContactSubmit} className="space-y-4">
          <div>
            <label htmlFor="user_name" className="block text-gray-200 mb-1">
              Name
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-gray-200 mb-1">
              Email
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-200 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 rounded-md transition duration-300 ${
              sending
                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
};

export default Contact;
