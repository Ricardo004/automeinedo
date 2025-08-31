# Oficina Automeinedo - Website

Website moderno e responsivo para a Oficina Automeinedo, especializada em manutenção e reparação de veículos Subaru em Meinedo, Lousada.

## 🚗 Sobre a Empresa

A Automeinedo A.M. Lda é uma oficina especializada em:

- Manutenção e reparação de veículos Subaru
- Diagnóstico eletrónico especializado
- Manutenção de sistemas CVT e AWD
- Inspeções periódicas obrigatórias
- Fornecimento de peças originais

**Localização:** Rua de Santo Tirso, Nº 348, 4620-848 Meinedo, Lousada, Porto

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos e consistentes
- **Headless UI** - Componentes acessíveis unstyled

## 🎨 Características do Website

- ✨ Design moderno e profissional
- 📱 Totalmente responsivo (mobile-first)
- 🚀 Performance otimizada com Next.js
- ♿ Acessibilidade (WCAG 2.1)
- 🌐 Otimizado para SEO
- 🇵🇹 Conteúdo em português

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Estilos globais e Tailwind
│   ├── layout.tsx       # Layout principal da aplicação
│   └── page.tsx         # Página inicial
└── components/          # Componentes reutilizáveis (futuro)
```

## 🚀 Como Executar

1. **Instalar dependências:**

   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento:**

   ```bash
   npm run dev
   ```

3. **Aceder ao website:**
   Abrir [http://localhost:3000](http://localhost:3000) no browser

## 📝 Scripts Disponíveis

- `npm run dev` - Executar em modo de desenvolvimento
- `npm run build` - Compilar para produção
- `npm run start` - Executar versão de produção
- `npm run lint` - Verificar problemas de código

## 🔧 Desenvolvimento

### Adicionar Novas Secções

O website está estruturado em secções na página principal:

- Header com navegação
- Hero section
- Serviços
- Sobre a empresa
- Testemunhos
- Contactos
- Footer

### Personalização de Cores

As cores principais estão definidas em `tailwind.config.js`:

- **Primary:** Azul para elementos principais
- **Secondary:** Cinza para texto e backgrounds

### Fontes

Utiliza a fonte **Inter** do Google Fonts para uma aparência moderna e legível.

## 📧 Formulário de Contacto

O formulário inclui campos para:

- Informações de contacto do cliente
- Modelo e ano do veículo Subaru
- Tipo de serviço necessário
- Descrição detalhada do problema

_Nota: O formulário precisa de implementação backend para processar os envios._

## 🌐 Deploy

Para fazer deploy em produção:

1. **Compilar o projeto:**

   ```bash
   npm run build
   ```

2. **Deploy em plataformas como:**
   - Vercel (recomendado para Next.js)
   - Netlify
   - AWS
   - DigitalOcean

## 📱 Responsividade

O website foi desenvolvido com abordagem mobile-first e é totalmente responsivo:

- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## ♿ Acessibilidade

- Navegação por teclado
- Contraste adequado
- Textos alternativos para elementos visuais
- Estrutura semântica HTML5

## 📈 SEO

- Meta tags otimizadas
- Estrutura HTML semântica
- Schema markup (implementação futura)
- Sitemap XML (implementação futura)

## 🤝 Contribuições

Este projeto foi desenvolvido especificamente para a Oficina Automeinedo. Para sugestões ou melhorias, contacte os desenvolvedores.

## 📄 Licença

© 2024 Oficina Automeinedo. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Oficina Automeinedo**
