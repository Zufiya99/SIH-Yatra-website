import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-Primary text-white min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore the World with Yatra
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Your perfect travel companion to discover new places, book trips, and
          experience adventures like never before.
        </p>
        <Link
          to="/virtualtour"
          className="mt-6 px-6 py-3 bg-amber-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition duration-300"
        >
          Start Your Journey
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-amber-400 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer">
            {[
              {
                title: "Personalized Tours",
                desc: "Customizable trips tailored to your preferences.",
              },
              {
                title: "Seamless Booking",
                desc: "Hassle-free ticket and accommodation booking.",
              },
              {
                title: "24/7 Support",
                desc: "We're here to assist you anytime, anywhere.",
              },
              {
                title: "Exclusive Deals",
                desc: "Get the best offers and discounts on trips.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-amber-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-Primary">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-amber-400 mb-10">
            Top Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer">
            {[
              {
                title: "Paris, France",
                desc: "The city of love, art, and iconic landmarks.",
              },
              {
                title: "Bali, Indonesia",
                desc: "A tropical paradise for nature lovers.",
              },
              {
                title: "New York, USA",
                desc: "The vibrant city that never sleeps.",
              },
              {
                title: "Dubai, UAE",
                desc: "Experience luxury and stunning architecture.",
              },
            ].map((destination, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-amber-300 mb-2">
                  {destination.title}
                </h3>
                <p className="text-gray-300">{destination.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-amber-400 mb-10">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 cursor-pointer">
            {[
              {
                name: "Aisha K.",
                review:
                  "Yatra made my vacation stress-free and memorable! Highly recommend!",
              },
              {
                name: "Rahul S.",
                review:
                  "Great customer service and amazing travel packages. Loved the experience!",
              },
              {
                name: "Nina W.",
                review: "A truly seamless experience with excellent support.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:bg-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-gray-300 italic">"{testimonial.review}"</p>
                <h3 className="text-lg font-bold text-amber-300 mt-4">
                  - {testimonial.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
