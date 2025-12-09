import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import QuoteForm from '@/components/QuoteForm';
import Map from '@/components/Map';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Icemaq Refrigeração | Ar-Condicionado e Refrigeração em Vitória ES</title>
        <meta
          name="description"
          content="Icemaq Refrigeração - Especialista em instalação, manutenção e conserto de ar-condicionado, câmaras frias e refrigeração comercial em Vitória e Grande Vitória. Orçamento grátis!"
        />
        <meta
          name="keywords"
          content="ar-condicionado vitória, refrigeração vitória es, manutenção ar condicionado, câmara fria, instalação ar condicionado, conserto geladeira"
        />
        <link rel="canonical" href="https://icemaq.com.br" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Icemaq Refrigeração | Ar-Condicionado e Refrigeração em Vitória ES" />
        <meta property="og:description" content="Especialista em instalação, manutenção e conserto de ar-condicionado, câmaras frias e refrigeração comercial em Vitória e Grande Vitória." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Icemaq Refrigeração",
            "description": "Especialista em instalação, manutenção e conserto de ar-condicionado, câmaras frias e refrigeração comercial.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vitória",
              "addressRegion": "ES",
              "addressCountry": "BR"
            },
            "telephone": "+55-27-99999-9999",
            "priceRange": "$$",
            "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
            "areaServed": ["Vitória", "Vila Velha", "Serra", "Cariacica"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <QuoteForm />
          <Map />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
