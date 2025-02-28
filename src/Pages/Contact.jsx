import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-Primary min-h-screen flex flex-col items-center justify-center p-8 text-white">
      {/* Contact Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-highlight mb-8 flex items-center"
      >
        <Send className="mr-2" /> Contact Us
      </motion.h1>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {/* Email */}
        <div className="bg-Secondary p-6 rounded-2xl shadow-lg text-center hover:bg-blue-950 transition-all duration-300">
          <Mail className="w-12 h-12 mx-auto text-highlight" />
          <h2 className="text-xl font-semibold mt-4">Email</h2>
          <p className="mt-2 text-gray-300">info@tourismdashboard.com</p>
        </div>

        {/* Phone */}
        <div className="bg-Secondary p-6 rounded-2xl shadow-lg text-center hover:bg-blue-950 transition-all duration-300">
          <Phone className="w-12 h-12 mx-auto text-highlight" />
          <h2 className="text-xl font-semibold mt-4">Phone</h2>
          <p className="mt-2 text-gray-300">+1 (123) 456-7890</p>
        </div>

        {/* Address */}
        <div className="bg-Secondary p-6 rounded-2xl shadow-lg text-center hover:bg-blue-950 transition-all duration-300">
          <MapPin className="w-12 h-12 mx-auto text-highlight" />
          <h2 className="text-xl font-semibold mt-4">Address</h2>
          <p className="mt-2 text-gray-300">123 Tourism St, Paradise City</p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-4xl bg-Secondary p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-highlight mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 bg-Primary border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-highlight"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 bg-Primary border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-highlight"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 block w-full px-4 py-2 bg-Primary border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-highlight"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 bg-Primary border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-highlight"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-hoverEffect text-Primary font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
