import { CheckCircle2, ExternalLink } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Registration() {
  const perks = [
    'Acesso a todas as palestras',
    'Certificado de participação e horas',
    'Coffee break e networking',
    'Kit do participante',
    'Acesso à feira de empresas',
    'Abono de falta nas aulas',
  ];

  return (
    <section id="inscricoes" className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Inscrições</h2>
          <p className="text-lg text-muted-foreground">
            Não perca esse evento!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.84)), url(${logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6">
                  <h3 className="text-2xl mb-2">Estudante</h3>
                  <p className="text-sm text-muted-foreground">
                    Válido com comprovante de matrícula
                  </p>
                </div>
                <ul className="space-y-3 mb-8 w-full max-w-md">
                  {perks.map((perk, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-#00407d mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://forms.gle/D7AH8qX1P3YjLdau6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Inscrever-se
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <p className="text-lg text-muted-foreground max-w-md">
                Te esperamos ansiosos para esse evento incrível! Fique atento às nossas redes sociais para mais informações sobre as inscrições e novidades do evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
