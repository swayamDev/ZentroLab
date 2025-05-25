import ctaImage from "../assets/cta.png";

const CTA = () => {
  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto bg-tertiary rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-600 mb-5">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-gray-700 mb-6 md:w-2/3">
            We bring strategy, design, and tech together to help your business
            grow online.
          </p>
          <button
            className="inline-block
             px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-yellow-300 hover:text-black transition-all duration-300"
          >
            Start Your Project
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center relative">
          <img
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
