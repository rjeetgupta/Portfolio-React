import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form Data: ", formData);

    emailjs
      
      
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then((result) => {
        alert("Message sent successfully!")
       })
      .catch((error) => {
        console.error("Failed to send message: ", error);
        alert("Failed to send message")
      });
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5"></div>
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Get in Touch
        </h1>
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Info</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <span className="text-gray-300">ranjeeturd@gmail.com</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="bg-purple-500 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <span className="text-gray-300">+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="bg-pink-500 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <span className="text-gray-300">Ranchi, India</span>
                </li>
              </ul>
            </div>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Send a Message</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  type="text" id="name" name="name" className="w-full bg-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email" id="email" name="email" className="w-full bg-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  id="message" name="message" rows="4" className="w-full bg-gray-700 rounded-lg py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact