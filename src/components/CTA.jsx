import ctaImage from "../assets/cta.webp";
import { motion } from "framer-motion";
import { buttonVariants, slideInLeft, slideInRight } from "../constants/motion";

const CTA = () => {
  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto bg-tertiary rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h2
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-3xl font-bold text-primary mb-5"
          >
            Ready to Elevate Your Brand?
          </motion.h2>
          <motion.p
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-gray-700 mb-6 md:w-2/3"
          >
            We bring strategy, design, and tech together to help your business
            grow online.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            whileHover="hover"
            whileTap="tap"
            className="inline-block
             px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-secondary hover:text-black transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center relative">
          <motion.img
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            loading="lazy"
            src={ctaImage}
            alt="CTA image"
            className="md:absolute md:-top-68 md:bottom-0"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
