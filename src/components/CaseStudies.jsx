import { FaExternalLinkAlt } from "react-icons/fa";
import { CASE_STUDIES } from "../constants/caseStudies";
import { motion } from "framer-motion";
import {
  cardItem,
  slideInLeft,
  staggerContainer,
  textReveal,
} from "../constants/motion";

const CaseStudies = () => {
  return (
    <section id="use-cases" className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="shrink-0 bg-secondary text-black rounded-md py-2 px-4 md:px-8 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-bold">Case Studies</h2>
          </motion.div>
          <div className="md:w-2/3">
            <motion.p
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-primary text-sm md:text-base md:w-2/3 text-center md:text-left"
            >
              Explore how we've helped businesses grow with smart digital
              solutions and strategic design.
            </motion.p>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-md">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {CASE_STUDIES.map((caseItem, index) => (
              <motion.div
                variants={cardItem}
                key={index}
                className="p-4 border border-gray-600 rounded-md"
              >
                <h3 className="text-xl font-semibold tracking-wider mb-2">
                  {caseItem.title}
                </h3>
                <p className="mb-4">{caseItem.description}</p>
                <a
                  href={caseItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary flex items-center hover:underline"
                >
                  Explore More <FaExternalLinkAlt className="ml-2" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
