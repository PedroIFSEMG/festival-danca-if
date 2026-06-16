# Plano de Implementação - Fontes Modernas, Hero Responsivo e Componentes Premium

Este plano descreve as melhorias de design para o site do X Festival de Dança, abrangendo a modernização das fontes, a responsividade total do componente Hero no mobile, a inserção de ícones de navegação no Navbar e o refinamento estético premium de todos os componentes da página.

## User Review Required

> [!IMPORTANT]
> **Substituição de Fontes**: Vamos trocar o par de fontes atual pelo combo premium **Outfit** (Sans-serif moderno e geométrico) e **Cormorant Garamond** (Serif elegante, editorial e ideal para temas artísticos).
>
> **Responsividade do Hero**: No mobile, a imagem da dançarina e o badge de data serão redimensionados e alinhados para evitar cortes e sobreposições, melhorando muito a leitura do texto principal.
>
> **Navbar com Ícones**: O menu agora exibirá ícones correspondentes aos links para Gallery, MapSection, News, Sponsors, etc.

## Proposed Changes

---

### 1. Tipografia e Estilo Global

#### [MODIFY] [index.css](file:///c:/Users/aluno10/festival-danca/src/index.css)
- Atualizar a importação do Google Fonts para:
  `Outfit` (pesos 300, 400, 500, 600, 700, 800) e `Cormorant Garamond` (pesos 300, 400, 500, 600, 700, com suporte a itálico).
- Redefinir as variáveis de tema do Tailwind CSS v4 para aplicar essas fontes:
  - `--font-sans: "Outfit", ui-sans-serif, system-ui, sans-serif;`
  - `--font-serif: "Cormorant Garamond", ui-serif, Georgia, Cambria, serif;`

---

### 2. Cabeçalho / Navbar

#### [MODIFY] [Navbar.tsx](file:///c:/Users/aluno10/festival-danca/src/components/Navbar.tsx)
- Importar os ícones necessários:
  - Galeria: `<RiGalleryFill />` (de `react-icons/ri`)
  - Notícias: `<FaNewspaper />` (de `react-icons/fa`)
  - Local (MapSection): `<RiMapPinFill />` ou `<MapPin />` (de `react-icons/ri` ou `lucide-react`)
  - Patrocinadores (Sponsors): `<RiHeartFill />` ou `<Handshake />`
  - História: `<RiHistoryFill />`
- Adicionar os links que faltavam na navegação (`Sponsors` e `MapSection` / `Local`).
- Renderizar os ícones ao lado do texto nos links da barra de navegação (desktop e mobile).
- Aplicar efeito premium de vidro (`backdrop-blur-xl bg-white/70 shadow-lg border-b border-festival-lilac-light/20`).
- Otimizar a exibição do título no mobile para não esmagar os logos e o botão de menu (ex. ocultar ou reduzir o tamanho em telas pequenas).

---

### 3. Hero Section

#### [MODIFY] [Hero.tsx](file:///c:/Users/aluno10/festival-danca/src/components/Hero.tsx)
- Tornar o Hero totalmente responsivo para dispositivos móveis:
  - Reduzir o tamanho da fonte do título principal no mobile (`text-5xl` ou `text-4xl` em telas muito pequenas, escalando para `text-6xl sm:text-7xl lg:text-[7rem]`).
  - Ajustar o tamanho da fonte do texto cursivo "de Dança" para caber perfeitamente no mobile (`text-5xl sm:text-7xl lg:text-[7.5rem]`).
  - Modificar o posicionamento e o tamanho do *Floating Date Badge* no mobile (posicionar no centro inferior ou relativo à imagem, reduzindo o tamanho da fonte para não estourar em telas pequenas como iPhone SE).
  - Ajustar a ordem do grid: no mobile, colocar o texto primeiro ou otimizar a transição e espaçamento entre a imagem da dançarina e a chamada de texto.
  - Ajustar padding vertical no mobile para evitar sobreposição de elementos.

---

### 4. Outros Componentes (Visual Premium & Acessibilidade)

#### [MODIFY] [ActionGrid.tsx](file:///c:/Users/aluno10/festival-danca/src/components/ActionGrid.tsx)
- Adicionar gradientes premium escuros e filtros mais definidos nas imagens de fundo.
- Ajustar transições de hover dos cards, melhorando o contraste do texto de descrição sobre as imagens.
- Adicionar tags de acessibilidade `aria-label`.

#### [MODIFY] [Countdown.tsx](file:///c:/Users/aluno10/festival-danca/src/components/Countdown.tsx)
- Refinar as caixas de contagem com efeito de vidro translúcido (`bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(163,114,168,0.1)]`).
- Adicionar um brilho suave (`drop-shadow`) nos números e otimizar o peso da fonte Serif para leitura mais fluida.

#### [MODIFY] [Gallery.tsx](file:///c:/Users/aluno10/festival-danca/src/components/Gallery.tsx)
- Adicionar efeitos de foco e bordas finas cintilantes nos cards de galeria.
- Refinar as transições de zoom das imagens ao passar o mouse.
- Adicionar descrições de imagem alternativas (`alt`) adequadas.

#### [MODIFY] [News.tsx](file:///c:/Users/aluno10/festival-danca/src/components/News.tsx)
- Melhorar o design dos cards de notícias, usando fundo branco limpo ou vidro suave, com sombras fluidas.
- Adicionar micro-animações de seta de link ao passar o mouse.

#### [MODIFY] [MapSection.tsx](file:///c:/Users/aluno10/festival-danca/src/components/MapSection.tsx)
- Adicionar borda brilhante e sombra suave ao container do mapa.
- Tornar o layout do endereço e texto altamente elegante com espaçamentos otimizados.

#### [MODIFY] [Sponsors.tsx](file:///c:/Users/aluno10/festival-danca/src/components/Sponsors.tsx)
- Substituir as caixas de placeholders simples por cartões com efeito de marca d'água elegante ou SVG estilizado.
- Ajustar a animação infinita de marquee para ser extremamente suave e sem travamentos.

---

## Verification Plan

### Automated/Manual Verification
- Executar e testar a aplicação localmente (`npm run dev`).
- Utilizar as ferramentas de desenvolvedor do navegador para inspecionar em múltiplos dispositivos móveis (ex.: iPhone SE, iPhone 12 Pro, Pixel 5, iPad) para verificar se o Hero, a Navbar e todos os outros blocos de conteúdo se comportam perfeitamente sem cortes ou transbordamento horizontal.
- Validar se os ícones carregam perfeitamente e se as novas fontes (Outfit e Cormorant Garamond) são carregadas da CDN do Google Fonts com sucesso.
