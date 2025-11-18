import { CheckCircle2, Circle } from "lucide-react";

const Timeline = () => {
  const milestones = [
    {
      title: "Proposal Submission",
      date: "Q4 2024",
      description: "Detailed project proposal submitted to John M. Thompson Innovation Fund",
      completed: true,
    },
    {
      title: "Funding Approval",
      date: "Q1 2025",
      description: "Project receives funding approval and team formation begins",
      completed: true,
    },
    {
      title: "Design Phase",
      date: "Q1-Q2 2025",
      description: "CAD modeling, system design, and component selection",
      completed: true,
    },
    {
      title: "Prototyping",
      date: "Q2-Q3 2025",
      description: "Building and testing initial prototype components",
      completed: false,
    },
    {
      title: "Integration",
      date: "Q3 2025",
      description: "Assembly of full system and ground testing",
      completed: false,
    },
    {
      title: "First Flight",
      date: "Q4 2025",
      description: "Maiden flight demonstration and system validation",
      completed: false,
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Project Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tracking our journey from concept to first flight
          </p>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-border last:border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                {milestone.completed ? (
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                ) : (
                  <Circle className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              <div className="bg-card p-6 rounded-xl shadow-card">
                <div className="text-sm font-semibold text-accent mb-1">
                  {milestone.date}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-6 gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Milestone Indicator */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    {milestone.completed ? (
                      <CheckCircle2 className="h-8 w-8 text-accent relative z-10 bg-secondary" />
                    ) : (
                      <Circle className="h-8 w-8 text-muted-foreground relative z-10 bg-secondary" />
                    )}
                  </div>
                </div>

                {/* Milestone Card */}
                <div className={`bg-card p-6 rounded-xl shadow-card transition-smooth hover:shadow-purple ${
                  milestone.completed ? 'border-2 border-accent/20' : 'border border-border'
                }`}>
                  <div className="text-xs font-semibold text-accent mb-2 text-center">
                    {milestone.date}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2 text-center">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
