import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { TEAM_MEMBERS } from "../constants/team";
import { motion } from "framer-motion";
import {
  buttonHover,
  cardHover,
  cardVariants,
  slideInLeft,
  textReveal,
} from "../constants/motion";

const Team = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedMembers = showAll ? TEAM_MEMBERS : TEAM_MEMBERS.slice(0, 6);

  return (
    <section id="team" className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="shrink-0 bg-secondary text-black rounded-md py-2 px-4 md:px-8 text-center md:text-left"
          >
            <h2 className="text-xl md:text-2xl font-bold">Meet the Team</h2>
          </motion.div>
          <div className="md:w-2/3">
            <motion.p
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-primary text-sm md:text-base md:w-2/3 text-center md:text-left"
            >
              A passionate crew of designers, developers, and strategists
              driving impactful digital solutions.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={cardHover}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-tertiary hover:bg-secondary rounded-lg border hover:border-secondary shadow-lg p-6 cursor-pointer transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-center">
                  <motion.img
                    loading="lazy"
                    src={member.src}
                    alt={member.alt}
                    className="rounded-full size-32 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={member.label}
                    className="absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 rounded-full cursor-pointer transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedinIn className="size-5" />
                  </motion.a>
                </div>
              </div>
              <div className="px-2">
                <hr className="my-4 border-black" />
                <p className="text-black">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {TEAM_MEMBERS.length > 6 && (
          <div className="flex justify-center mt-12">
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setShowAll(!showAll)}
              className="bg-black hover:bg-secondary hover:text-black text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll
                ? "Show Less"
                : `Show More (${TEAM_MEMBERS.length - 6} more)`}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
