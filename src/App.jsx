import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">

      <section id="About-me" className="About-me">
        <HeroSection />
        </section>

        <section id="Skill's" className="Skill's">
        <FeatureSection />
        </section>

        <section id="education" className="education">
        <Workflow />
        </section>


        <section id="Project's" className="Project's">
        <Pricing />
        </section>

        <section id="certification's" className="certification's">
        <Testimonials />

        </section>

        <Footer />
      </div>
    </>
  );
};

export default App;