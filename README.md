# Arq.Studio — Site de Arquitetura

Recriação do site de arquitetos do protótipo do Figma, feita com **React + Vite + React Router**.

## Integrantes da dupla

- Nome do integrante 1
- Nome do integrante 2

## Descrição

Site institucional de um estúdio de arquitetura, com página inicial, listagem de projetos, página de detalhes dinâmica, página sobre e formulário de contato. O layout é responsivo (desktop, tablet e celular, com menu hambúrguer).

## Rotas

| Rota             | Página                | Descrição                                   |
| ---------------- | --------------------- | ------------------------------------------- |
| `/`              | Home                  | Hero, números, serviços e projetos em destaque |
| `/projetos`      | Projetos              | Lista de projetos com filtro por categoria  |
| `/projetos/:id`  | Detalhes do Projeto   | Rota dinâmica (usa `useParams`)             |
| `/sobre`         | Sobre                 | História e equipe                           |
| `/contato`       | Contato               | Informações e formulário                    |
| `*`              | NotFound              | Página 404                                  |

## Tecnologias

- React
- Vite
- React Router (`BrowserRouter`, `Routes`, `Route`, `Outlet`, `NavLink`, `Link`, `useParams`)
- CSS puro

## Estrutura de pastas

```
src/
├── components/   # Header, Footer, Layout, Button, ProjectCard, SectionTitle
├── pages/        # Home, Projetos, ProjetoDetalhe, Sobre, Contato, NotFound
├── data/         # projetos.js (dados dos projetos)
├── styles/       # global.css
├── App.jsx       # definição das rotas
└── main.jsx      # ponto de entrada (BrowserRouter)
```

## Como executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```
