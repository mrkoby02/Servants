
import React from 'react';
import { 
  Truck, 
  Settings, 
  Trash2, 
  UserCheck, 
  Box, 
  Calendar, 
  Building2, 
  Home, 
  Briefcase,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'Carga e Descarga',
    description: 'Eficiência e segurança na manipulação de caminhões com cargas diversas. Equipe treinada para integridade dos materiais.',
    icon: Truck,
    items: ['Bebidas e alimentos', 'Materiais de limpeza', 'Móveis e equipamentos'],
  },
  {
    title: 'Serviços Gerais',
    description: 'Versatilidade em produção e organização para diversos setores. Profissionais capacitados para todas as demandas.',
    icon: Settings,
    items: ['Produção industrial', 'Organização de espaços', 'Apoio operacional'],
  },
  {
    title: 'Limpeza Pós-Obra',
    description: 'Excelência em limpeza profunda, remoção de resíduos e acabamento impecável para entrega de obras.',
    icon: Trash2,
    items: ['Limpeza completa', 'Remoção de entulhos', 'Acabamento final'],
  },
  {
    title: 'Portaria e Recepção',
    description: 'Controle de acesso profissional com equipe treinada. Proteção do patrimônio e atendimento qualificado.',
    icon: UserCheck,
    items: ['Controle de acesso', 'Vigilância 24h', 'Atendimento cordial'],
  },
  {
    title: 'Logística e Armazenagem',
    description: 'Gestão de estoque, organização de almoxarifados e movimentação de materiais com eficiência.',
    icon: Box,
    items: ['Controle de estoque', 'Organização de CD', 'Movimentação interna'],
  },
  {
    title: 'Eventos e Apoio',
    description: 'Equipe de apoio para eventos corporativos, feiras e convenções. Montagem e desmontagem de estruturas.',
    icon: Calendar,
    items: ['Montagem de stands', 'Apoio em eventos', 'Desmontagem rápida'],
  },
  {
    title: 'Limpeza Comercial',
    description: 'Manutenção e limpeza de escritórios, lojas e ambientes comerciais com equipe especializada.',
    icon: Building2,
    items: ['Escritórios', 'Lojas e shoppings', 'Áreas comuns'],
  },
  {
    title: 'Zeladoria Predial',
    description: 'Cuidados completos com condomínios e edifícios comerciais. Manutenção preventiva e corretiva.',
    icon: Home,
    items: ['Manutenção predial', 'Pequenos reparos', 'Conservação geral'],
  },
  {
    title: 'Outros Serviços',
    description: 'Atendemos qualquer demanda de mão de obra terceirizada. Entre em contato e solicite um orçamento personalizado.',
    icon: Briefcase,
    items: ['Sob demanda', 'Orçamento personalizado', 'Qualquer serviço'],
  }
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-[#6b8e83] tracking-wide uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
            Soluções personalizadas para cada necessidade
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Oferecemos uma gama completa de serviços terceirizados com foco em excelência operacional.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="bg-[#6b8e83]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6b8e83] transition-colors duration-300">
                <service.icon className="h-8 w-8 text-[#6b8e83] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-medium">
                    <span className="w-2 h-2 bg-[#6b8e83] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onSelectService(service.title)}
                className="w-full py-3 px-4 bg-gray-50 text-[#6b8e83] font-bold rounded-xl border border-gray-100 hover:bg-[#6b8e83] hover:text-white transition-all flex items-center justify-center group/btn"
              >
                Solicitar este serviço
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
