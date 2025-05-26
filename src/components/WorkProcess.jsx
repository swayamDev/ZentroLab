import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { WORK_PROCESS } from "../constants/workProcess";
import { motion, AnimatePresence } from "framer-motion";
import {
  accordionCardVariants,
  buttonHover2,
  cardHover3,
  containerVariants2,
  contentVariants,
  iconVariants,
  slideInLeft,
  textReveal,
  textSlideVariants,
  titleVariants,
} from "../constants/motion";

const WorkProcess = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="pt-12 pb-16 bg-white">
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
              Our Working Process
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
              We follow a clear, collaborative approach to bring your ideas to
              life — every step focused on impact and efficiency.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="space-y-4"
          variants={containerVariants2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {WORK_PROCESS.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={accordionCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover3}
              viewport={{ once: true, amount: 0.3 }}
              className="border border-black rounded-lg shadow-lg overflow-hidden relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated step number indicator */}
              <motion.div
                className="absolute -left-2 top-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  duration: 0.5,
                  type: "spring",
                }}
              >
                {index + 1}
              </motion.div>

              {/* Subtle background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/30 to-blue-50/0 opacity-0"
                whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />

              <motion.button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-quaternary hover:bg-tertiary transition-colors duration-200 flex items-center justify-between group relative z-10"
                variants={buttonHover2}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                <motion.h3
                  className="text-lg font-semibold text-black group-hover:text-blue-600 transition-colors pl-6"
                  variants={titleVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {item.title}
                </motion.h3>

                <div className="ml-4 flex-shrink-0">
                  <motion.div
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                    animate={openItems.has(index) ? "open" : "closed"}
                  >
                    {openItems.has(index) ? (
                      <FaChevronUp className="size-5" />
                    ) : (
                      <FaChevronDown className="size-5" />
                    )}
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openItems.has(index) && (
                  <motion.div
                    variants={contentVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-2 bg-secondary border-t border-black pl-12">
                      <motion.p
                        className="text-black leading-relaxed"
                        variants={textSlideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
