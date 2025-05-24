import { FaLinkedinIn } from "react-icons/fa";
import { TEAM_MEMBERS } from "../constants/team";

const Team = () => {
  return (
    <section id="team" className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*headline */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="shrink-0 bg-secondary text-black rounded-md py-2 px-8">
            <h2 className="text-2xl font-bold">Meet the Team</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-primary md:w-2/3">
              A passionate crew of designers, developers, and strategists
              driving impactful digital solutions.
            </p>
          </div>
        </div>

        {/*cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="bg-white hover:bg-secondary rounded-lg border hover:border-secondary shadow-lg p-6 cursor-pointer transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="flex flex-col sm:flex-row sm:items-end items-start gap-4 justify-center">
                  <img
                    src={member.src}
                    alt={member.alt}
                    className="rounded-full size-32 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                  <a
                    href="#"
                    className="absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 rounded-full cursor-pointer transition-all duration-300"
                  >
                    <FaLinkedinIn className="size-5" />
                  </a>
                </div>
              </div>
              <div className="px-2">
                <hr className="my-4 border-black" />
                <p className="text-black">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
