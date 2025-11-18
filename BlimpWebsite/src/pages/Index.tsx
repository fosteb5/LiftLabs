import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Funding from "@/components/Funding";
import Mission from "@/components/Mission";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Sponsorship from "@/components/Sponsorship";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <Hero />
        <About />
        <Funding />
        <Mission />
        <Timeline />
        <Gallery />
        <Team />
        <Sponsorship />
        <Media />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
