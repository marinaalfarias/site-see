import { CheckCircle2, ExternalLink } from 'lucide-react';

export function Registration() {
  const perks = [
    'Acesso a todas as palestras e workshops',
    'Certificado de participação',
    'Coffee break e networking',
    'Kit do participante',
    'Acesso à feira de empresas',
    'Participação em competições',
  ];

  return (
    <section id="inscricoes" className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Inscrições</h2>
          <p className="text-lg text-muted-foreground">
            Garanta sua vaga na SEEE 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">Estudante</h3>
                <div className="text-4xl mb-2">R$ 25</div>
                <p className="text-sm text-muted-foreground">
                  Válido com comprovante de matrícula
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {perks.map((perk, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.google.com/seee-estudante"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Inscrever-se
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                Mais Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">Profissional</h3>
                <div className="text-4xl mb-2">R$ 50</div>
                <p className="text-sm text-muted-foreground">
                  Para profissionais da área
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {perks.map((perk, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{perk}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.google.com/seee-profissional"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Inscrever-se
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center p-6 bg-card rounded-lg border border-border">
            <p className="text-muted-foreground mb-2">
              <strong>Importante:</strong> As inscrições são limitadas e encerram em 10/09/2026
            </p>
            <p className="text-sm text-muted-foreground">
              Estudantes da Unicamp têm 20% de desconto. Use o cupom UNICAMP20 no formulário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
