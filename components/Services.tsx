
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
  Briefcase 
} from 'lucide-react';

const services = [
  {
    title: 'Carga e Descarga',
    description: 'Eficiência e segurança na manipulação de caminhões com cargas diversas. Equipe treinada para integridade dos materiais.',
    icon: Truck,
    items: ['Bebidas e alimentos', 'Materiais de limpeza', 'Móveis e equipamentos'],
    color: 'blue'
  },
  {
    title: 'Serviços Gerais',
    description: 'Versatilidade em produção e organização para diversos setores. Profissionais capacitados para todas as demandas.',
    icon: Settings,
    items: ['Produção industrial', 'Organização de espaços', 'Apoio operacional'],
    color: 'blue'
  },
  {
    title: 'Limpeza Pós-Obra',
    description: 'Excelência em limpeza profunda, remoção de resíduos e acabamento impecável para entrega de obras.',
    icon: Trash2,
    items: ['Limpeza completa', 'Remoção de entulhos', 'Acabamento final'],
    color: 'blue'
  },
  {
    title: 'Portaria e Recepção',
    description: 'Controle de acesso profissional com equipe treinada. Proteção do patrimônio e atendimento qualificado.',
    icon: UserCheck,
    items: ['Controle de acesso', 'Vigilância 24h', 'Atendimento cordial'],
    color: 'blue'
  },
  {
    title: 'Logística e Armazenagem',
    description: 'Gestão de estoque, organização de almoxarifados e movimentação de materiais com eficiência.',
    icon: Box,
    items: ['Controle de estoque', 'Organização de CD', 'Movimentação interna'],
    color: 'blue'
  },
  {
    title: 'Eventos e Apoio',
    description: 'Equipe de apoio para eventos corporativos, feiras e convenções. Montagem e desmontagem de estruturas.',
    icon: Calendar,
    items: ['Montagem de stands', 'Apoio em eventos', 'Desmontagem rápida'],
    color: 'blue'
  },
  {
    title: 'Limpeza Comercial',
    description: 'Manutenção e limpeza de escritórios, lojas e ambientes comerciais com equipe especializada.',
    icon: Building2,
    items: ['Escritórios', 'Lojas e shoppings', 'Áreas comuns'],
    color: 'blue'
  },
  {
    title: 'Zeladoria Predial',
    description: 'Cuidados completos com condomínios e edifícios comerciais. Manutenção preventiva e corretiva.',
    icon: Home,
    items: ['Manutenção predial', 'Pequenos reparos', 'Conservação geral'],
    color: 'blue'
  },
  {
    title: 'Outros Serviços',
    description: 'Atendemos qualquer demanda de mão de obra terceirizada. Entre em contato e solicite um orçamento personalizado.',
    icon: Briefcase,
    items: ['Sob demanda', 'Orçamento personalizado', 'Qualquer serviço'],
    color: 'gray'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase">Nossos Serviços</h2>
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-medium">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
