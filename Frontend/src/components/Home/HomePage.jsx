import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMoon,
  FaSun,
  FaMoneyBillWave,
  FaFilter,
  FaChartPie,
  FaSignInAlt,
  FaList,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    // Read from localStorage if available or default to false
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full bg-gray-200 text-gray-800 shadow-md transition cursor-pointer 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
    >
      {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
      {/* Top bar with toggle */}
      <div className="flex justify-end p-4 max-w-7xl mx-auto">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Track Your Expenses Effortlessly
        </motion.h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          Manage your finances with a smart, user-friendly solution.
        </p>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMoneyBillWave />,
              label: "Efficient Tracking",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              icon: <FaFilter />,
              label: "Transactions Filtering",
              color: "text-green-600 dark:text-green-400",
            },
            {
              icon: <IoIosStats />,
              label: "Insightful Reports",
              color: "text-yellow-600 dark:text-yellow-400",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className={`p-4 rounded-full bg-gray-100 dark:bg-gray-800 shadow text-4xl ${item.color}`}
              >
                {item.icon}
              </div>
              <p className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link to="/register">
          <button className="mt-10 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          How It Works
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaSignInAlt />,
              title: "Sign Up",
              desc: "Create an account in seconds and start tracking.",
              color: "bg-blue-600 text-white",
            },
            {
              icon: <FaList />,
              title: "Add Transactions",
              desc: "Add income and expenses easily.",
              color: "bg-green-600 text-white",
            },
            {
              icon: <FaChartPie />,
              title: "View Reports",
              desc: "Visualize your spending with detailed charts.",
              color: "bg-yellow-400 text-gray-900",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow"
            >
              <div
                className={`p-5 rounded-full mb-4 text-2xl shadow-md ${step.color}`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "This app changed the way I handle my expenses — it’s simple, fast, and easy to use!",
              name: "Mekdes Abebe",
            },
            {
              quote:
                "Finally, a straightforward and effective way to manage my finances. I highly recommend it!",
              name: "Tsegaye Bekele",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <FaQuoteLeft className="text-2xl text-blue-400" />
              <p className="mt-4 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
                {item.quote}
              </p>
              <p className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-white dark:bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Take Control of Your Finances Today
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Join My Expense Tracker and manage your money like a pro.
        </p>
        <Link to="/register">
          <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition">
            Sign Up For Free
          </button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
