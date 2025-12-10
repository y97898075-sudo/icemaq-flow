import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Coordenadas exatas de Vitória, ES - Centro
const VITORIA_LAT = -20.3155;
const VITORIA_LNG = -40.3128;

const Map = () => {
  return (
    <section id="mapa" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
            Onde Estamos
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
            Atendemos Vitória e toda a Grande Vitória: Serra, Vila Velha, Cariacica e região.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl animate-scale-in">
          {/* Google Maps Embed com coordenadas precisas */}
          <div className="aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.8!2d${VITORIA_LNG}!3d${VITORIA_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d7c5e1ac7c5%3A0x76c2e4c8d3e24bdd!2sVit%C3%B3ria%2C%20ES!5e0!3m2!1spt-BR!2sbr!4v1702000000000!5m2!1spt-BR!2sbr&z=14`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Icemaq Refrigeração"
              className="hover:opacity-90 transition-opacity duration-300"
            />
          </div>

          {/* Info Card Overlay */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96">
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-1">Icemaq Refrigeração</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Vitória, ES - Atendemos toda a Grande Vitória
                  </p>
                  <Button variant="default" size="sm" className="w-full" asChild>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${VITORIA_LAT},${VITORIA_LNG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4" />
                      Como Chegar
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up animation-delay-300">
          {['Vitória', 'Vila Velha', 'Serra', 'Cariacica'].map((city) => (
            <div
              key={city}
              className="flex items-center justify-center gap-2 p-4 bg-frost rounded-xl"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
