import React, { useState } from "react";
import { FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  return (
    <section id="contact" className="py-16 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring it to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="text-blue-400 mt-1">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                <p className="text-gray-400">ranjeeturd@gmail.com</p>
                <p className="text-gray-500 text-sm mt-1">Typically responds within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="text-blue-400 mt-1">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Location</h3>
                <p className="text-gray-400">Ranchi, Jharkhand, India</p>
                <p className="text-gray-500 text-sm mt-1">Available for remote work worldwide</p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formdata.name}
                  onChange={handleOnChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formdata.email}
                  onChange={handleOnChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formdata.subject}
                onChange={handleOnChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formdata.message}
                onChange={handleOnChange}
                rows="3"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;