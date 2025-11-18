import { Award, TrendingUp, Sparkles } from "lucide-react";

const Funding = () => {
  return (
    <section id="funding" className="py-24 bg-gradient-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6 shadow-gold animate-float">
            <Award className="h-10 w-10 text-accent-foreground" />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Funded by Innovation
          </h2>
          
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />

          <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed animate-fade-in-up">
            We are proud recipients of funding from the prestigious{" "}
            <span className="text-accent font-semibold">John M. Thompson Innovation Fund</span>, 
            recognizing our project's potential to advance sustainable engineering and innovation 
            at Western University.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-smooth animate-slide-in-right">
              <TrendingUp className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-3">
                Competitive Selection
              </h3>
              <p className="text-primary-foreground/80">
                Selected from numerous proposals for our innovative approach to sustainable aerospace technology
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-smooth animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <Sparkles className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-3">
                Supporting Innovation
              </h3>
              <p className="text-primary-foreground/80">
                Funding enables prototyping, testing, and development of our solar-powered autonomous blimp
              </p>
            </div>
          </div>

          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border-2 border-accent/30 animate-fade-in-up">
            <p className="text-primary-foreground/90 italic text-lg">
              "This funding represents more than financial support—it's validation of our vision to create 
              sustainable aerospace solutions and inspiration to push the boundaries of what's possible 
              in student-led engineering innovation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funding;
