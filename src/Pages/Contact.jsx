import React from 'react';

const Contact = () => {
  return (
    <div className="px-6 md:px-16 py-8 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Contact Me</h1>
      <p className="text-gray-600 text-lg mb-8 text-center">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B8]"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B8]"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077B8]"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0077B8] text-white py-2 px-4 rounded-lg hover:bg-[#005f8a] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;