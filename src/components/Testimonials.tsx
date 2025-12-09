import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente Residencial',
      location: 'Jardim da Penha, Vitória',
      content: 'Excelente atendimento! O técnico foi super pontual e resolveu o problema do meu ar-condicionado rapidamente. Recomendo demais!',
      rating: 5,
    },
    {
      name: 'Carlos Mendes',
      role: 'Proprietário de Restaurante',
      location: 'Praia do Canto, Vitória',
      content: 'A Icemaq cuida da manutenção das nossas câmaras frias há 5 anos. Nunca tivemos problemas. Equipe muito profissional.',
      rating: 5,
    },
    {
      name: 'Ana Paula Costa',
      role: 'Gerente de Loja',
      location: 'Shopping Vitória',
      content: 'Contratamos para instalar o ar-condicionado da loja. Serviço impecável, limpo e organizado. Preço justo e honesto.',
      rating: 5,
    },
    {
      name: 'Roberto Almeida',
      role: 'Cliente Residencial',
      location: 'Serra, ES',
      content: 'Meu freezer parou de funcionar numa sexta à noite. Liguei sábado cedo e no mesmo dia já estava consertado. Show de bola!',
      rating: 5,
    },
    {
      name: 'Fernanda Lima',
      role: 'Síndica de Condomínio',
      location: 'Vila Velha, ES',
      content: 'Fazem a manutenção preventiva do nosso condomínio todo mês. Equipamentos sempre funcionando perfeitamente.',
      rating: 5,
    },
    {
      name: 'João Pedro Santos',
      role: 'Dono de Mercado',
      location: 'Cariacica, ES',
      content: 'Instalaram todos os balcões refrigerados do mercado. Trabalho de primeira qualidade. Super indico!',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4 animate-fade-in">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-fade-in-up">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos de quem já utilizou nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-primary/30 card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-ice-light rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
