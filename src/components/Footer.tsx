import { Snowflake, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Ar-Condicionado Residencial',
    'Ar-Condicionado Comercial',
    'Câmaras Frigoríficas',
    'Manutenção Preventiva',
    'Atendimento Emergencial',
  ];

  const locations = [
    'Vitória',
    'Vila Velha',
    'Serra',
    'Cariacica',
    'Guarapari',
  ];

  return (
    <footer id="contato" className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-background leading-tight">Icemaq</span>
                <span className="text-xs text-background/70">Refrigeração</span>
              </div>
            </a>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Soluções completas em refrigeração e climatização para residências e empresas na Grande Vitória.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/icemaq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/icemaq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background text-lg mb-5">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-background text-lg mb-5">Atendemos</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="flex items-center gap-2 text-background/70 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background text-lg mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5527999999999"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-background font-medium">(27) 99999-9999</div>
                    <div className="text-xs">WhatsApp disponível</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@icemaq.com.br"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-background font-medium">contato@icemaq.com.br</div>
                    <div className="text-xs">Resposta em até 24h</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} Icemaq Refrigeração. Todos os direitos reservados.</p>
            <p>Vitória, ES - CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
