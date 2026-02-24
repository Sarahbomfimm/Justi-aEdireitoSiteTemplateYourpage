# Guia de Design Responsivo - Your Page

## 📱 Abordagem Mobile-First

Este projeto utiliza uma **estratégia mobile-first** com os seguintes breakpoints:

- **Mobile**: < 640px (Tailwind `sm`)
- **Tablet**: 640px - 1024px (Tailwind `md`)
- **Desktop**: > 1024px (Tailwind `lg`)

## 🎯 Variáveis CSS Responsivas

Todas as dimensões e espaçamentos são definidos em CSS custom properties que mudam conforme o breakpoint:

```css
/* Mobile */
--font-size-base: 1rem;
--spacing-lg: 2rem;

/* Tablet (640px+) */
--font-size-lg: 1.125rem;
--spacing-lg: 2.5rem;

/* Desktop (1024px+) */
--font-size-lg: 1.375rem;
--spacing-lg: 3rem;
```

## 📐 Media Queries Disponíveis

### 1. **Mobile** (padrão)
```css
/* estilos para mobile aplicam-se por padrão */
```

### 2. **Tablet** (640px+)
```css
@media (min-width: 640px) {
  /* estilos para tablet */
}
```

### 3. **Desktop** (1024px+)
```css
@media (min-width: 1024px) {
  /* estilos para desktop */
}
```

## 🔧 Utilitários Responsivos

### Container Responsivo
```tsx
<div className="container">
  {/* Automático: 100% mobile, 95% tablet, 1280px desktop */}
</div>
```

### Grid Responsivo
```tsx
<div className="grid-auto">
  {/* 1 coluna mobile, 2 colunas tablet, 3 colunas desktop */}
</div>
```

### Flexbox Responsivo
```tsx
<div className="flex-responsive">
  {/* Vertical mobile, horizontal tablet+ */}
</div>
```

### Espaçamento Responsivo
```tsx
<div className="gap-responsive">
  {/* Espaçamento automático por breakpoint */}
</div>
```

### Padding Responsivo
```tsx
<section className="section-padding">
  {/* Padding automático por breakpoint */}
</section>
```

### Margem Responsivo
```tsx
<div className="my-responsive">
  {/* Margin Y automática por breakpoint */}
</div>
```

## 👁️ Visibilidade Responsiva

### Ocultar por Breakpoint
```tsx
{/* Oculto apenas em mobile */}
<div className="hidden-mobile">...</div>

{/* Oculto apenas em tablet */}
<div className="hidden-tablet">...</div>

{/* Oculto apenas em desktop */}
<div className="hidden-desktop">...</div>
```

## 🖼️ Imagens Responsivas

### Imagens com Aspect Ratio
```tsx
<img 
  src="image.jpg" 
  alt="Descrição"
  style={{ maxWidth: '100%', height: 'auto' }}
/>
```

### Imagens em Grid
```tsx
<div className="grid-auto">
  <img src="img1.jpg" alt="1" />
  <img src="img2.jpg" alt="2" />
  <img src="img3.jpg" alt="3" />
</div>
```

## ⌨️ Inputs Responsivos

Todos os inputs herdam tamanho de fonte responsivo automaticamente:

```css
/* Mobile: 16px */
/* Tablet: 16px */
/* Desktop: 16px */
input {
  font-size: var(--font-size-base);
  padding: 0.75rem 1rem; /* 12px 16px */
}

@media (min-width: 768px) {
  input {
    padding: 0.875rem 1.25rem; /* 14px 20px */
  }
}
```

## 🎨 Tipografia Responsiva

### H1
```css
/* Mobile: 24px */
/* Tablet: 30px */
/* Desktop: 36px */
h1 {
  font-size: var(--font-size-2xl);
}

@media (min-width: 640px) {
  h1 { font-size: var(--font-size-3xl); }
}

@media (min-width: 1024px) {
  h1 { font-size: var(--font-size-4xl); }
}
```

### H2
```css
/* Mobile: 20px */
/* Tablet: 24px */
/* Desktop: 30px */
h2 {
  font-size: var(--font-size-xl);
}
```

### H3
```css
/* Mobile: 18px */
/* Tablet: 20px */
h3 {
  font-size: var(--font-size-lg);
}
```

## 🚀 Otimizações Mobile

Automáticas no arquivo `responsive.css`:

- ✅ Touch targets mínimos de 44px (acessibilidade)
- ✅ Animações reduzidas para melhor performance
- ✅ Carrossel reduzido a 300px de altura
- ✅ Menu adaptado para mobile

## 📊 Performance em Mobile

### Dicas Adicionais:

1. **Reduza animações**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     * { animation-duration: 0s !important; }
   }
   ```

2. **Carregue imagens otimizadas**:
   ```tsx
   <img 
     src="image-mobile.jpg" 
     srcSet="image-mobile.jpg 640w, image-desktop.jpg 1024w"
     alt="Responsivo"
   />
   ```

3. **Use `loading="lazy"` em imagens**:
   ```tsx
   <img src="image.jpg" loading="lazy" alt="Otimizado" />
   ```

## 🔍 Testando Responsividade

### Chrome DevTools:
1. Abra DevTools (F12)
2. Clique no ícone de device (Ctrl+Shift+M)
3. Teste em diferentes tamanhos

### Breakpoints para Testar:
- Mobile: 375px, 480px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 📝 Exemplo Completo

```tsx
export function ResponsiveComponent() {
  return (
    <section className="section-padding">
      <div className="container">
        <h1>Título Responsivo</h1>
        
        <div className="grid-auto gap-responsive">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </div>
        
        <div className="flex-responsive">
          <div>Flex 1</div>
          <div>Flex 2</div>
        </div>
      </div>
    </section>
  );
}
```

## ✅ Checklist de Responsividade

- [ ] Testar em mobile (< 640px)
- [ ] Testar em tablet (640px - 1024px)
- [ ] Testar em desktop (> 1024px)
- [ ] Imagens carregam corretamente
- [ ] Touch targets > 44px em mobile
- [ ] Sem scroll horizontal
- [ ] Tipografia legível em todos os tamanhos
- [ ] Inputs acessíveis em mobile
- [ ] Performance em 3G simulado
- [ ] Sem quebra de layout

## 🎯 Próximos Passos

1. Aplicar classes responsivas aos componentes
2. Testar em dispositivos reais
3. Otimizar imagens por breakpoint
4. Implementar lazy loading
5. Medir performance com Lighthouse

---

**Referência**: Mobile-First Responsive Design Best Practices
