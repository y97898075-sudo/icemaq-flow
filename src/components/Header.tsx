import { useState, useEffect } from 'react';
import { Menu, X, Phone, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Snowflake className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                Icemaq
              </span>
              <span className={`text-xs font-medium ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
                Refrigeração
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+5527999999999" className={`flex items-center gap-2 font-medium ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              <Phone className="w-4 h-4" />
              <span>(27) 99999-9999</span>
            </a>
            <Button variant={isScrolled ? 'default' : 'heroOutline'} size="sm" asChild>
              <a href="#orcamento">Orçamento Grátis</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg animate-fade-in-down">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="mt-2" asChild>
                <a href="#orcamento">Orçamento Grátis</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
