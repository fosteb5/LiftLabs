import { Button } from "@/components/ui/button";
import { Heart, Trophy, Star, Users } from "lucide-react";

const Sponsorship = () => {
  const benefits = [
    {
      icon: Trophy,
      title: "Logo Placement",
      description: "Prominent display on the blimp, website, and team materials",
    },
    {
      icon: Users,
      title: "Event Access",
      description: "VIP invitations to flight demonstrations and team events",
    },
    {
      icon: Star,
      title: "Recognition",
      description: "Featured in press releases and social media campaigns",
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
            Become a Sponsor
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Support the future of sustainable aerospace engineering and connect with Western's brightest minds
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-purple text-primary-foreground rounded-2xl p-8 md:p-12 mb-12 shadow-purple animate-scale-in">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mr-4 flex-shrink-0">
                <Heart className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-3">
                  Why Sponsor Us?
                </h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Helium is our project's largest operational cost. Your sponsorship directly enables testing, 
                  development, and demonstration of this groundbreaking sustainable technology. Partner with us 
                  to showcase your commitment to innovation and environmental responsibility.
                </p>
              </div>
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
              Get Involved
            </Button>
            <p className="text-muted-foreground mt-6">
              Contact us to discuss partnership opportunities and sponsorship packages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
