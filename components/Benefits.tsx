
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Redução de custos operacionais',
  'Foco no seu core business',
  'Equipes treinadas e certificadas',
  'Gestão profissional de pessoas',
  'Flexibilidade e escalabilidade',
  'Conformidade trabalhista'
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipe de trabalho" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6b8e83] rounded-2xl -z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-gray-200 rounded-2xl -z-0 hidden md:block"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-base font-bold text-[#6b8e83] tracking-wide uppercase">Por que nos escolher</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Benefícios da terceirização com a Servants
            </h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Ao escolher nossos serviços, sua empresa ganha em eficiência, reduz custos e pode focar no que realmente importa: o crescimento do seu negócio.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-[#6b8e83] mr-3 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a 
                href="#contato"
                className="inline-flex items-center text-[#6b8e83] font-bold hover:text-[#5b7a70] text-lg group"
              >
                Saiba Mais
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;