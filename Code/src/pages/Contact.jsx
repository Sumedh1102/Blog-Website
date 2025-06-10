import React from "react";
import Swal from "sweetalert2";
import { Mail } from "lucide-react"
import Section4 from '../Home/Section4'


const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "49ab5496-8884-4e2f-891b-0bb4468f6259");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  };

  return (
    <>
   
     <div className=" bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold font-nunito text-gray-900 mb-6">Get in touch</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincidunt interdum tellus du.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact us via:</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">contact@writelogy.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">press@writelogy.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-2xl  p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                    FULL NAME
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="ex. John Carter"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                    PHONE
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456 - 789"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="ex. Subscriptions"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 uppercase tracking-wide">
                  LEAVE US A MESSAGE
                </label>
                <textarea
                  id="message"
                  placeholder="Please type your message here..."
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  <hr  className="border-gray-100"/>
  <Section4/>
    </>
  );
};

export default ContactUs;