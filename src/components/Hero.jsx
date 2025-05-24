import mainImg from "../assets/main.webp";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-primary mb-5">
              Grow Your Business <br className="hidden lg:block" />
              with a Results-Driven <br className="hidden lg:block" />
              Digital Agency
            </h1>
            <p className="text-gray-700 mb-6">
              At ZentroLab, we craft high-impact digital experiences — from
              stunning websites to performance marketing — to help you stand
              out, scale fast, and succeed online.
            </p>
            <button
              className="inline-block
             px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-secondary hover:text-black transition-all duration-300"
            >
              Book a Free Consultation
            </button>
          </div>
          <div className="md:w-1/2 order-first md:order-last">
            <img src={mainImg} alt="" className="w-full h-auto" />
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
