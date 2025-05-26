import { useState } from "react";
import { LINKS, SOCIAL_LINKS } from "../constants/navLinks";
import { motion } from "framer-motion";
import { footerSlide } from "../constants/motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !isValidEmail(email)) {
      setSubmitStatus("invalid");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.footer
      variants={footerSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      className="bg-blue-700 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4 text-turmeric">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/90 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-4"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-turmeric">
                Stay Updated
              </h3>
              <p className="text-white/80 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    id="newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-turmeric focus:border-transparent outline-none backdrop-blur-sm"
                    aria-label="Email Address"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || !email.trim()}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isSubmitting || !email.trim()
                        ? "bg-turmeric/60 cursor-not-allowed"
                        : "bg-turmeric hover:bg-turmeric/90"
                    }`}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>

                {submitStatus === "success" && (
                  <p className="text-green-300 text-sm" aria-live="polite">
                    ✅ Successfully subscribed!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-300 text-sm" aria-live="polite">
                    ❌ Something went wrong. Try again.
                  </p>
                )}
                {submitStatus === "invalid" && (
                  <p className="text-secondary text-sm" aria-live="polite">
                    ⚠️ Please enter a valid email address.
                  </p>
                )}
              </form>
            </div>
            <div>
              <h4 className="text-white/80 mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(
                  ({ name, icon: IconComponent, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-turmeric transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                      aria-label={name}
                    >
                      <IconComponent size={18} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} ZentroLab. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
