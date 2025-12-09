import { ArrowRight, Phone, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Garantia de Serviço' },
    { icon: Clock, text: 'Atendimento Rápido' },
    { icon: Award, text: '15+ Anos de Experiência' },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(211 100% 50%) 0%, hsl(211 100% 35%) 100%)',
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-snow rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-snow rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-snow rounded-full blur-3xl opacity-5" />
      </div>

      {/* Floating Snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary-foreground/10 animate-float"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${Math.random() * 40 + 20}px`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="section-container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-down">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Atendemos Vitória e Grande Vitória</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Soluções em{' '}
              <span className="relative">
                Refrigeração
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 150 2 298 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.3"/>
                </svg>
              </span>{' '}
              para sua Casa e Empresa
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-in-up animation-delay-100">
              Instalação, manutenção e conserto de ar-condicionado, câmaras frias e sistemas de refrigeração comercial. Atendimento rápido e profissional.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-200">
              <Button variant="heroOutline" size="lg" className="group" asChild>
                <a href="#orcamento">
                  Solicitar Orçamento Grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/5527999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up animation-delay-300">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
                  <feature.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:block animate-fade-in-up animation-delay-400">
            <div className="bg-card/10 backdrop-blur-lg rounded-3xl p-8 border border-primary-foreground/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">500+</div>
                  <div className="text-sm text-primary-foreground/80">Clientes Satisfeitos</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">15+</div>
                  <div className="text-sm text-primary-foreground/80">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">24h</div>
                  <div className="text-sm text-primary-foreground/80">Atendimento Emergencial</div>
                </div>
                <div className="text-center p-6 bg-primary-foreground/10 rounded-2xl">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">100%</div>
                  <div className="text-sm text-primary-foreground/80">Garantia de Serviço</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 20% 98%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
