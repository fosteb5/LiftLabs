import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-blimp.jpg";

const Hero = () => {
  const scrollToSponsors = () => {
    document.getElementById("sponsors")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar-powered autonomous blimp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
          Pioneering Sustainable Flight
          <br />
          <span className="text-gradient-gold">at Western Engineering</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Building a solar-powered autonomous blimp that redefines renewable energy in aerospace. 
          Student-driven innovation pushing the boundaries of sustainable flight technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToSponsors}
            className="bg-accent text-accent-foreground hover:bg-accent-muted font-heading font-semibold text-lg px-8 py-6 shadow-gold transition-smooth hover:scale-105 animate-bounce"
          >
            Become a Sponsor
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 font-heading font-semibold text-lg px-8 py-6 transition-smooth animate-bounce"
            style={{ animationDelay: "0.15s" }}
          >
            Project Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
