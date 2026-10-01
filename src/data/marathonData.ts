export interface Wave {
  waveNumber: string;
  name: string;
  dateRange: string;
  startDate: string;
  endDate: string;
  hours: string;
  note?: string;
}

export interface DistanceInfo {
  id: '21k' | '42k' | 'desafio' | '10k' | '5k';
  name: string;
  distance: string;
  highlight: string;
  hasLottery: boolean;
  shirtRule: string;
  prices: {
    standard: number;
    withShirt?: number;
    withoutShirt?: number;
    sponsorPreSale?: number;
    pcdWithShirt?: number;
    pcdWithoutShirt?: number;
    coachWithShirt?: number;
    coachWithoutShirt?: number;
    foreignersUSD?: number;
  };
  registrationPeriod?: {
    start: string;
    end: string;
    formatted: string;
  };
  keyDates: {
    sponsorDate?: string;
    coachDate?: string;
    pcdDate?: string;
    foreignersDate?: string;
    luckyNumberDate?: string;
    resultsDate?: string;
    generalPublicDate?: string;
    raspaDoTachoDate: string;
  };
  waves?: Wave[];
  kitDetails?: string[];
  importantNotes: string[];
  bannerImage: string;
  badge?: string;
}

export interface ProfileCategory {
  profile: string;
  race: string;
  entryMethod: string;
  lottery: 'Sim' | 'Não' | 'No';
  shirt: 'Com' | 'Com/Sem' | 'Definido pela organização' | 'Yes/No';
  openDate: string;
  notes: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const MARATHON_DATA = {
  edition: 'Edição Especial 25 Anos',
  eventName: 'Maratona do Rio 2027',
  organizer: 'Buzzini Assessoria Esportiva',
  officialPlatform: 'GO DREAM (www.godream.com.br)',
  lastManualUpdate: '30/09/2026',
  motto: 'RIO 2027 JÁ COMEÇOU! 🧡',

  images: {
    logo25Anos: '/manual/logo_rio_25anos.png',
    logoRioWhite: '/manual/logo_maratona_rio_white.png',
    heroSunset: '/manual/page_1_img_1.jpeg',
    aterroFlamengo: '/manual/page_6_img_1.jpeg',
    copacabanaAerial: '/manual/page_7_img_1.jpeg',
    nightStart: '/manual/page_11_img_1.jpeg',
    copacabanaSidewalk: '/manual/page_16_img_1.jpeg',
    corcovadoRunners: '/manual/page_22_img_1.jpeg',
    sunsetBeach: '/manual/page_24_img_1.jpeg',
    finishCrowd: '/manual/page_27_img_1.jpeg',
  },

  whatChanged: [
    {
      title: 'Períodos Não Simultâneos',
      desc: 'Cada distância terá seu próprio período exclusivo de inscrição, começando pelos 42K e depois 21K, Desafio, 10K e 5K.',
    },
    {
      title: 'Sorteio apenas para 21K e 42K',
      desc: 'As provas de 5K, 10K e o Desafio 21K+42K serão via venda direta na GO DREAM, sem necessidade de sorteio.',
    },
    {
      title: 'Combos Promocionais 5K & 10K',
      desc: 'Atletas sorteados nos 21K e 42K (e inscritos no Desafio) poderão garantir 5K (R$149) e/ou 10K (R$169) sem camisa no ato da inscrição como item extra com desconto.',
    },
    {
      title: 'Kit com Camisa Obrigatória',
      desc: 'Todas as inscrições de 42K e do Desafio 21K+42K serão obrigatoriamente COM camisa oficial da prova.',
    },
    {
      title: 'Assessorias Esportivas',
      desc: 'Terão lotes exclusivos acordados com a organização, com opções COM e SEM camisa (vagas exclusivas para alunos matriculados).',
    },
    {
      title: 'Ondas Rápidas de 48 Horas',
      desc: 'As ondas de compra dos sorteados têm duração média de apenas 48 horas (das 12h do primeiro dia às 23h59 do segundo). Perdeu o prazo, perdeu a vaga!',
    },
  ],

  distances: {
    '21k': {
      id: '21k',
      name: 'Meia Maratona do Rio 2027',
      distance: '21 KM',
      highlight: 'Abertura de Inscrições Iminente - Foco Total da Buzzini!',
      badge: 'Foco Iminente',
      hasLottery: true,
      shirtRule: 'Todas as inscrições do sorteio incluem camisa oficial.',
      prices: {
        standard: 349,
        withShirt: 349,
        withoutShirt: 309,
        sponsorPreSale: 279.2,
        coachWithShirt: 349,
        coachWithoutShirt: 309,
        pcdWithShirt: 174.5,
        pcdWithoutShirt: 154.5,
        foreignersUSD: 140,
      },
      registrationPeriod: {
        start: '2026-11-09',
        end: '2026-11-18',
        formatted: '09/11 a 18/11/2026',
      },
      keyDates: {
        sponsorDate: '20/10 a 23/10/2026 (ou esgotar)',
        coachDate: '24/10 a 07/11/2026',
        pcdDate: '24/10/2026',
        luckyNumberDate: '25/11/2026',
        resultsDate: '27/11/2026',
        foreignersDate: '16/11/2026',
        raspaDoTachoDate: 'Dezembro de 2026',
      },
      waves: [
        {
          waveNumber: '1ª Onda',
          name: 'Primeira Convocação',
          dateRange: '30/11 até 01/12/2026',
          startDate: '2026-11-30',
          endDate: '2026-12-01',
          hours: 'Abre às 12h e encerra às 23h59 do dia 01/12',
          note: 'Primeiros colocados na Loteria Federal.',
        },
        {
          waveNumber: '2ª Onda',
          name: 'Segunda Convocação',
          dateRange: '03/12 até 04/12/2026',
          startDate: '2026-12-03',
          endDate: '2026-12-04',
          hours: 'Abre às 12h e encerra às 23h59 do dia 04/12',
          note: 'Vagas restantes da 1ª onda (não pagas).',
        },
        {
          waveNumber: '3ª Onda',
          name: 'Terceira Convocação',
          dateRange: '08/12 até 09/12/2026',
          startDate: '2026-12-08',
          endDate: '2026-12-09',
          hours: 'Abre às 12h e encerra às 23h59 do dia 09/12',
          note: 'Condicionada à disponibilidade de vagas remanescentes.',
        },
        {
          waveNumber: 'Última Onda',
          name: 'Chamada Final',
          dateRange: '11/12 até 14/12/2026',
          startDate: '2026-12-11',
          endDate: '2026-12-14',
          hours: 'Abre às 12h e encerra às 23h59 do dia 14/12',
          note: 'Última janela regular de compras pelo sorteio.',
        },
      ],
      importantNotes: [
        'Sorteio definido com base na Loteria Federal de 25/11/2026.',
        'Atletas 60+ anos e brasileiros residentes no exterior passam pelo sorteio normalmente.',
        'No ato da compra, você pode adicionar 5K (R$149) e/ou 10K (R$169) sem camisa pelo preço promocional!',
      ],
      bannerImage: '/manual/page_7_img_1.jpeg',
    } as DistanceInfo,

    'desafio': {
      id: 'desafio',
      name: 'Desafio Cidade Maravilhosa 21K + 42K',
      distance: 'DESAFIO 21K + 42K',
      highlight: 'A Experiência Mais Exclusiva dos 25 Anos • Inscrição Direta Sem Sorteio!',
      badge: 'Super Exclusivo',
      hasLottery: false,
      shirtRule: 'Kit Mais Completo da Edição com 2 Camisas Inclusas.',
      prices: {
        standard: 790,
        withShirt: 790,
        sponsorPreSale: 632, // R$790 - 20%
        coachWithShirt: 790,
        pcdWithShirt: 395, // 50%
        foreignersUSD: 300,
      },
      keyDates: {
        sponsorDate: '14/10 a 16/10/2026 (ou esgotar)',
        coachDate: '15/10/2026',
        generalPublicDate: '15/10/2026',
        pcdDate: '15/10/2026',
        foreignersDate: '15/10/2026',
        raspaDoTachoDate: 'Dezembro de 2026',
      },
      kitDetails: [
        '2 Camisas Exclusivas do Desafio',
        '2 Números de Peito Oficiais',
        '2 Pares de Meia Exclusivos do Desafio',
        '1 Toalha Exclusiva da Edição 25 Anos',
        '3 Medalhas ao final: Medalha 21K, Medalha 42K e a Cobiçada Medalha do Desafio!',
      ],
      importantNotes: [
        'NÃO TEM SORTEIO! Inscrição 100% direta via GO DREAM.',
        'Possibilidade de adicionar 5K (R$149) e/ou 10K (R$169) sem camisa no ato da inscrição.',
        'Vagas extremamente disputadas devido ao limite de inscritos.',
      ],
      bannerImage: '/manual/page_16_img_1.jpeg',
    } as DistanceInfo,

    '42k': {
      id: '42k',
      name: 'Maratona do Rio 2027',
      distance: '42 KM',
      highlight: 'A Prova Rainha • Etapa de Ondas de Compra em Andamento',
      badge: '42 KM Oficial',
      hasLottery: true,
      shirtRule: 'Todas as inscrições incluem camisa oficial.',
      prices: {
        standard: 359,
        withShirt: 359,
        sponsorPreSale: 287.2,
        coachWithShirt: 359,
        pcdWithShirt: 179.5,
        foreignersUSD: 140,
      },
      registrationPeriod: {
        start: '2026-08-31',
        end: '2026-09-13',
        formatted: '31/08 a 13/09/2026',
      },
      keyDates: {
        coachDate: '17/08 a 30/08/2026',
        sponsorDate: '14/09 a 17/09/2026',
        pcdDate: '18/09/2026',
        foreignersDate: '18/09/2026',
        luckyNumberDate: '24/09/2026',
        resultsDate: '25/09/2026',
        raspaDoTachoDate: 'Dezembro de 2026',
      },
      waves: [
        {
          waveNumber: '1ª Onda',
          name: 'Primeira Convocação',
          dateRange: '28/09 a 29/09/2026',
          startDate: '2026-09-28',
          endDate: '2026-09-29',
          hours: 'Abriu às 12h e encerrou às 23h59 de 29/09',
          note: 'Encerrada.',
        },
        {
          waveNumber: '2ª Onda',
          name: 'Segunda Convocação',
          dateRange: '01/10 a 02/10/2026',
          startDate: '2026-10-01',
          endDate: '2026-10-02',
          hours: 'Abre às 12h e encerra às 23h59 de 02/10',
          note: 'Ativa agora para quem foi contemplado!',
        },
        {
          waveNumber: '3ª Onda',
          name: 'Terceira Convocação',
          dateRange: '06/10 a 07/10/2026',
          startDate: '2026-10-06',
          endDate: '2026-10-07',
          hours: 'Abre às 12h e encerra às 23h59 de 07/10',
          note: 'Abre se restarem vagas não pagas.',
        },
        {
          waveNumber: 'Última Onda',
          name: 'Chamada Final',
          dateRange: '09/10 a 13/10/2026',
          startDate: '2026-10-09',
          endDate: '2026-10-13',
          hours: 'Abre às 12h e encerra às 23h59 de 13/10',
          note: 'Última chance do sorteio regular.',
        },
      ],
      importantNotes: [
        'Sorteio definido com base na Loteria Federal de 24/09/2026.',
        'Atletas 60+ anos e residentes no exterior passam pelo sorteio normalmente.',
        'Consulta pelo link oficial: maratonadorio.com.br/pt/busca-sorteio-42k',
      ],
      bannerImage: '/manual/page_11_img_1.jpeg',
    } as DistanceInfo,

    '10k': {
      id: '10k',
      name: 'Corrida 10K do Rio 2027',
      distance: '10 KM',
      highlight: 'Inscrição Direta Sem Sorteio em Janeiro/2027',
      badge: 'Sem Sorteio',
      hasLottery: false,
      shirtRule: 'Camisa Opcional (Com ou Sem Camisa).',
      prices: {
        standard: 219,
        withoutShirt: 179,
        withShirt: 219,
        sponsorPreSale: 175.2,
        coachWithShirt: 219,
        coachWithoutShirt: 179,
        pcdWithShirt: 109.5,
        pcdWithoutShirt: 89.5,
        foreignersUSD: 85,
      },
      keyDates: {
        sponsorDate: '12/01 a 14/01/2027 (ou esgotar)',
        coachDate: '19/01/2027',
        generalPublicDate: '19/01/2027',
        pcdDate: '19/01/2027',
        foreignersDate: '19/01/2027',
        raspaDoTachoDate: 'Março de 2027',
      },
      importantNotes: [
        'Venda direta na GO DREAM a partir de R$ 179 (sem camisa) e R$ 219 (com camisa).',
        'Atletas sorteados nos 21k ou 42k puderam garantir o 10k antecipado por R$ 169 sem camisa.',
      ],
      bannerImage: '/manual/page_6_img_1.jpeg',
    } as DistanceInfo,

    '5k': {
      id: '5k',
      name: 'Corrida 5K do Rio 2027',
      distance: '5 KM',
      highlight: 'Inscrição Direta Sem Sorteio em Fevereiro/2027',
      badge: 'Sem Sorteio',
      hasLottery: false,
      shirtRule: 'Camisa Opcional (Com ou Sem Camisa).',
      prices: {
        standard: 199,
        withoutShirt: 159,
        withShirt: 199,
        sponsorPreSale: 159.2,
        coachWithShirt: 199,
        coachWithoutShirt: 159,
        pcdWithShirt: 99.5,
        pcdWithoutShirt: 79.5,
        foreignersUSD: 80,
      },
      keyDates: {
        sponsorDate: '26/01 a 28/01/2027 (ou esgotar)',
        coachDate: '02/02/2027',
        generalPublicDate: '02/02/2027',
        pcdDate: '02/02/2027',
        foreignersDate: '02/02/2027',
        raspaDoTachoDate: 'Março de 2027',
      },
      importantNotes: [
        'Venda direta na GO DREAM a partir de R$ 159 (sem camisa) e R$ 199 (com camisa).',
        'Atletas sorteados nos 21k ou 42k puderam garantir o 5k antecipado por R$ 149 sem camisa.',
      ],
      bannerImage: '/manual/page_22_img_1.jpeg',
    } as DistanceInfo,
  },

  profilesTable: [
    {
      profile: 'Público Geral',
      race: '42K',
      entryMethod: 'GO DREAM',
      lottery: 'Sim',
      shirt: 'Com',
      openDate: 'Cadastro 31/08 - 13/09',
      notes: 'Sorteio Loteria Federal (24/09). Ondas de compra de 48h.',
    },
    {
      profile: 'Público Geral',
      race: '21K',
      entryMethod: 'GO DREAM',
      lottery: 'Sim',
      shirt: 'Com',
      openDate: 'Cadastro 09/11 - 18/11',
      notes: 'Sorteio Loteria Federal (25/11). Ondas de 30/11 a 14/12.',
    },
    {
      profile: 'Público Geral',
      race: 'Desafio 21K+42K',
      entryMethod: 'GO DREAM',
      lottery: 'Não',
      shirt: 'Com',
      openDate: '15/10/2026',
      notes: 'Inscrição direta! Kit mais completo com 2 camisas e 3 medalhas.',
    },
    {
      profile: 'Público Geral',
      race: '10K',
      entryMethod: 'GO DREAM',
      lottery: 'Não',
      shirt: 'Com/Sem',
      openDate: '19/01/2027',
      notes: 'Venda direta. A partir de R$ 179 (sem) e R$ 219 (com).',
    },
    {
      profile: 'Público Geral',
      race: '5K',
      entryMethod: 'GO DREAM',
      lottery: 'Não',
      shirt: 'Com/Sem',
      openDate: '02/02/2027',
      notes: 'Venda direta. A partir de R$ 159 (sem) e R$ 199 (com).',
    },
    {
      profile: 'PCD (Pessoas c/ Deficiência)',
      race: '42k / 21k / 10k / 5k / Desafio',
      entryMethod: 'GO DREAM (Loja PCD)',
      lottery: 'Não',
      shirt: 'Com/Sem',
      openDate: 'Ver por prova',
      notes: '50% de desconto legal com anexo obrigatório de laudo médico no ato.',
    },
    {
      profile: 'Brasileiro Morando Fora / 60+',
      race: '42K / 21K',
      entryMethod: 'GO DREAM',
      lottery: 'Sim',
      shirt: 'Com',
      openDate: 'Igual ao Público Geral',
      notes: 'Passam pelo sorteio normalmente pelas mesmas regras.',
    },
    {
      profile: 'Estrangeiros (Foreigners)',
      race: 'Todas as Provas',
      entryMethod: 'GO DREAM ou Agências Internacionais',
      lottery: 'No',
      shirt: 'Yes/No',
      openDate: 'Conforme Prova (See races)',
      notes: 'Inscrição individual direta sem necessidade de sorteio.',
    },
    {
      profile: 'Aluno de Assessoria (Buzzini)',
      race: 'Todas as Provas',
      entryMethod: 'Assessoria Credenciada',
      lottery: 'Não',
      shirt: 'Definido pela organização',
      openDate: 'Lotes prévios acordados',
      notes: 'Vagas exclusivas para alunos matriculados, com e sem camisa.',
    },
  ] as ProfileCategory[],

  faqs: [
    {
      question: 'Como sei se fui sorteado?',
      answer:
        'Você poderá consultar seu status e número da sorte diretamente no site oficial da Maratona do Rio pelo link maratonadorio.com.br/pt/busca-sorteio-42k (e nos 21k). Além do site, a notificação será enviada por e-mail oficial (emaildamara@maratonadorio.com.br) e publicada nos stories/destaques do Instagram oficial.',
    },
    {
      question: 'Como sei se estou na próxima onda de compra?',
      answer:
        'A mecânica é idêntica: ao consultar seu número ou status na página oficial da prova, o sistema informará se você foi contemplado para a onda ativa e até que dia/horário sua compra estará liberada.',
    },
    {
      question: 'Fui sorteado e minha dupla de treino não, e agora?',
      answer:
        'A recomendação da organização e da Buzzini é: garanta logo a sua inscrição na sua onda de compra! As ondas são curtas (em média 48h) e as vagas remanescentes são repassadas rapidamente. Sua dupla ainda pode ser chamada na 2ª, 3ª ou última onda.',
    },
    {
      question: 'Posso tentar a sorte no sorteio dos 42K e, se não conseguir, tentar nos 21K depois?',
      answer:
        'Com certeza! Os processos de sorteio dos 21K e dos 42K são em períodos completamente separados, o que possibilita ao atleta tentar a sorte nas duas provas sem problemas.',
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer:
        'Na GO DREAM, o pagamento pode ser efetuado via PIX ou Cartão de Crédito em até 12x com juros.',
    },
    {
      question: 'Vou poder trocar a titularidade se algo acontecer (lesão ou viagem)?',
      answer:
        'A organização NÃO permite troca de titularidade para inscrições obtidas via sorteio. Casos específicos de lesão ou problemas graves de saúde poderão ser avaliados individualmente via contato@maratonadorio.com.br. Nos demais lotes (sem sorteio), a troca é permitida mediante pagamento de taxa de serviço.',
    },
    {
      question: 'Onde vejo as camisas oficiais e as medalhas da Edição 25 Anos?',
      answer:
        'O design oficial das camisas e medalhas da edição comemorativa de 25 anos será revelado oficialmente em 2027 nos canais oficiais da Maratona do Rio.',
    },
    {
      question: 'Posso transferir meu número da sorte para outra pessoa?',
      answer:
        'Não! O cadastro no sorteio é estritamente pessoal, intransferível e vinculado ao CPF do atleta.',
    },
  ] as FaqItem[],

  officialChannels: {
    instagram: '@maratonadoriooficial',
    instagramUrl: 'https://www.instagram.com/maratonadoriooficial',
    whatsappChannel: 'https://whatsapp.com/channel/0029Vb8HjdF59PwLrBLHz33N',
    officialEmail: 'emaildamara@maratonadorio.com.br',
    contactEmail: 'contato@maratonadorio.com.br',
    sitePt: 'https://maratonadorio.com.br/pt',
    siteEn: 'https://maratonadorio.com.br/en',
    ticketPlatform: 'https://www.godream.com.br',
    scamWarning:
      'CUIDADO COM GOLPES! A Maratona do Rio nunca enviará e-mails de cobrança por remetentes diferentes de emaildamara@maratonadorio.com.br. Nunca pague links de PIX suspeitos recebidos por WhatsApp de números desconhecidos!',
  },

  steps: [
    {
      number: 1,
      title: 'Cadastro no Sorteio',
      desc: 'Faça seu cadastro gratuito pela GO DREAM dentro da janela oficial da sua prova. É 100% gratuito e não exige cartão imediato.',
      tag: '100% Gratuito',
    },
    {
      number: 2,
      title: 'Número da Sorte',
      desc: 'Receba seu número oficial vinculado ao CPF para concorrer com base na extração da Loteria Federal.',
      tag: 'Loteria Federal',
    },
    {
      number: 3,
      title: 'Classificação Oficial',
      desc: 'A organização divulga no site oficial a lista de classificados e a ordem inicial de chamada.',
      tag: 'Resultado Oficial',
    },
    {
      number: 4,
      title: 'Convocação por Ondas',
      desc: 'Consulte se o seu número foi convocado na 1ª onda ou se você deve aguardar as ondas seguintes.',
      tag: 'Status na Plataforma',
    },
    {
      number: 5,
      title: 'Janela de 48 Horas',
      desc: 'Cada onda dura em média apenas 48 horas (das 12h do dia de abertura às 23h59 do encerramento).',
      tag: 'Apenas 48 Horas',
    },
    {
      number: 6,
      title: 'Compra na GO DREAM',
      desc: 'Acesse a ticketeira oficial, garanta seus itens extras (5K/10K com desconto se desejar) e conclua via Pix ou Cartão!',
      tag: 'Inscrição Confirmada',
    },
  ],

  additionalDistances: [
    {
      distance: '5 KM',
      price: 149,
      description: 'Sem camisa inclusa. Não passa por sorteio geral!',
      rule: 'Atletas sorteados para 21km ou 42km poderão adicionar no momento da compra da sua vaga, conforme disponibilidade da organização.',
    },
    {
      distance: '10 KM',
      price: 169,
      description: 'Sem camisa inclusa. Não passa por sorteio geral!',
      rule: 'Atletas sorteados para 21km ou 42km poderão adicionar no momento da compra da sua vaga, conforme disponibilidade da organização.',
    },
  ],

  raspaDoTacho: {
    title: '“Raspa do Tacho” - O Que É?',
    period: 'Dezembro de 2026 (21k/42k/Desafio) e Março de 2027 (5k/10k)',
    description:
      'Possíveis vagas que voltam para venda provenientes de cancelamentos, pagamentos não compensados (boletos/PIX expirados) ou desistências.',
    warning:
      'Esta etapa NÃO É GARANTIDA pela organização. O valor da inscrição e a disponibilidade de kit/camiseta podem ser diferentes das condições do sorteio oficial.',
  },

  coachOrientation: {
    title: 'Nossa Orientação Buzzini',
    subtitle: 'Planejamento estratégico para garantir sua vaga na Edição Especial 25 Anos',
    keyDates21k: [
      { date: '09/11/2026', label: 'Abertura do Cadastro (21k)', icon: 'alarm', critical: true },
      { date: '18/11/2026', label: 'Encerramento do Cadastro (21k)', icon: 'alarm', critical: true },
      { date: '25/11/2026', label: 'Divulgação do Número da Sorte', icon: 'ticket', critical: false },
      { date: '27/11/2026', label: 'Classificação dos Sorteados', icon: 'check', critical: true },
      { date: '30/11/2026', label: 'Início da 1ª Onda de Compras', icon: 'flag', critical: true },
    ],
    advice: [
      'Coloque alarmes no celular para o dia 09/11 logo cedo para não esquecer de cadastrar.',
      'Acompanhe os avisos no grupo do WhatsApp da Buzzini — vamos notificar a cada etapa.',
      'Tenha em mãos os dados de login da GO DREAM e limite no cartão de crédito ou chave Pix pronta para a hora da compra.',
      'Lembre-se: ser sorteado NÃO é garantia de vaga se você não pagar dentro da sua onda!',
    ],
  },
};

