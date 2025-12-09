import { CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const benefits = [
    'Profissionais certificados e experientes',
    'Atendimento rápido em até 24 horas',
    'Garantia em todos os serviços',
    'Peças originais de fábrica',
    'Orçamento grátis e sem compromisso',
    'Pagamento facilitado',
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Clientes Atendidos' },
    { icon: Award, value: '15+', label: 'Anos de Mercado' },
    { icon: Clock, value: '24h', label: 'Suporte Emergencial' },
    { icon: Shield, value: '100%', label: 'Garantia' },
  ];

  return (
    <section id="sobre" className="section-padding bg-frost">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Referência em Refrigeração na Grande Vitória
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Há mais de 15 anos, a <strong className="text-foreground">Icemaq Refrigeração</strong> oferece soluções completas em climatização e refrigeração para residências e empresas em Vitória e região metropolitana.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe é formada por técnicos certificados e experientes, prontos para atender suas necessidades com qualidade, agilidade e preços justos. Trabalhamos com as melhores marcas do mercado e utilizamos peças originais em todos os serviços.
            </p>

            {/* Benefits List */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <a href="#orcamento">Fale Conosco</a>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-ice-light rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-6 bg-primary rounded-2xl p-6 text-primary-foreground">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Garantia Total</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    Todos os nossos serviços possuem garantia. Sua satisfação é nossa prioridade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
