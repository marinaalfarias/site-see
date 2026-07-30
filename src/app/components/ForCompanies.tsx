import { Handshake, Target, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export function ForCompanies() {
  const benefits = [
    {
      icon: <Target size={28} />,
      title: 'Visibilidade de Marca',
      description: 'Exponha sua marca para mais de 500 estudantes e profissionais da área',
    },
    {
      icon: <Handshake size={28} />,
      title: 'Recrutamento',
      description: 'Acesso direto aos melhores talentos da Unicamp e região',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Networking Estratégico',
      description: 'Conecte-se com academia, startups e outras empresas do setor',
    },
  ];

  return (
    <section id="empresas" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Para Empresas</h2>
          <p className="text-lg text-muted-foreground">
            Seja um patrocinador e faça parte deste evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {benefit.icon}
              </div>
              <h3 className="mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl mb-6 text-center">Entre em Contato</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary">
                  <Mail size={20} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:patrocinio@seee.unicamp.br" className="hover:text-primary transition-colors">
                  patrocinio@seee.unicamp.br
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary">
                  <Phone size={20} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Telefone</p>
                <a href="tel:+551935211234" className="hover:text-primary transition-colors">
                  (19) 3521-1234
                </a>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary">
                  <MapPin size={20} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Localização</p>
                <p>FEEC - Unicamp</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:patrocinio@seee.unicamp.br"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Solicitar Proposta de Patrocínio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
