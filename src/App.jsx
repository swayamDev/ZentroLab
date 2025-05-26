import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WorkProcess from "./components/WorkProcess";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <CaseStudies />
      <WorkProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
