import { Zap, Wind, Target, Github, Compass } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Solar-Powered",
      description: "Harnessing renewable energy through integrated solar panels for sustainable, long-duration flight",
    },
    {
      icon: Wind,
      title: "Autonomous Navigation",
      description: "Advanced flight control systems enabling independent operation and intelligent path planning",
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Pushing boundaries in aerospace engineering while promoting environmental responsibility",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            About the Project
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our solar-powered autonomous blimp represents a breakthrough in sustainable aerospace technology, 
            combining renewable energy with cutting-edge autonomous systems.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://github.com/fosteb5/LiftLabs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-purple text-primary-foreground px-5 py-3 font-semibold shadow-purple hover:opacity-90 transition-smooth"
            >
              <Github className="h-5 w-5" />
              View GitHub Repo
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-purple transition-smooth animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-purple flex items-center justify-center mb-6 shadow-purple group-hover:scale-110 transition-smooth">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card animate-fade-in-up">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-32 h-32 rounded-2xl bg-gradient-purple flex items-center justify-center shadow-purple animate-float">
                <Compass className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                Long-Term Vision
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Prove that solar-assisted autonomous flight can stay up for long durations without traditional fuel, using lightweight structure and smart power management.
                </p>
                <p>
                  Apply it to real jobs: environmental monitoring, emergency comms, and research payloads. We share what works—build notes, code, and lessons—so others can build on it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
