import { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: 'Solicitação enviada!',
      description: 'Entraremos em contato em breve.',
    });

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Telefone', value: '(27) 99999-9999', href: 'tel:+5527999999999' },
    { icon: Mail, label: 'E-mail', value: 'contato@icemaq.com.br', href: 'mailto:contato@icemaq.com.br' },
    { icon: MapPin, label: 'Endereço', value: 'Vitória, ES', href: '#mapa' },
  ];

  return (
    <section id="orcamento" className="section-padding bg-frost">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-card animate-slide-in-left">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Solicite um Orçamento Grátis
            </h2>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário abaixo e retornaremos seu contato em até 24 horas.
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-scale-in">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Enviado com Sucesso!</h3>
                <p className="text-muted-foreground">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <Input
                      type="tel"
                      placeholder="(27) 99999-9999"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Serviço *
                  </label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instalacao-residencial">Instalação Ar-Condicionado Residencial</SelectItem>
                      <SelectItem value="instalacao-comercial">Instalação Ar-Condicionado Comercial</SelectItem>
                      <SelectItem value="manutencao-ar">Manutenção Ar-Condicionado</SelectItem>
                      <SelectItem value="conserto-ar">Conserto Ar-Condicionado</SelectItem>
                      <SelectItem value="camara-fria">Câmara Frigorífica</SelectItem>
                      <SelectItem value="geladeira-freezer">Geladeira/Freezer</SelectItem>
                      <SelectItem value="manutencao-preventiva">Manutenção Preventiva</SelectItem>
                      <SelectItem value="emergencia">Atendimento Emergencial</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Descreva o que você precisa..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Solicitação
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Entre em Contato
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Prefere falar diretamente conosco? Entre em contato pelos canais abaixo. Estamos prontos para atender você!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow group"
                >
                  <div className="w-12 h-12 bg-ice-light rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="xl" className="w-full" asChild>
              <a href="https://wa.me/5527999999999" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chamar no WhatsApp
              </a>
            </Button>

            {/* Business Hours */}
            <div className="mt-8 p-6 bg-card rounded-xl">
              <h4 className="font-semibold text-foreground mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda a Sexta</span>
                  <span className="text-foreground font-medium">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="text-foreground font-medium">08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergências</span>
                  <span className="text-primary font-medium">24 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
