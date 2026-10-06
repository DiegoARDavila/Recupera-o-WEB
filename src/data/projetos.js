// Dados de exemplo. Troquem títulos, textos e imagens pelos do protótipo do Figma.
// As imagens usam picsum.photos como placeholder (seed fixa = mesma imagem sempre).
const img = (name) => `https://picsum.photos/seed/${name}/900/700`

export const projetos = [
  {
    id: 1,
    slug: 'casa-horizonte',
    titulo: 'Casa Horizonte',
    categoria: 'Residencial',
    local: 'São Paulo, SP',
    ano: 2024,
    area: '320 m²',
    imagem: img('casa-horizonte'),
    descricao:
      'Residência de linhas retas que integra sala, varanda e jardim em um único grande ambiente, com muita luz natural.',
  },
  {
    id: 2,
    slug: 'edificio-aurora',
    titulo: 'Edifício Aurora',
    categoria: 'Comercial',
    local: 'Curitiba, PR',
    ano: 2023,
    area: '4.800 m²',
    imagem: img('edificio-aurora'),
    descricao:
      'Edifício corporativo com fachada em vidro e brises metálicos, pensado para eficiência energética.',
  },
  {
    id: 3,
    slug: 'loft-urbano',
    titulo: 'Loft Urbano',
    categoria: 'Interiores',
    local: 'Rio de Janeiro, RJ',
    ano: 2024,
    area: '95 m²',
    imagem: img('loft-urbano'),
    descricao:
      'Reforma completa de um loft com pé-direito duplo, materiais brutos e marcenaria sob medida.',
  },
  {
    id: 4,
    slug: 'pavilhao-verde',
    titulo: 'Pavilhão Verde',
    categoria: 'Cultural',
    local: 'Belo Horizonte, MG',
    ano: 2022,
    area: '1.200 m²',
    imagem: img('pavilhao-verde'),
    descricao:
      'Pavilhão de exposições em madeira laminada, aberto ao parque e coberto por uma cobertura verde.',
  },
  {
    id: 5,
    slug: 'casa-da-serra',
    titulo: 'Casa da Serra',
    categoria: 'Residencial',
    local: 'Campos do Jordão, SP',
    ano: 2023,
    area: '410 m²',
    imagem: img('casa-da-serra'),
    descricao:
      'Casa de montanha em pedra e madeira, com grandes beirais e vista panorâmica para o vale.',
  },
  {
    id: 6,
    slug: 'centro-conviver',
    titulo: 'Centro Conviver',
    categoria: 'Institucional',
    local: 'Porto Alegre, RS',
    ano: 2021,
    area: '2.300 m²',
    imagem: img('centro-conviver'),
    descricao:
      'Centro comunitário com pátio central e espaços flexíveis para educação, esporte e lazer.',
  },
]

export const getProjetoById = (id) =>
  projetos.find((p) => String(p.id) === String(id))
