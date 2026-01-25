import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const members = [
    {
      name: "Kyle Brand",
      role: "",
      description: "Mechatronics and AI Engineer, 4th Year",
      linkedin: "www.linkedin.com/in/brand-kyle/",
    },
    {
      name: "Owen O'Donnell",
      role: "",
      description: "Mechatronics and AI Engineer, 4th Year",
      linkedin: "www.linkedin.com/in/owen-o%E2%80%99donnell-347940295/",
    },
    {
      name: "Karl Guirguis",
      role: "",
      description: "Software Engineer and HBA, 4th Year",
      linkedin: "www.linkedin.com/in/karl-guirguis",
    },
    {
      name: "Foster Beard",
      role: "",
      description: "Electrical and AI Engineering, 4rd Year",
      linkedin: "www.linkedin.com/in/fosterbeard/",
    },
    {
      name: "Ethan Skinner",
      role: "",
      description: "Mechatronics and AI Engineer, 4th Year",
      linkedin: "www.linkedin.com/in/ethan-skinner-93a023263/",
    },
  ];

  const formatLink = (url?: string) => {
    if (!url) return undefined;
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
    <section id="team" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Meet the Team
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate engineering students driving innovation at Western University
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl shadow-card hover:shadow-purple transition-smooth overflow-hidden">
                {/* Avatar Placeholder */}
                <div className="relative h-64 bg-gradient-purple flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90" />
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center shadow-gold">
                      <span className="text-4xl font-heading font-bold text-accent-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-center mb-4">
                    {member.description}
                  </p>
                  
                  {member.linkedin && (
                    <div className="flex justify-center space-x-3">
                      <a
                        href={formatLink(member.linkedin)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
