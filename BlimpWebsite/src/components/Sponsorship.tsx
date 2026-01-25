import { Button } from "@/components/ui/button";
import { BadgeCheck, Camera, ClipboardList } from "lucide-react";

const Sponsorship = () => {
  const placements = [
    {
      title: "Blimp Banner Logo ",
      description: "Logo on the envelope/gondola and on related products",
    },
    {
      title: "Website Logo",
      description: "Logo and link on this site under sponsors.",
    },
    {
      title: "Marketing & Recognition",
      description: "Mentioned and tagged in team media posts and recap slides whenever your logo appears on the build.",
    },
    {
      title: "Personal Flyover",
      description: "Choose an unrestricted location for a blimp flyover at a time of your choosing!",
    },
  ];

  const benefits = [
    {
      icon: BadgeCheck,
      title: "Approval first",
      description: "You sign off on logo size and placement before we print or stitch anything.",
    },
    {
      icon: Camera,
      title: "Photo updates",
      description: "Shots after milestones and test days so you see your logo in place.",
    },
    {
      icon: ClipboardList,
      title: "Where funds go",
      description: "One-page breakdown of materials, printing, and test-day costs so you know the impact.",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Sponsor the Build
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Support our Western Engineering team in creating a solar-assisted autonomous blimp. Be a part of our journey and get your business recognized in a unique and memorable way.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-primary/10 rounded-2xl p-2 md:p-12 mb-12 shadow-card animate-scale-in">
            <h3 className="text-2xl font-heading font-bold text-primary mb-3">
              What you get
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Clear placements and proof—no vague promises. You approve artwork before it’s printed.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {placements.map((placement, index) => (
                <div key={index} className="rounded-xl bg-secondary p-4 border border-border">
                  <h4 className="font-heading font-semibold text-primary mb-1">{placement.title}</h4>
                  <p className="text-muted-foreground text-sm">{placement.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-purple transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent-muted font-heading font-semibold text-lg px-10 py-6 shadow-gold transition-smooth hover:scale-105"
            >
              Contact Us
            </Button>
            <p className="text-muted-foreground mt-6">
              We'll send placements, timeline, and how your support is used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
