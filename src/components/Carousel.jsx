import { PARTNER_LOGOS } from "../constants/navLinks";

const Carousel = () => {
  const duplicatedLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="flex animate-scroll w-max space-x-12">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="h-20 w-36 flex items-center justify-center overflow-hidden"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
