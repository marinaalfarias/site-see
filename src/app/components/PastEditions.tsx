import { Building2, Users, Award, TrendingUp } from 'lucide-react';

export function PastEditions() {
  const stats = [
    {
      icon: <Users size={32} />,
      value: '1.500+',
      label: 'Participantes ao longo dos anos',
    },
    {
      icon: <Building2 size={32} />,
      value: '20+',
      label: 'Empresas parceiras',
    },
    {
      icon: <Award size={32} />,
      value: '100+',
      label: 'Palestras e workshops realizados',
    },
    {
      icon: <TrendingUp size={32} />,
      value: '26',
      label: 'Anos de história',
    },
  ];

  const pastCompanies = [
    'BYD', 'ElDorado', 'CPFL Energy', 'Siemens Energy', 'CPQD',
    'Bosch', 'Ericsson', 'Samsung', 'Embraer',
    'Ericsson', 'CNPEM', 'Padtec', '3M', 'INPE',
    'Cistek', 'NEO Energia', 'General Motors', 'IBM', 'Marelli',
    'Motorola', 'Petrobras', 'Semikron', 'Tetrapak', 'Shell',
  ];

  return (
    <section id="edicoes-passadas" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Edições Passadas</h2>
          <p className="text-lg text-muted-foreground">
            Uma história de sucesso e inovação
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-border bg-card"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg border border-border p-8">
          <h3 className="text-center mb-8">Empresas que já participaram</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pastCompanies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors text-center text-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
