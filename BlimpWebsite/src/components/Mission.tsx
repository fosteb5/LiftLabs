import { Rocket, Leaf, Users } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Rocket,
      title: "Inspire Innovation",
      description: "Pushing the boundaries of aerospace engineering through creative problem-solving and cutting-edge design",
    },
    {
      icon: Leaf,
      title: "Promote Sustainability",
      description: "Demonstrating that advanced technology and environmental responsibility can work hand in hand",
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Creating opportunities for students to collaborate, learn, and make their mark on Western Engineering",
    },
  ];

  return (
    <section id="mission" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Driving change through engineering excellence, environmental stewardship, and collaborative innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-purple-gold rounded-2xl opacity-0 group-hover:opacity-100 transition-smooth blur-xl" />
              <div className="relative bg-card p-8 rounded-2xl shadow-card hover:shadow-purple transition-smooth border-2 border-transparent group-hover:border-accent/20">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-gradient-purple transition-smooth">
                  <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-block bg-gradient-purple text-primary-foreground px-8 py-4 rounded-full shadow-purple">
            <p className="text-lg font-heading font-semibold">
              Building the future of aerospace, one innovation at a time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
