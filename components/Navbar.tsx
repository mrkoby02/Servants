
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const logoSrc = "logo.jpg";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-lg shadow-sm flex-shrink-0 bg-white">
              <img 
                src={logoSrc} 
                alt="Servants Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className={`text-xl md:text-2xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Servants
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${scrolled ? 'text-gray-600 hover:text-[#6b8e83]' : 'text-gray-100 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-[#6b8e83] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#5b7a70] transition-all transform hover:scale-105 shadow-md"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-[#6b8e83] focus:outline-none transition-colors`}
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-gray-700 hover:text-[#6b8e83] hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#6b8e83] text-white px-3 py-4 rounded-xl font-bold shadow-lg"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
