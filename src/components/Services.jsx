import { motion } from "framer-motion";
import { SERVICES } from "../constants/services";
import {
  buttonVariants2,
  cardHover2,
  containerVariants,
  imageHover,
  imageVariants,
  serviceCardVariants,
  slideInLeft,
  textReveal,
  textVariants,
} from "../constants/motion";

const Services = () => {
  return (
    <section id="services" className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="shrink-0 bg-secondary text-black rounded-md py-2 px-4 md:px-8 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-bold">What We Offer</h2>
          </motion.div>
          <div className="md:w-2/3">
            <motion.p
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-primary text-sm md:text-base md:w-2/3 text-center md:text-left"
            >
              We offer a comprehensive suite of digital solutions tailored to
              help your business thrive in the online world.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((services, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={serviceCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover2}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-black ${services.bgColor} ${services.textColor} cursor-pointer relative overflow-hidden`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0"
                whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              <div className="md:w-1/2 flex flex-col h-full justify-between relative z-10">
                <motion.button
                  className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${services.fgColor}`}
                  variants={buttonVariants2}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {services.title}
                </motion.button>

                <motion.p
                  className="text-lg font-medium hover:text-black/70"
                  variants={textVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {services.description}
                </motion.p>
              </div>

              <div className="md:w-1/2 order-first md:order-last relative">
                <motion.div
                  className="relative overflow-hidden rounded-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    loading="lazy"
                    src={services.src}
                    alt={services.alt}
                    className="w-full object-cover rounded-md mb-4"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={imageHover}
                    viewport={{ once: true, amount: 0.5 }}
                  />

                  {/* Image overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-black/0 rounded-md"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
