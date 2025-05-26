import mainImg from "../assets/main.webp";
import { buttonVariants, slideInRight, slideInUp } from "../constants/motion";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="bg-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <motion.h1
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-4xl font-bold text-primary mb-5"
            >
              Grow Your Business <br className="hidden lg:block" />
              with a Results-Driven <br className="hidden lg:block" />
              Digital Agency
            </motion.h1>
            <motion.p
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700 mb-6"
            >
              At ZentroLab, we craft high-impact digital experiences — from
              stunning websites to performance marketing — to help you stand
              out, scale fast, and succeed online.
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
              Book a Free Consultation
            </motion.button>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <motion.img
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              loading="eager"
              decoding="async"
              src={mainImg}
              alt="Modern workspace"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
