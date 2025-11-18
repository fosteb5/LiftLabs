import { Newspaper, Calendar, Award } from "lucide-react";

const Media = () => {
  const updates = [
    {
      icon: Award,
      title: "Innovation Fund Award",
      date: "March 2025",
      description: "Western Engineering Blimp Team receives funding from the John M. Thompson Innovation Fund",
      type: "Achievement",
    },
    {
      icon: Calendar,
      title: "Design Showcase",
      date: "February 2025",
      description: "Team presents project at Western Engineering Design Showcase to faculty and industry partners",
      type: "Event",
    },
    {
      icon: Newspaper,
      title: "Campus Feature",
      date: "January 2025",
      description: "Featured in Western Gazette for innovative approach to sustainable aerospace technology",
      type: "Press",
    },
  ];

  return (
    <section id="media" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Media & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow our journey and stay updated on project milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-purple transition-smooth p-6 md:p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-purple flex items-center justify-center shadow-purple">
                    <update.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {update.type}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {update.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                    {update.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Media inquiries and partnership opportunities welcome
          </p>
          <div className="inline-block px-6 py-3 bg-card rounded-full shadow-card">
            <p className="text-primary font-semibold">
              More updates coming soon — follow our progress!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
