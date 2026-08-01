import { Calendar, Clock, MapPin, Link } from 'lucide-react';

export function Schedule() {
  const schedule = [
    {
      day: 'Segunda-feira',
      date: '10/08',
      events: [
        {
          time: '09:00 - 12:00',
          title: 'Visita técnica ao Sirius',
          speaker: 'Equipe CNPEM e professor alguém ',
          location: 'Saída do ônibus da FEEC',
          ctaLabel: 'Inscreva-se',
          ctaHref: 'https://forms.gle/yDHLMRQi997iJ1rX6',
        },
        {
          time: '13:00 - 14:30',
          title: 'Palestra Cadence',
          speaker: 'Líder global em software de engenharia, automação de projetos eletrônicos e análise de sistemas inteligentes, fornecendo ferramentas avançadas para criar chips, placas de circuito impresso e sistemas eletromecânicos complexos',
          website: 'https://www.cadence.com/en_US/home.html',
          location: 'FE13 - FEEC',
        },
        {
          time: '15:00 - 16:00',
          title: 'Palestra Radaz',
          speaker: 'Empresa especializada em desenvolvimento de Radar de Sensoriamento Remoto, oferecendo o radar de banda tripla, interferométrico, polarimétrico e transportado por drone mais avançado do mercado.',
          website: 'https://www.radaz.com.br',
          location: 'FE13',
        },
        {
          time: '18:00 - 19:30',
          title: 'Palestra de Abertura',
          speaker: '',
          location: 'PE11',
        },
      ],
    },
    {
      day: 'Terça-feira',
      date: '16/09',
      events: [
        {
          time: '12:00 - 15:30',
          title: 'Enterprise Day',
          speaker: 'Parceria com a SECOMP!',
          location: 'COMVEST',
        },
        {
          time: '16:00 - 17:00',
          title: 'Palestra Tractian',
          speaker: 'Monitora máquinas industriais em tempo real, prevê falhas mecânicas e gerencia a manutenção de fábricas. Faz isso combinando sensores inteligentes (IoT), inteligência artificial e um software de gestão (CMMS)',
          website: 'https://tractian.com',
          location: 'FE03',
        },
        {
          time: '19:30 - 21:00',
          title: 'Roda de conversa com Ex-Alunas',
          speaker: 'Verônica, Isabella Bigatto, Vitória Reinoso',
          location: 'PE12',
        },
      ],
    },
    {
      day: 'Quarta-feira',
      date: '17/09',
      events: [
        {
          time: '10:00 - 11:00',
          title: 'Roda de Conversa - Professores',
          speaker: 'Eng. Carlos Oliveira - CPFL',
          location: 'Auditório Principal',
        },
        {
          time: '19:30 - 21:00',
          title: 'Roda de conversa com Ex-Alunos',
          speaker: 'Caio Franchi, Heron Fontana, Daneil Nagamini',
          location: 'PE12',
        },
      ],
    },
    {
      day: 'Quinta-feira',
      date: '18/09',
      events: [
        {
          time: '09:00 - 12:00',
          title: 'Visita CCSNano',
          speaker: 'Prof Dr. José Alexandre Diniz',
          location: ' R. João Pandiá Calógeras, 90 - Cidade Universitária, Campinas - SP, 13083-870',
          ctaLabel: 'Inscreva-se',
          ctaHref: '#inscricoes',
        },
        {
          time: '15:00 - 16:30',
          title: 'Palestra Siemens Energy',
          speaker: 'Uma das principais empresas de tecnologia de energia do mundo. A companhia trabalha com seus clientes e parceiros em sistemas de energia para o futuro, apoiando assim a transição para um mundo mais sustentável.',
          location: 'FE03',
        },
        {
          time: '19:30 - 21:00',
          title: 'Roda de conversa com Ex-Alunos',
          speaker: 'Caio Miike, Everton Nadlin, Renan Ribeiro Cunha',
          location: 'PE12',
        },
      ],
    },
    {
      day: 'Sexta-feira',
      date: '19/09',
      events: [
        {
          time: '10:00 - 11:00',
          title: 'Palestra HwiT',
          speaker: 'Desenvolve e fabrica produtos de alta tecnologia em hardware, atuando em fotônica coerente, design de ASICs e sistemas eletrônicos complexos',
          website: 'https://hwit.com.br',
          location: 'FE03',
        },
        {
          time: '14:00 - 16:30',
          title: 'Visita Técnica à HwiT',
          speaker: 'Prof. Ana Costa - Unicamp',
          location: 'Laboratório 3',
          ctaLabel: 'Inscreva-se',
          ctaHref: '#https://forms.gle/o8NwVUrHVQDZNX326',
        },
        {
          title: 'Cerimônia de Encerramento',
        },
      ],
    },
  ];

  return (
    <section id="programacao" className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Programação</h2>
          <p className="text-lg text-muted-foreground">
            Confira a programação completa da semana
          </p>
        </div>

        <div className="space-y-8">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4">
                <div className="flex items-center gap-3">
                  <Calendar size={24} />
                  <div>
                    <h3>{day.day}</h3>
                    <p className="text-sm opacity-90">{day.date}</p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-border">
                {day.events.map((event, eventIndex) => {
                  const eventLink = event.website ?? event.ctaHref;
                  const linkLabel = event.ctaLabel ?? 'Acessar link';
                  const isExternalLink = typeof eventLink === 'string' && eventLink.startsWith('http');

                  return (
                    <div key={eventIndex} className="p-6 hover:bg-accent/5 transition-colors">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground min-w-[140px]">
                          <Clock size={16} />
                          <span className="text-sm">{event.time}</span>
                        </div>

                        <div className="flex-1">
                          <h4 className="mb-1">{event.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{event.speaker}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin size={14} />
                            <span>{event.location}</span>
                          </div>
                          {eventLink && (
                            <a
                              href={eventLink}
                              target={isExternalLink ? '_blank' : undefined}
                              rel={isExternalLink ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
                            >
                              <Link size={16} />
                              {linkLabel}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
