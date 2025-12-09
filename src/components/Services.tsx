import { Wind, Thermometer, Wrench, Building2, Home, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: 'Ar-Condicionado Residencial',
      description: 'Instalação, manutenção preventiva e corretiva de splits, multi-splits e ar-condicionado de janela.',
      features: ['Instalação completa', 'Limpeza e higienização', 'Recarga de gás', 'Troca de filtros'],
    },
    {
      icon: Building2,
      title: 'Ar-Condicionado Comercial',
      description: 'Soluções para empresas, escritórios, lojas e estabelecimentos comerciais de todos os portes.',
      features: ['VRF e Multi-Split', 'Manutenção programada', 'Contratos de manutenção', 'Suporte técnico'],
    },
    {
      icon: Thermometer,
      title: 'Câmaras Frigoríficas',
      description: 'Instalação e manutenção de câmaras frias para restaurantes, supermercados e indústrias.',
      features: ['Câmaras frias', 'Câmaras de congelamento', 'Balcões refrigerados', 'Manutenção 24h'],
    },
    {
      icon: Home,
      title: 'Refrigeração Residencial',
      description: 'Conserto e manutenção de geladeiras, freezers e refrigeradores de todas as marcas.',
      features: ['Todas as marcas', 'Peças originais', 'Garantia de serviço', 'Orçamento grátis'],
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      description: 'Programas de manutenção preventiva para garantir o funcionamento ideal dos seus equipamentos.',
      features: ['Visitas programadas', 'Relatórios técnicos', 'Redução de custos', 'Maior durabilidade'],
    },
    {
      icon: Zap,
      title: 'Atendimento Emergencial',
      description: 'Serviço de emergência 24 horas para situações críticas que não podem esperar.',
      features: ['Atendimento 24h', 'Resposta rápida', 'Técnicos experientes', 'Soluções imediatas'],
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
            Soluções Completas em Refrigeração
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
            Oferecemos serviços especializados para residências e empresas, com qualidade, agilidade e preços justos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border/50 hover:border-primary/30 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-ice-light rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary" asChild>
                  <a href="#orcamento">Solicitar Orçamento</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
