
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 overflow-hidden rounded-md border border-white/10">
                <img 
                  src="https://replicate.delivery/xpb/76191b35-139d-4886-905b-a7e651e44f8f/logo.png" 
                  alt="Servant's Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight uppercase">SERVANT'S</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Excelência em terceirização de mão de obra. Oferecemos soluções inteligentes para otimizar sua operação e reduzir custos com foco total em qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-blue-500 transition-colors">Serviços</a></li>
              <li><a href="#beneficios" className="hover:text-blue-500 transition-colors">Benefícios</a></li>
              <li><a href="#contato" className="hover:text-blue-500 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Servant's Serviços Gerais. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span>Qualidade e Confiança</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
