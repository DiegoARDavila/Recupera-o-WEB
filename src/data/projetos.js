export const projetos = [
  {
    id: 1,
    slug: 'casa-horizonte',
    titulo: 'Casa Horizonte',
    categoria: 'Residencial',
    local: 'São Paulo, SP',
    ano: 2024,
    area: '320 m²',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwewcZJc8l0qWRCaE_SkhET3oU1Aq2kMUpi6IQPO-ZgXs356fodkBkN-mQ&s=10',
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
    imagem: 'https://i.pinimg.com/736x/b0/07/19/b007199d2a14f6a288650f736a57e16c.jpg',
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
    imagem: 'https://staticfotos.sitemidas.com.br/ftp_corr/site/001540/imgimv/47269380.jpg',
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
    imagem: 'https://cdn3.praedium.com.br/5046GAugsqVXuG7IgSy/34784055454134717/t6b08cg2nziyotk1yjiznzhj_sm.jpg',
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
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA0H-VdmC2zqMNry9q47ebeDXpGbe6Tcpd1XkpVA4tQx0eBuFH2hu92rV&s=10',
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
    imagem: 'https://www.malfattiimoveis.com.br/uploads/imovel/galeria/big-b60cec4e64d09283511ba30c4fbb5946.jpg',
    descricao:
      'Centro comunitário com pátio central e espaços flexíveis para educação, esporte e lazer.',
  },
]

export const getProjetoById = (id) =>
  projetos.find((p) => String(p.id) === String(id))
