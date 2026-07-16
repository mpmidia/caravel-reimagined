export type Show = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  tagline: string;
  image: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  quote: string;
  duration?: string;
  classification?: string;
  audience?: string;
  genre?: string;
  highlights?: { title: string; text: string }[];
  credits?: { role: string; name: string }[];
  formats?: { label: string; description: string }[];
  gallery?: string[];
  faq?: { q: string; a: string }[];
  cta?: string;
  driveUrl?: string;
};

export const SHOWS: Show[] = [
  {
    slug: "galatas",
    title: "Gálatas",
    subtitle: "Uma Comédia de Valores",
    year: "2012",
    tagline: "Liberdade, fé e boas risadas num pub à beira do Mar Egeu.",
    image:
      "https://ciaalvo.com.br/wp-content/uploads/2022/09/header-1024x678.jpg",
    intro:
      "Montado em 2012, Gálatas – Uma Comédia de Valores é uma mistura deliciosa de humor, cultura celta e reflexão profunda sobre liberdade e fé. Inspirado na carta de Paulo aos Gálatas — considerada o primeiro texto bíblico reconhecido por toda a cristandade — o espetáculo traz à tona, com leveza e inteligência, a crítica de Paulo ao fundamentalismo religioso e sua defesa apaixonada da liberdade que vem da fé.",
    sections: [
      {
        heading: "Um enredo inusitado, com sotaque irlandês",
        body: [
          "A história se passa na região da Galácia, habitada por um povo de origem celta. Para construir essa ponte entre passado e presente, o espetáculo usa como base a cultura irlandesa, que compartilha raízes com os antigos gálatas — uma escolha que traz um toque contemporâneo, sem perder a força da tradição.",
          "Na trama, Paulo e Silas têm a missão de levar as “Boas Novas” pela Galácia, e no caminho, convidam o jovem Timóteo a se juntar à jornada. O trio faz uma parada inesperada em um Irish Pub na cidade de Trôade, à beira do Mar Egeu, onde encontram os irreverentes Brenno e Brienna. A partir daí, tudo pode acontecer — e acontece!",
        ],
      },
      {
        heading: "Música, cor e muita irreverência",
        body: [
          "Com figurinos vibrantes, cenas cômicas e uma trilha sonora que passeia entre o sacro erudito e as alegres valsas folclóricas irlandesas, Gálatas entrega ao público uma experiência teatral única: profunda, divertida e surpreendente.",
          "O espetáculo transforma conceitos teológicos em situações vivas e acessíveis, convidando o público a pensar sobre o que realmente significa viver em liberdade — e como, muitas vezes, somos nós mesmos que criamos as prisões.",
        ],
      },
    ],
    quote: "Porque rir também é uma forma de aprender — e de libertar.",
    duration: "60 min",
    classification: "Livre",
    audience: "Toda a família, jovens e adultos",
    genre: "Comédia dramática com música ao vivo",
    highlights: [
      { title: "Cultura celta em cena", text: "Figurinos, danças e trilha inspirados nas raízes irlandesas que dialogam com os antigos gálatas." },
      { title: "Humor com profundidade", text: "Uma comédia que faz rir e provoca reflexão sobre liberdade e fé." },
      { title: "Trilha ao vivo", text: "Do sacro erudito às valsas folclóricas — música executada em cena." },
    ],
    credits: [
      { role: "Texto e direção", name: "Cia Alvo" },
      { role: "Inspiração bíblica", name: "Carta aos Gálatas" },
      { role: "Ambientação", name: "Irish Pub em Trôade, à beira do Mar Egeu" },
    ],
    formats: [
      { label: "Palco italiano", description: "Montagem completa com cenário, figurino e trilha ao vivo." },
      { label: "Arena / igreja", description: "Adaptação para espaços não convencionais preservando a experiência." },
    ],
    faq: [
      { q: "Qual é a duração?", a: "Aproximadamente 60 minutos, sem intervalo." },
      { q: "Precisa de estrutura especial?", a: "Nos adaptamos ao seu espaço — envie a planta e conversamos sobre o rider técnico." },
      { q: "Serve para o público infantil?", a: "É classificação livre; o humor conquista adultos e adolescentes especialmente." },
    ],
    cta: "Traga Gálatas para o seu palco",
  },
  {
    slug: "efeso",
    title: "Éfeso",
    subtitle: "O Regresso ao Primeiro Amor",
    year: "2014",
    tagline: "Uma batalha épica entre razão, fé e amor.",
    image:
      "https://ciaalvo.com.br/wp-content/uploads/2022/09/02-IMAGEM-TEXTO-BIBLICOS-1024x683.jpg",
    intro:
      "Montado originalmente em 2014, Éfeso – O Regresso ao Primeiro Amor é um espetáculo intenso e provocador, que transporta o público a uma jornada épica em pleno século XI, onde batalhas físicas e espirituais se entrelaçam em uma montagem contemporânea, repleta de simbolismo, ação e reflexão. Com uma narrativa enxuta e impactante — em apenas 50 minutos de duração — a peça questiona: o que acontece quando a espada se choca com a fé? Quando a tradição encontra o amor revelado na cruz?",
    sections: [
      {
        heading: "A história",
        body: [
          "A trama se passa em meio às Cruzadas. Um grupo de guerreiros liderado por Jean de Clermont parte rumo a Jerusalém com a missão de retomar a Terra Prometida. No caminho, juntam-se a eles Heitor e seus companheiros cristãos da comunidade de Éfeso.",
          "Ao chegarem à cidade sagrada, surge um impasse: parte dos cristãos se recusa a aceitar a violência como meio de conquista, colocando em xeque os fundamentos da chamada Guerra Santa. De um lado, Jean representa a força da espada e os valores da Igreja Medieval; do outro, Heitor encarna a fé que brota do amor sacrificial de Cristo.",
          "O conflito se intensifica quando Jean, sentindo sua autoridade ameaçada, prende Heitor e o condena como herege. No centro dessa tensão, a peça levanta um dilema profundo: será que a fé pode sobreviver sem amor?",
        ],
      },
      {
        heading: "Um espetáculo que confronta e inspira",
        body: [
          "Com cenas fortes, diálogos filosóficos e simbolismos visuais marcantes, Éfeso – O Regresso ao Primeiro Amor desafia o espectador a refletir sobre os rumos da fé, a força das convicções e a essência do cristianismo. Tudo isso em uma linguagem cênica atual, que mistura o medieval com o contemporâneo, em um cenário de batalha que vai muito além das espadas.",
          "“Éfeso” é um chamado ao retorno à essência — um convite a deixar de lado a religiosidade vazia e reencontrar o verdadeiro amor que transforma.",
        ],
      },
    ],
    quote: "O que acontece quando a espada se choca com a fé?",
    duration: "50 min",
    classification: "12 anos",
    audience: "Jovens e adultos",
    genre: "Drama épico contemporâneo",
    highlights: [
      { title: "Estética medieval-contemporânea", text: "Cenário de batalha, simbolismos visuais e coreografias de combate." },
      { title: "Diálogos filosóficos", text: "Um confronto entre a força da espada e a fé que nasce do amor." },
      { title: "Formato enxuto", text: "50 minutos intensos, ideais para temporadas e circulação." },
    ],
    credits: [
      { role: "Direção", name: "Cia Alvo" },
      { role: "Inspiração bíblica", name: "Carta aos Efésios / Apocalipse 2" },
      { role: "Ambientação", name: "Cruzadas — século XI" },
    ],
    formats: [
      { label: "Teatro convencional", description: "Ideal para caixas pretas e teatros com pé-direito para as cenas de combate." },
      { label: "Espaços alternativos", description: "Versão itinerante para pátios, igrejas e centros culturais." },
    ],
    faq: [
      { q: "Contém cenas de violência?", a: "Há coreografias de combate estilizadas, sem realismo gráfico." },
      { q: "Qual o tamanho do elenco?", a: "Elenco itinerante compacto — enviamos rider e mapa de luz sob demanda." },
    ],
    cta: "Contratar Éfeso",
  },
  {
    slug: "guardadoemsilencio",
    title: "Guardado em Silêncio",
    subtitle: "Memória, culpa e redenção",
    year: "2018",
    tagline: "Quando a memória grita e o silêncio cobra respostas.",
    image:
      "https://ciaalvo.com.br/wp-content/uploads/2022/09/guardado04.jpg",
    intro:
      "Montado em 2018, o espetáculo Guardado em Silêncio propõe uma imersão sensível e profunda nas cicatrizes deixadas pelo regime nazista — e nas marcas que o silêncio pode carregar. A partir da “Noite dos Cristais Quebrados”, em 1939, a peça resgata fragmentos de uma memória assombrada: a de um soldado alemão que, passivamente, vê sua vizinha e amiga de infância ser levada por soldados por ser judia. Mais do que um retrato histórico, Guardado em Silêncio é uma reflexão potente sobre as omissões do passado e os silêncios do presente — aqueles que evitamos, mas que continuam vivos, pedindo por respostas.",
    sections: [
      {
        heading: "A história",
        body: [
          "O protagonista é um soldado alemão, prisioneiro das próprias lembranças. A peça acompanha sua mente fragmentada, mergulhada na culpa, na dúvida e no remorso. Ele assiste, impotente, à violência contra pessoas que conhecia e amava — e, com o passar do tempo, o silêncio de sua omissão se torna ensurdecedor.",
          "No meio desse turbilhão, surgem ecos inesperados de uma antiga carta escrita por Paulo aos Romanos. Palavras como arrependimento e mudança de mente começam a reverberar dentro dele. Teria ele uma chance de redenção? Até onde é possível transformar a trajetória marcada por escolhas erradas?",
        ],
      },
      {
        heading: "Um espetáculo sobre consciência, culpa e transformação",
        body: [
          "Com uma linguagem poética e impactante, Guardado em Silêncio convida o espectador a revisitar um dos períodos mais sombrios da história da humanidade — mas não para repetir o passado, e sim para enfrentá-lo. O espetáculo questiona: o que acontece quando decidimos encarar o que calamos por tanto tempo? É possível que até mesmo o silêncio possa ser redimido?",
          "Guardado em Silêncio é um chamado à consciência. Uma lembrança de que, mesmo nas trevas, há espaço para luz — e que a mudança começa quando deixamos de nos calar.",
        ],
      },
    ],
    quote: "Mesmo nas trevas, há espaço para luz.",
    duration: "55 min",
    classification: "14 anos",
    audience: "Jovens e adultos",
    genre: "Drama histórico com forte carga simbólica",
    highlights: [
      { title: "Memória sensível", text: "Uma imersão nas marcas deixadas pela Noite dos Cristais Quebrados." },
      { title: "Reflexão sobre a omissão", text: "Convite a encarar os silêncios que ainda carregamos hoje." },
      { title: "Linguagem poética", text: "Cena, som e imagem tecidos com delicadeza e potência." },
    ],
    credits: [
      { role: "Direção", name: "Cia Alvo" },
      { role: "Inspiração bíblica", name: "Carta aos Romanos" },
      { role: "Contexto histórico", name: "Alemanha, 1939" },
    ],
    formats: [
      { label: "Palco tradicional", description: "Montagem completa com projeções e trilha desenhada." },
      { label: "Círculo de conversa", description: "Sessão com mediação e bate-papo após a apresentação." },
    ],
    faq: [
      { q: "É adequado para escolas?", a: "Sim, especialmente ensino médio — oferecemos material pedagógico e mediação." },
      { q: "Aborda a religião de forma direta?", a: "A espiritualidade aparece como caminho de redenção, sem discurso doutrinário." },
    ],
    cta: "Levar Guardado em Silêncio ao seu público",
  },
  {
    slug: "meupequenouniverso",
    title: "Meu Pequeno Universo",
    subtitle: "Espetáculo infantil",
    year: "2020",
    tagline: "Uma aventura cósmica sobre criação, curiosidade e cuidado.",
    image:
      "https://ciaalvo.com.br/wp-content/uploads/2025/05/pag-espetaculos-meu-pequeno-universo-1024x576.jpg",
    intro:
      "Montado em 2020, o espetáculo infantil Meu Pequeno Universo transporta o público para um laboratório fantástico, onde tudo é possível e a imaginação ganha vida. Nesse espaço mágico, a mente de um grande arquiteto e seu filho se unem para projetar um novo universo — um lugar cheio de beleza, ordem e propósito. Mas algo inesperado acontece: um personagem misterioso decide bagunçar tudo, tirando as coisas do lugar e ameaçando destruir o que era bom. Motivado pelo amor à criação do pai, o jovem Stephen decide embarcar numa missão audaciosa: entrar no Pequeno Universo e tentar mudar o rumo da história.",
    sections: [
      {
        heading: "Uma jornada lúdica e inspiradora",
        body: [
          "Com música ao vivo, visual criativo e linguagem adaptada ao público infantil, Meu Pequeno Universo estimula a imaginação e o senso crítico das crianças, enquanto convida toda a família a refletir sobre temas como origem, responsabilidade e pertencimento.",
          "Ao longo da peça, Stephen se depara com perguntas sobre o começo de tudo, descobre o poder da curiosidade e aprende que até mesmo os menores gestos podem transformar o mundo ao redor.",
        ],
      },
      {
        heading: "Teatro, ciência e afeto",
        body: [
          "Meu Pequeno Universo é mais do que um espetáculo: é uma experiência educativa e sensível que desperta nos pequenos espectadores o desejo de aprender, questionar e cuidar do universo que habitamos — dentro e fora de nós.",
        ],
      },
    ],
    quote: "Porque grandes ideias nascem da curiosidade. E todo pequeno universo pode ser extraordinário.",
    duration: "50 min",
    classification: "Livre",
    audience: "Crianças a partir de 4 anos e famílias",
    genre: "Musical infantil",
    highlights: [
      { title: "Música ao vivo", text: "Canções originais executadas em cena por músicos-atores." },
      { title: "Visual lúdico", text: "Um laboratório fantástico onde tudo pode ganhar vida." },
      { title: "Valores em cena", text: "Curiosidade, responsabilidade, cuidado e pertencimento." },
    ],
    credits: [
      { role: "Direção", name: "Cia Alvo" },
      { role: "Inspiração bíblica", name: "Gênesis — a Criação" },
      { role: "Personagens", name: "Stephen, o arquiteto e o Pequeno Universo" },
    ],
    formats: [
      { label: "Teatro infantil", description: "Sessões abertas com toda a estrutura da montagem." },
      { label: "Escolas e eventos", description: "Adaptação para auditórios escolares e programações de férias." },
    ],
    faq: [
      { q: "A partir de que idade?", a: "Recomendada a partir dos 4 anos; encanta também os adultos." },
      { q: "Tem interação com o público?", a: "Sim, momentos de participação cuidadosamente pensados." },
    ],
    cta: "Levar Meu Pequeno Universo ao seu público",
  },
  {
    slug: "opassageiro",
    title: "O Passageiro",
    subtitle: "Sem palavras, mas com muito a dizer",
    year: "",
    tagline: "Um espetáculo visual sobre fé, caos e o reencontro com a essência.",
    image:
      "https://ciaalvo.com.br/wp-content/uploads/2022/10/meu-pequeno-universo-noticia-peca-cia-alvo.jpg",
    intro:
      "“O Passageiro” é uma experiência cênica única que rompe fronteiras — da linguagem, do tempo e da realidade. Sem usar uma única fala, o espetáculo nos convida a refletir sobre a forma como vivemos em meio ao caos, misturando arte corporal, recursos audiovisuais e música ao vivo em um cenário que parece ser o fim do mundo — ou o começo de algo novo.",
    sections: [
      {
        heading: "Um pregador em meio ao apocalipse",
        body: [
          "Neste universo apocalíptico, marcado pela impiedade e pela hostilidade, surge um pregador. Ele chega à praça com uma mensagem a ser anunciada… mas algo está diferente. O tempo parece ter perdido sua ordem, e o que ele vê diante dos olhos não é tão simples de explicar. Estaria ele testemunhando o fim? Ou vislumbrando uma nova chance?",
        ],
      },
      {
        heading: "Uma experiência sensorial e universal",
        body: [
          "Sem depender de palavras, a obra rompe barreiras culturais e linguísticas, podendo ser compreendida e sentida em qualquer parte do mundo. Com forte expressão corporal dos atores, efeitos visuais e trilha sonora intensa, O Passageiro propõe um teatro universal — acessível, provocador e profundamente humano.",
          "A peça também foi concebida para ir além dos palcos físicos, sendo adaptada para apresentações online, com o objetivo de democratizar o acesso à arte e alcançar públicos em todos os continentes.",
        ],
      },
      {
        heading: "Um espelho para a nossa era",
        body: [
          "O Passageiro levanta um questionamento urgente: estamos vivendo de forma autêntica ou apenas encenando diante do mundo? Em tempos de tanta performance, correria e desconexão, o espetáculo nos convida a recuperar a pureza nas relações, a rever nossas atitudes e a redescobrir o que realmente importa.",
        ],
      },
    ],
    quote: "Uma obra visual. Um grito silencioso. Um convite à introspecção.",
    duration: "45 min",
    classification: "Livre",
    audience: "Todos os públicos — sem barreiras de idioma",
    genre: "Teatro visual, físico e audiovisual",
    highlights: [
      { title: "Sem palavras", text: "Uma dramaturgia contada por corpo, imagem e som." },
      { title: "Universal", text: "Compreensível em qualquer país e cultura." },
      { title: "Versão online", text: "Adaptação para apresentações digitais que ampliam o alcance." },
    ],
    credits: [
      { role: "Concepção", name: "Cia Alvo" },
      { role: "Linguagem", name: "Teatro físico com audiovisual e música ao vivo" },
      { role: "Personagem central", name: "O pregador em meio ao caos" },
    ],
    formats: [
      { label: "Presencial", description: "Palco ou espaço não convencional com projeção." },
      { label: "Online", description: "Versão pensada para transmissão e eventos digitais." },
    ],
    faq: [
      { q: "Precisa de idioma comum?", a: "Não. A peça dispensa palavras e atravessa qualquer cultura." },
      { q: "Serve para eventos corporativos?", a: "Sim — o formato se adapta muito bem a convenções e encontros." },
    ],
    cta: "Receber O Passageiro no seu evento",
  },
  {
    slug: "omundodegael",
    title: "O Mundo de Gael",
    subtitle: "Empatia, descoberta e fé",
    year: "2025",
    tagline: "Uma experiência sensível sobre autismo, inclusão e fé.",
    image:
      "https://ciaalvo.com.br/wp-content/uploads/2025/05/pag-espetaculos-o-mundo-de-gael-1024x683.jpg",
    intro:
      "Estreando em 2025 no Teatro Sérgio Cardoso, a peça “O Mundo de Gael” convida o público a mergulhar em uma história sensível e emocionante que aborda o universo do transtorno do espectro autista (TEA), entrelaçando com delicadeza mensagens e passagens inspiradas em textos bíblicos. Com um roteiro original e uma encenação envolvente, a Cia. reafirma seu compromisso de unir arte, reflexão e espiritualidade — desta vez, através dos olhos de um menino que enxerga o mundo de forma única.",
    sections: [
      {
        heading: "A história",
        body: [
          "Gael é um garoto autista, brilhante, curioso e cheio de imaginação. Apesar de sua inteligência, sente-se deslocado na praça onde outras crianças brincam — o barulho, o ritmo das interações sociais e os estímulos intensos o fazem se recolher em seus próprios pensamentos.",
          "Seu Tato, um senhor bondoso que costuma passar os dias na praça, tenta se aproximar com afeto e paciência, mas muitas vezes não consegue alcançar o que se passa no interior do menino. É então que surge Mestre Engrenaldo — um personagem misterioso e cativante, que aparece nos momentos mais improváveis com desafios curiosos, enigmas criativos e lições profundas. Ele convida Gael a olhar para si mesmo com outros olhos, transformando suas dores em descobertas.",
          "Entre frustrações, encontros e pequenos milagres, Gael embarca em uma jornada de autoconhecimento e fé, aprendendo que há muitas formas de se comunicar, se conectar e caminhar com os outros — mesmo sendo diferente.",
        ],
      },
      {
        heading: "Uma experiência sensível e transformadora",
        body: [
          "“O Mundo de Gael” é mais do que uma peça. É um convite à empatia, à escuta e à valorização das diferenças. Com poesia, humor e emoção, o espetáculo traz à tona importantes reflexões sobre inclusão, amizade, família e espiritualidade — tocando corações de todas as idades.",
        ],
      },
    ],
    quote: "Entender o outro é um ato de fé — e a diferença pode ser um caminho para o amor.",
    duration: "60 min",
    classification: "Livre",
    audience: "Famílias, escolas e comunidades",
    genre: "Drama sensível com humor e poesia",
    highlights: [
      { title: "TEA em cena", text: "Uma história construída com escuta e responsabilidade sobre o autismo." },
      { title: "Personagens marcantes", text: "Gael, Seu Tato e o Mestre Engrenaldo em uma jornada de descobertas." },
      { title: "Sessões acessíveis", text: "Possibilidade de apresentações com adaptações sensoriais." },
    ],
    credits: [
      { role: "Direção", name: "Cia Alvo" },
      { role: "Estreia", name: "Teatro Sérgio Cardoso — 2025" },
      { role: "Consultoria", name: "Diálogo com famílias atípicas e educadores" },
    ],
    formats: [
      { label: "Sessão aberta", description: "Apresentações em teatros para o público em geral." },
      { label: "Sessão acessível", description: "Ambiente com estímulos reduzidos para pessoas neurodivergentes." },
      { label: "Escolas", description: "Circuitos escolares com material pedagógico e roda de conversa." },
    ],
    faq: [
      { q: "É indicado para crianças autistas?", a: "Sim, e oferecemos versão com adaptações sensoriais (som e luz)." },
      { q: "Tem material pedagógico?", a: "Sim, disponibilizamos guia para educadores e responsáveis." },
    ],
    cta: "Agendar O Mundo de Gael",
  },
];

export function getShow(slug: string): Show | undefined {
  return SHOWS.find((s) => s.slug === slug);
}