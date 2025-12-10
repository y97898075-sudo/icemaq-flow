import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Navigation, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Coordenadas exatas de Vitória, ES - Centro
const VITORIA_COORDS: [number, number] = [-40.3128, -20.3155];

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(() => 
    localStorage.getItem('mapbox_token') || ''
  );
  const [showTokenInput, setShowTokenInput] = useState(!mapboxToken);
  const [tokenInput, setTokenInput] = useState('');

  const handleSaveToken = () => {
    if (tokenInput.trim()) {
      localStorage.setItem('mapbox_token', tokenInput.trim());
      setMapboxToken(tokenInput.trim());
      setShowTokenInput(false);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: VITORIA_COORDS,
        zoom: 13,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for Icemaq location
      const marker = new mapboxgl.Marker({
        color: '#007bff',
      })
        .setLngLat(VITORIA_COORDS)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div style="padding: 8px;">
              <h3 style="font-weight: 600; margin-bottom: 4px;">Icemaq Refrigeração</h3>
              <p style="color: #666; font-size: 14px;">Vitória, ES</p>
            </div>
          `)
        )
        .addTo(map.current);

      // Open popup by default
      marker.togglePopup();

      // Add fullscreen control
      map.current.addControl(new mapboxgl.FullscreenControl());

      // Cleanup
      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
      setShowTokenInput(true);
      setMapboxToken('');
      localStorage.removeItem('mapbox_token');
    }
  }, [mapboxToken]);

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
          {showTokenInput ? (
            <div className="aspect-[16/9] md:aspect-[21/9] bg-frost flex items-center justify-center">
              <div className="bg-card p-8 rounded-2xl shadow-lg max-w-md w-full mx-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Key className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Token Mapbox</h3>
                    <p className="text-sm text-muted-foreground">Para visualizar o mapa interativo</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Obtenha seu token público gratuito em{' '}
                  <a 
                    href="https://mapbox.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    mapbox.com
                  </a>
                </p>
                <div className="space-y-3">
                  <Input
                    type="text"
                    placeholder="pk.eyJ1IjoiLi4u"
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    className="w-full"
                  />
                  <Button onClick={handleSaveToken} className="w-full">
                    Ativar Mapa
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <div ref={mapContainer} className="absolute inset-0" />
            </div>
          )}

          {/* Info Card Overlay */}
          {!showTokenInput && (
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
                        href={`https://www.google.com/maps/dir/?api=1&destination=${VITORIA_COORDS[1]},${VITORIA_COORDS[0]}`}
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
          )}
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
