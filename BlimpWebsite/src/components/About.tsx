import { Zap, Wind, Target } from "lucide-react";

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
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-primary mb-6">
              Long-Term Vision
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our project aims to demonstrate the viability of solar-powered autonomous flight for 
                long-duration missions. By leveraging lightweight materials, efficient solar collection, 
                and intelligent power management, we're creating a platform that can remain airborne 
                for extended periods without traditional fuel sources.
              </p>
              <p>
                This technology has applications in environmental monitoring, emergency communications, 
                and research platforms. We're not just building a blimp—we're pioneering the future 
                of sustainable aerospace engineering and inspiring the next generation of innovators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
