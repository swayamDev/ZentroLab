import CaseStudies from "./components/CaseStudies";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import WorkProcess from "./components/WorkProcess";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkProcess />
      <Team />
    </main>
  );
};

export default App;
