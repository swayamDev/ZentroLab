import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { WORK_PROCESS } from "../constants/workProcess";

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
        {/*headline */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12">
          <div className="shrink-0 bg-secondary text-black rounded-md py-2 px-4 md:px-8 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">
              Our Working Process
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-primary text-sm md:text-base md:w-2/3 text-center md:text-left">
              We follow a clear, collaborative approach to bring your ideas to
              life — every step focused on impact and efficiency.
            </p>
          </div>
        </div>

        {/* card */}
        <div className="space-y-4">
          {WORK_PROCESS.map((item, index) => (
            <div
              key={index}
              className="border border-black rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left bg-quaternary hover:bg-tertiary transition-colors duration-200 flex items-center justify-between group"
              >
                <h3 className="text-lg font-semibold text-black group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {openItems.has(index) ? (
                    <FaChevronUp className="size-5 group-hover:text-blue-600 transition-colors" />
                  ) : (
                    <FaChevronDown className="size-5 group-hover:text-blue-600 transition-colors" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 pt-2 bg-secondary border-t border-black">
                  <p className="text-black leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
