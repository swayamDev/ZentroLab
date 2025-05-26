import { useState } from "react";
import formImg from "../assets/form.webp";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  cardItem,
  slideInLeft,
  slideInUp,
  staggerContainer,
  textReveal,
} from "../constants/motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus("validation");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="shrink-0 bg-secondary text-black rounded-md py-2 px-4 md:px-8 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-bold">
              Let's Work Together
            </h2>
          </motion.div>
          <div className="md:w-2/3">
            <motion.p
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-primary text-sm md:text-base md:w-2/3 text-center md:text-left"
            >
              Ready to start your next project or have a question? We'd love to
              hear from you.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-black"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your project or inquiry"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-vertical"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm font-medium">
                    ✅ Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">
                    ❌ Sorry, there was an error sending your message. Please
                    try again.
                  </p>
                </div>
              )}

              {submitStatus === "validation" && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-700 text-sm font-medium">
                    ⚠️ Please fill in all required fields (Name, Email, Subject,
                    and Message).
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-blue-400">
              <motion.img
                variants={slideInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                loading="lazy"
                src={formImg}
                alt="Team collaboration and discussion"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
            >
              <motion.div
                variants={cardItem}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <HiOutlineMail className="size-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <p className="text-sm text-gray-600">team@zentrolab.com</p>
                </div>
              </motion.div>

              <motion.div
                variants={cardItem}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <IoCallOutline className="size-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Call Us
                  </h3>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                variants={cardItem}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <FaRegClock className="size-5 text-yellow-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Response Time
                  </h3>
                  <p className="text-sm text-gray-600">
                    We typically respond within 24 hours
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="bg-quaternary rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Prefer other ways to connect?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                  Let's Talk
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
