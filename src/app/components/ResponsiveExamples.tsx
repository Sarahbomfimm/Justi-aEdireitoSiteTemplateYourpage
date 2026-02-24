import React from 'react';

/**
 * EXEMPLOS PRÁTICOS DE COMPONENTES RESPONSIVOS
 * Demonstra como aplicar media queries e design responsivo
 */

// ============================================
// 1. HERO SECTION RESPONSIVO
// ============================================
export function ResponsiveHeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      {/* Container responsivo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid responsivo: 1 coluna em mobile, 2 em desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          {/* Coluna 1 */}
          <div className="flex flex-col justify-center py-8 sm:py-12">
            {/* Tipografia responsiva */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Título que Muda de Tamanho
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
              Parágrafo responsivo que fica legível em todos os tamanhos de tela.
            </p>
            {/* Botão responsivo */}
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium">
              Clique em Mim
            </button>
          </div>

          {/* Coluna 2 - Imagem responsiva */}
          <div className="flex items-center justify-center">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Imagem responsiva"
              className="w-full max-w-md h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 2. CARD GRID RESPONSIVO
// ============================================
export function ResponsiveCardGrid() {
  const cards = [
    { id: 1, title: 'Card 1', description: 'Responsivo' },
    { id: 2, title: 'Card 2', description: 'Mobile First' },
    { id: 3, title: 'Card 3', description: 'Flexível' },
    { id: 4, title: 'Card 4', description: 'Adaptável' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12">
          Grid de Cards
        </h2>

        {/* Grid responsivo: 1 coluna mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {cards.map(card => (
            <div
              key={card.id}
              className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// 3. FORMULÁRIO RESPONSIVO
// ============================================
export function ResponsiveForm() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8">
          Formulário Responsivo
        </h2>

        <form className="space-y-4 sm:space-y-6">
          {/* Nome e Email: 1 coluna mobile, 2 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Mensagem: Full width */}
          <div>
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <textarea
              rows={4}
              placeholder="Sua mensagem..."
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          {/* Botão: Full width mobile, auto desktop */}
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

// ============================================
// 4. NAVEGAÇÃO RESPONSIVA
// ============================================
export function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold">Logo</div>

          {/* Menu Desktop (oculto em mobile) */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Serviços
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </a>
          </div>

          {/* Hamburger Menu (visível apenas em mobile) */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Menu Mobile (responsivo) */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
              Sobre
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
              Serviços
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
              Contato
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ============================================
// 5. LAYOUT FLEXBOX RESPONSIVO
// ============================================
export function ResponsiveFlexLayout() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex responsivo: coluna mobile, linha tablet+ */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar: 100% mobile, auto desktop */}
          <aside className="w-full lg:w-64 bg-gray-100 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Sidebar</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#" className="text-blue-600 hover:underline">Link 1</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Link 2</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Link 3</a></li>
            </ul>
          </aside>

          {/* Main Content: 100% mobile, flex-1 desktop */}
          <main className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Conteúdo Principal</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </main>
        </div>
      </div>
    </section>
  );
}

// ============================================
// 6. TABELA RESPONSIVA
// ============================================
export function ResponsiveTable() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8">
          Tabela Responsiva
        </h2>

        {/* Wrapper para scroll horizontal em mobile */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Nome</th>
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">João</td>
                <td className="px-4 py-3">joao@email.com</td>
                <td className="px-4 py-3"><span className="bg-green-100 text-green-800 px-3 py-1 rounded text-xs font-medium">Ativo</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">Maria</td>
                <td className="px-4 py-3">maria@email.com</td>
                <td className="px-4 py-3"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-medium">Pendente</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ============================================
// COMPONENTE AGREGADOR (para visualizar todos)
// ============================================
export default function ResponsiveExamples() {
  return (
    <div className="w-full">
      <ResponsiveNavigation />
      <ResponsiveHeroSection />
      <ResponsiveCardGrid />
      <ResponsiveForm />
      <ResponsiveFlexLayout />
      <ResponsiveTable />
    </div>
  );
}
