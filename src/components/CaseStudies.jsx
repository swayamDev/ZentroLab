import { FaExternalLinkAlt } from "react-icons/fa";
import { CASE_STUDIES } from "../constants/caseStudies";

const CaseStudies = () => {
  return (
    <section id="use-cases" className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*headline */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="shrink-0 bg-secondary text-black rounded-md py-2 px-8">
            <h2 className="text-2xl font-bold">Case Studies</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-primary md:w-2/3">
              Explore how we've helped businesses grow with smart digital
              solutions and strategic design.
            </p>
          </div>
        </div>

        {/*cards */}
        <div className="bg-black text-white p-8 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((caseItem, index) => (
              <div
                key={index}
                className="p-4 border border-gray-600 rounded-md"
              >
                <h3 className="text-xl font-semibold tracking-wider mb-2">
                  {caseItem.title}
                </h3>
                <p className="mb-4">{caseItem.description}</p>
                <a
                  href="#"
                  className="text-secondary flex items-center hover:underline"
                >
                  Explore More <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
