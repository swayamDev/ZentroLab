import { SERVICES } from "../constants/services";

const Services = () => {
  return (
    <section id="services" className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*headline */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="shrink-0 bg-secondary text-black rounded-md py-2 px-8">
            <h2 className="text-2xl font-bold">What We Offer</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-primary md:w-2/3">
              We offer a comprehensive suite of digital solutions tailored to
              help your business thrive in the online world.
            </p>
          </div>
        </div>

        {/*cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((services, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-black ${services.bgColor} ${services.textColor} cursor-pointer`}
            >
              <div className="md:w-1/2 flex flex-col h-full justify-between">
                <button
                  className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${services.fgColor}`}
                >
                  {services.title}
                </button>
                <p className="text-lg font-medium hover:text-black/70">
                  {services.description}
                </p>
              </div>

              <div className="md:w-1/2 order-first md:order-last">
                <img
                  src={services.src}
                  alt={services.alt}
                  className="w-full object-cover rounded-md mb-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
