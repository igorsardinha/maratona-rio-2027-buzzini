/**
 * Utility to generate and download an iCalendar (.ics) file with key dates
 */
export function downloadMarathonCalendar() {
  const events = [
    {
      title: '🏃 Buzzini: Abertura Cadastro Sorteio 21km Maratona do Rio 2027',
      start: '20261109T090000Z',
      end: '20261109T180000Z',
      description: 'Abertura do cadastro gratuito para o sorteio dos 21km na GO DREAM. Cadastro não garante a vaga!',
    },
    {
      title: '🚨 Buzzini: ÚLTIMO DIA Cadastro 21km Maratona do Rio 2027',
      start: '20261118T090000Z',
      end: '20261118T235900Z',
      description: 'Encerramento do cadastro do sorteio dos 21km. Não deixe para a última hora!',
    },
    {
      title: '🎟️ Buzzini: Divulgação Número da Sorte 21km Rio 2027',
      start: '20261125T100000Z',
      end: '20261125T180000Z',
      description: 'Consulte seu número da sorte na GO DREAM e guarde para o sorteio.',
    },
    {
      title: '✅ Buzzini: Divulgação dos Sorteados 21km Rio 2027',
      start: '20261127T100000Z',
      end: '20261127T180000Z',
      description: 'Confira sua classificação oficial na GO DREAM e veja em qual onda você foi convocado!',
    },
    {
      title: '🔥 Buzzini: Início da 1ª Onda de Compras 21km Rio 2027',
      start: '20261130T090000Z',
      end: '20261201T235900Z',
      description: 'Prazo da 1ª Onda (30/11 a 01/12). Acesse a GO DREAM e efetue o pagamento de R$359!',
    },
  ];

  let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Buzzini Assessoria//Maratona do Rio 2027//PT-BR
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Maratona do Rio 2027 - Buzzini
X-WR-TIMEZONE:America/Sao_Paulo
`;

  events.forEach((ev, idx) => {
    icsContent += `BEGIN:VEVENT
UID:buzzini-rio2027-${idx}-${Date.now()}@buzzini.com.br
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${ev.start}
DTEND:${ev.end}
SUMMARY:${ev.title}
DESCRIPTION:${ev.description}
STATUS:CONFIRMED
END:VEVENT
`;
  });

  icsContent += 'END:VCALENDAR';

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'buzzini-maratona-rio-2027.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
