import React, { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Transtion from '../Transition';


const Contact = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // State for CAPTCHA
  const [captcha, setCaptcha] = useState(generateCaptcha()); // initial random numbers
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate a simple CAPTCHA as a random sum of two numbers
  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return `${num1} + ${num2}`;
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple CAPTCHA validation (sum check)
    const [num1, num2] = captcha.split(" + ").map(Number);
    const correctAnswer = num1 + num2;

    if (parseInt(captchaInput) !== correctAnswer) {
      alert("CAPTCHA incorrect. Please try again.");
      setCaptcha(generateCaptcha()); // Reset CAPTCHA
      return;
    }

    // Handle form submission (e.g., send data to server)
    alert("Thank you for contacting us! We'll get back to you soon.");
    // Reset form after successful submission
    setName("");
    setEmail("");
    setMessage("");
    setCaptcha(generateCaptcha()); // Reset CAPTCHA
  };

  return (
    <div name="Hometop" className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-3">
        <div className="w-full h-auto bg-[#64092c] flex justify-center items-center py-10">
          <div name="inner container" className="bg-[#f0f0f0] w-[90%] lg:w-[70%] xl:w-[50%] p-8 rounded-lg shadow-lg flex flex-col items-center mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#64092c] mb-6">Contact Us</h1>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
              <div className="w-full mb-4">
                <label htmlFor="name" className="text-lg font-semibold mb-2 block">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="w-full mb-4">
                <label htmlFor="email" className="text-lg font-semibold mb-2 block">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="w-full mb-4">
                <label htmlFor="message" className="text-lg font-semibold mb-2 block">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="5"
                  required
                ></textarea>
              </div>

              {/* CAPTCHA */}
              <div className="w-full mb-4">
                <label htmlFor="captcha" className="text-lg font-semibold mb-2 block">CAPTCHA: {captcha}</label>
                <input
                  type="text"
                  id="captcha"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter the result"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-[#64092c] text-white text-lg font-bold rounded-lg shadow-md hover:bg-[#540822]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Transtion(Contact);