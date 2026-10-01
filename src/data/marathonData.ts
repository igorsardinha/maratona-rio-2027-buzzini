export interface Wave {
  waveNumber: string;
  name: string;
  dateRange: string;
  startDate: string;
  endDate: string;
  note?: string;
}

export interface DistanceInfo {
  id: '21k' | '42k';
  name: string;
  distance: string;
  highlight: string;
  price: number;
  shirtIncluded: boolean;
  registrationPeriod: {
    start: string;
    end: string;
    formatted: string;
  };
  luckyNumberDate: string;
  resultsDate: string;
  waves: Wave[];
  platform: string;
  platformUrl?: string;
  importantNotes: string[];
}

export const MARATHON_DATA = {
  year: 2027,
  eventName: 'Maratona do Rio 2027',
  organizer: 'Buzzini Assessoria Esportiva',
  motto: 'RIO 2027 JÁ COMEÇOU! 🧡',
  primaryColor: '#ee5e2d',
  
  distances: {
    '21k': {
      id: '21k',
      name: 'Meia Maratona do Rio 2027',
      distance: '21 KM',
      highlight: 'Abertura de Inscrições Iminente - Foco Total!',
      price: 359,
      shirtIncluded: true,
      registrationPeriod: {
        start: '2026-11-09',
        end: '2026-11-18',
        formatted: '09/11 a 18/11/2026',
      },
      luckyNumberDate: '25/11/2026',
      resultsDate: '27/11/2026',
      platform: 'GO DREAM (Plataforma Oficial)',
      platformUrl: 'https://godream.com.br',
      waves: [
        {
          waveNumber: '1ª Onda',
          name: 'Primeira Convocação',
          dateRange: '30/11 até 01/12/2026',
          startDate: '2026-11-30',
          endDate: '2026-12-01',
          note: 'Primeiros colocados do sorteio geral.',
        },
        {
          waveNumber: '2ª Onda',
          name: 'Segunda Convocação',
          dateRange: '03/12 até 04/12/2026',
          startDate: '2026-12-03',
          endDate: '2026-12-04',
          note: 'Caso existam vagas restantes da 1ª onda.',
        },
        {
          waveNumber: '3ª Onda',
          name: 'Terceira Convocação',
          dateRange: '08/12 até 09/12/2026',
          startDate: '2026-12-08',
          endDate: '2026-12-09',
          note: 'Condicionada à disponibilidade de vagas remanescentes.',
        },
        {
          waveNumber: 'Última Onda',
          name: 'Chamada Final',
          dateRange: '11/12 até 14/12/2026',
          startDate: '2026-12-11',
          endDate: '2026-12-14',
          note: 'Última janela de compra regular do sorteio.',
        },
      ],
      importantNotes: [
        'O cadastro na GO DREAM é 100% gratuito e não garante a vaga.',
        'Se for chamado em qualquer onda, você deve efetuar a compra e o pagamento no prazo estipulado.',
        'Perdeu a janela da sua onda? Você perde o direito e a vaga é repassada para o próximo!',
      ],
    } as DistanceInfo,

    '42k': {
      id: '42k',
      name: 'Maratona do Rio 2027',
      distance: '42 KM',
      highlight: 'Etapa de Chamadas e Ondas em Andamento',
      price: 359,
      shirtIncluded: true,
      registrationPeriod: {
        start: '2026-08-31',
        end: '2026-09-13',
        formatted: '31/08 a 13/09/2026',
      },
      luckyNumberDate: '24/09/2026',
      resultsDate: '25/09/2026',
      platform: 'GO DREAM / Maratona do Rio',
      platformUrl: 'https://godream.com.br',
      waves: [
        {
          waveNumber: '1ª Onda',
          name: 'Primeira Convocação',
          dateRange: '28/09 a 29/09/2026',
          startDate: '2026-09-28',
          endDate: '2026-09-29',
          note: 'Encerrada.',
        },
        {
          waveNumber: '2ª Onda',
          name: 'Segunda Convocação',
          dateRange: '01/10 a 02/10/2026',
          startDate: '2026-10-01',
          endDate: '2026-10-02',
          note: 'Em andamento para quem foi convocado!',
        },
        {
          waveNumber: '3ª Onda',
          name: 'Terceira Convocação',
          dateRange: '06/10 a 07/10/2026',
          startDate: '2026-10-06',
          endDate: '2026-10-07',
          note: 'Abre se restarem vagas não pagas.',
        },
        {
          waveNumber: 'Última Onda',
          name: 'Chamada Final',
          dateRange: '09/10 a 13/10/2026',
          startDate: '2026-10-09',
          endDate: '2026-10-13',
          note: 'Última chance de compra pelo sorteio.',
        },
      ],
      importantNotes: [
        'Cadastro encerrado em 13/09/2026.',
        'Atletas com números da sorte chamados devem acessar a plataforma no prazo da sua onda.',
        'Valor com camiseta inclusa: R$ 359.',
      ],
    } as DistanceInfo,
  },

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
    period: 'Dezembro de 2026 (Previsão)',
    description:
      'Possíveis vagas que voltam para venda provenientes de cancelamentos, pagamentos não compensados (boletos vencidos) ou desistências.',
    warning:
      'Esta etapa NÃO É GARANTIDA pela organização. O valor da inscrição e a disponibilidade de kit/camiseta podem ser diferentes das condições do sorteio oficial.',
  },

  steps: [
    {
      number: 1,
      title: 'Cadastro no Sorteio',
      desc: 'Faça o cadastro gratuito na plataforma oficial GO DREAM no período aberto. Isso NÃO garante a inscrição nem exige pagamento imediato.',
      tag: '100% Gratuito',
    },
    {
      number: 2,
      title: 'Recebimento do Número da Sorte',
      desc: 'Cada atleta cadastrado recebe seu número oficial para o sorteio. Guarde e anote o seu número com atenção.',
      tag: 'Identificação',
    },
    {
      number: 3,
      title: 'Divulgação da Classificação',
      desc: 'A organização publica a ordem e lista de atletas contemplados no sorteio.',
      tag: 'Resultado Oficial',
    },
    {
      number: 4,
      title: 'Verificação da Convocação',
      desc: 'Confira se o seu nome/número da sorte foi chamado e em qual onda você se enquadra.',
      tag: 'Atenção aos Grupos',
    },
    {
      number: 5,
      title: 'Atenção à Sua Onda de Compra',
      desc: 'Cada onda tem uma janela estrita de 2 a 4 dias. Se perder a sua onda, a vaga é repassada e não há segunda chance.',
      tag: 'Janela Estrita',
    },
    {
      number: 6,
      title: 'Compra e Pagamento da Vaga',
      desc: 'Acesse a plataforma GO DREAM, confirme seus dados, escolha kits adicionais (se desejar) e efetue o pagamento de R$359.',
      tag: 'Inscrição Confirmada',
    },
  ],

  coachOrientation: {
    title: 'Nossa Orientação Buzzini',
    subtitle: 'Planejamento estratégico para garantir sua vaga na Cidade Maravilhosa',
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
