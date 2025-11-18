import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Sponsor Banner Area */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-center text-sm font-semibold text-accent mb-6">
            PROUDLY SUPPORTED BY
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <p className="text-primary-foreground font-semibold">
                John M. Thompson Innovation Fund
              </p>
            </div>
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <p className="text-primary-foreground font-semibold">
                Western Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-gold">
                <span className="text-2xl font-heading font-bold text-accent-foreground">W</span>
              </div>
              <div>
                <div className="text-sm font-semibold">Western Engineering</div>
                <div className="text-xs text-accent">Blimp Team</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Pioneering sustainable aerospace technology through student-led innovation. 
              Building a solar-powered autonomous blimp that demonstrates the future of 
              renewable energy in flight.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  About Project
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#team" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Sponsorship
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>blimp.team@uwo.ca</li>
              <li>(519) 661-1234</li>
              <li className="leading-relaxed">
                Western Engineering<br />
                London, ON N6A 5B9
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>
            © {currentYear} Western Engineering Blimp Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
