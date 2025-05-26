import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../constants/testimonials";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideInLeft, textReveal } from "../constants/motion";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const testimonialsPerSlide = isMobile ? 1 : 3;
  const totalSlides = TESTIMONIALS.length;

  useEffect(() => {
    const maxSlide = isMobile ? totalSlides - 1 : totalSlides - 3;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (maxSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, isMobile]);

  const goToSlide = (slideIndex) => {
    const maxSlide = isMobile ? totalSlides - 1 : totalSlides - 3;
    if (slideIndex <= maxSlide) {
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <section id="testimonials" className="pt-24 pb-16 bg-white">
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
              What Our Clients Say
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
              Hear from the businesses and startups that have trusted us with
              their digital transformation.
            </motion.p>
          </div>
        </div>

        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentSlide * 100) / testimonialsPerSlide
                }%)`,
              }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className={`${
                    isMobile ? "w-full" : "w-1/3"
                  } flex-shrink-0 relative py-5 px-2`}
                >
                  <div className="absolute top-2 left-4 z-20">
                    <FaQuoteLeft className="size-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <div className="bg-white hover:bg-yellow-50 rounded-lg border hover:border-yellow-300 shadow-lg p-4 md:p-6 cursor-pointer transition-all duration-300 min-h-[200px] md:min-h-[220px]">
                    <p className="font-medium mb-4 text-sm md:text-base text-black leading-relaxed pt-4">
                      "{testimonial.message}"
                    </p>
                    <div className="border-t pt-3 mt-auto">
                      <p className="text-sm md:text-base font-semibold text-black mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-xs md:text-sm font-medium text-primary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {totalSlides > (isMobile ? 1 : 3) && (
            <div className="absolute mt-6 md:mt-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-3">
              {Array.from({
                length: totalSlides - (testimonialsPerSlide - 1),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-blue-600 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
