import { Calendar, Clock, MapPin } from 'lucide-react';

export function Schedule() {
  const schedule = [
    {
      day: 'Segunda-feira',
      date: '15/09',
      events: [
        {
          time: '09:00 - 10:30',
          title: 'Cerimônia de Abertura',
          speaker: 'Diretoria da FEEC',
          location: 'Auditório Principal',
        },
        {
          time: '11:00 - 12:30',
          title: 'Inteligência Artificial na Engenharia Elétrica',
          speaker: 'Dr. João Silva - Google',
          location: 'Sala 301',
        },
        {
          time: '14:00 - 17:00',
          title: 'Workshop: IoT e Sistemas Embarcados',
          speaker: 'Equipe Technical Labs',
          location: 'Laboratório 2',
        },
      ],
    },
    {
      day: 'Terça-feira',
      date: '16/09',
      events: [
        {
          time: '09:00 - 12:00',
          title: 'Hackathon - Fase 1',
          speaker: 'Patrocinadores',
          location: 'Sala de Eventos',
        },
        {
          time: '14:00 - 15:30',
          title: 'Energia Renovável e Sustentabilidade',
          speaker: 'Dra. Maria Santos - ONS',
          location: 'Auditório Principal',
        },
        {
          time: '16:00 - 18:00',
          title: 'Mesa Redonda: Carreira em Tech',
          speaker: 'Painelistas de Diversas Empresas',
          location: 'Sala 301',
        },
      ],
    },
    {
      day: 'Quarta-feira',
      date: '17/09',
      events: [
        {
          time: '09:00 - 10:30',
          title: 'Sistemas de Potência do Futuro',
          speaker: 'Eng. Carlos Oliveira - CPFL',
          location: 'Auditório Principal',
        },
        {
          time: '11:00 - 13:00',
          title: 'Workshop: Machine Learning em Sistemas Elétricos',
          speaker: 'Prof. Ana Costa - Unicamp',
          location: 'Laboratório 3',
        },
        {
          time: '14:00 - 17:00',
          title: 'Feira de Empresas',
          speaker: 'Patrocinadores',
          location: 'Pátio Central',
        },
      ],
    },
    {
      day: 'Quinta-feira',
      date: '18/09',
      events: [
        {
          time: '09:00 - 12:00',
          title: 'Hackathon - Fase Final',
          speaker: 'Patrocinadores',
          location: 'Sala de Eventos',
        },
        {
          time: '14:00 - 15:30',
          title: '5G e Telecomunicações',
          speaker: 'Equipe Vivo',
          location: 'Auditório Principal',
        },
        {
          time: '16:00 - 18:00',
          title: 'Robótica e Automação Industrial',
          speaker: 'Eng. Pedro Alves - Siemens',
          location: 'Sala 301',
        },
      ],
    },
    {
      day: 'Sexta-feira',
      date: '19/09',
      events: [
        {
          time: '09:00 - 11:00',
          title: 'Apresentação de Projetos de Alunos',
          speaker: 'Estudantes da FEEC',
          location: 'Auditório Principal',
        },
        {
          time: '14:00 - 16:00',
          title: 'Premiação do Hackathon',
          speaker: 'Comissão Organizadora',
          location: 'Auditório Principal',
        },
        {
          time: '16:30 - 18:00',
          title: 'Cerimônia de Encerramento',
          speaker: 'Diretoria da FEEC',
          location: 'Auditório Principal',
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
                {day.events.map((event, eventIndex) => (
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
