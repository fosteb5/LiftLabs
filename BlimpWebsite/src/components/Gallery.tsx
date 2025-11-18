import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import cadImage from "@/assets/blimp-cad-1.jpg";
import detailImage from "@/assets/blimp-detail-1.jpg";
import mockupImage from "@/assets/blimp-mockup-1.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: cadImage,
      title: "CAD Design",
      description: "Detailed 3D modeling of the blimp structure and systems",
    },
    {
      src: detailImage,
      title: "Solar Integration",
      description: "Close-up of solar panel configuration and mounting",
    },
    {
      src: mockupImage,
      title: "System Mockup",
      description: "Visualization of autonomous control systems",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Design Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-purple-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our design process through CAD renderings and technical visualizations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-purple transition-smooth">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-heading font-bold text-primary-foreground mb-2">
                      {image.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-auto rounded-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
