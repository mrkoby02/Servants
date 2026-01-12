
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-600/20 text-blue-400 font-semibold text-sm mb-6 border border-blue-500/30">
            Terceirização Profissional
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Soluções completas em <span className="text-blue-500">terceirização</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Qualidade, eficiência e redução de custos. Serviços adaptados às necessidades exclusivas da sua empresa com profissionais altamente capacitados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contato" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              Contate-nos
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#servicos" 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm font-bold py-4 px-8 rounded-lg border border-white/30 transition-all text-center"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
