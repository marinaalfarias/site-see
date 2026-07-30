import { Calendar, MapPin, Users } from 'lucide-react';

export function Hero() {
  const scrollToInscricoes = () => {
    const element = document.getElementById('inscricoes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm mb-4">
            Edição 2026
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Semana da Engenharia Elétrica
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          O maior evento de Engenharia Elétrica da Unicamp
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-foreground/80">
            <Calendar size={20} />
            <span>15 a 19 de Setembro, 2026</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin size={20} />
            <span>Faculdade de Engenharia Elétrica - Unicamp</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Users size={20} />
            <span>Mais de 500 participantes esperados</span>
          </div>
        </div>

        <button
          onClick={scrollToInscricoes}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Inscreva-se Agora
        </button>
      </div>
    </section>
  );
}
