
import { Lightbulb, Rocket, Users, Trophy } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Lightbulb size={32} />,
      title: 'Palestras',
      description: 'Palestras com profissionais renomados do mercado e academia',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Rodas de conversa',
      description: 'Momentos de troca e conselhos sobre carreira e desenvolvimento profissional',
    },
    {
      icon: <Users size={32} />,
      title: 'Networking',
      description: 'Conecte-se com empresas, professores e colegas da área',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Sobre o Evento</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Semana da Engenharia Elétrica é um evento anual que reúne estudantes,
            profissionais e empresas do setor para discutir as últimas tendências e
            inovações da área.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
