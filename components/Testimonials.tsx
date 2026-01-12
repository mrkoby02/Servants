
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Mendes',
    role: 'Gerente de Logística',
    company: 'Distribuidora Sul',
    content: 'A Servants transformou nossa operação de carga e descarga. Os profissionais são pontuais, extremamente cuidadosos com a carga e muito ágeis. Recomendo fortemente.',
    stars: 5
  },
  {
    name: 'Ana Paula Rocha',
    role: 'Engenheira Civil',
    company: 'Construções Prime',
    content: 'O serviço de limpeza pós-obra foi impecável. Entregamos o empreendimento brilhando e dentro do prazo. A atenção aos detalhes da equipe é o grande diferencial.',
    stars: 5
  },
  {
    name: 'Carlos Schmidt',
    role: 'Síndico Profissional',
    company: 'Condomínio Solar',
    content: 'Terceirizar a portaria com a Servants nos trouxe uma paz de espírito enorme. A equipe é muito cordial e o controle de acesso é rigoroso e eficiente.',
    stars: 5
  },
  {
    name: 'Juliana Lopes',
    role: 'Diretora Financeira',
    company: 'Rede Varejo Max',
    content: 'Excelente custo-benefício. Conseguimos reduzir nossos gastos operacionais em 20% no primeiro semestre apenas otimizando a mão de obra com a Servants.',
    stars: 4
  },
  {
    name: 'Marcos Teixeira',
    role: 'Produtor de Eventos',
    company: 'MT Produções',
    content: 'Sempre que precisamos de apoio extra em grandes eventos, recorremos à Servants. A resposta é rápida e a equipe de montagem é muito preparada.',
    stars: 5
  },
  {
    name: 'Beatriz Fonseca',
    role: 'Administradora',
    company: 'Shopping Center Sul',
    content: 'Os serviços de limpeza comercial são realizados com muito capricho. A gestão de pessoas da Servants é excelente, nunca ficamos sem cobertura de pessoal.',
    stars: 5
  },
  {
    name: 'Gustavo Ribeiro',
    role: 'Supervisor Industrial',
    company: 'Metalúrgica Vale',
    content: 'A flexibilidade da equipe é o grande diferencial. Eles conseguem atender nossas demandas sazonais perfeitamente, ajustando o quadro conforme a necessidade.',
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-[#6b8e83] tracking-wide uppercase">Feedback dos Clientes</h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Quem confia em nosso trabalho
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A satisfação dos nossos parceiros é o que nos move a entregar excelência todos os dias.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col transition-transform hover:-translate-y-2 duration-300 ${index === 6 ? 'md:col-span-2 lg:col-span-1 mx-auto max-w-md lg:max-w-none' : ''}`}
            >
              <div className="flex text-[#6b8e83] mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-[#6b8e83]/10 h-10 w-10 -z-0" />
                <p className="text-gray-600 italic leading-relaxed relative z-10">
                  "{t.content}"
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-50">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role} • <span className="text-[#6b8e83]">{t.company}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
