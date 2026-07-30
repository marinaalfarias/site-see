import { Star } from 'lucide-react';

export function Sponsors() {
  const sponsors = {
    sponsors: ['HwiT', 'Siemens Energy', 'Cadence'],
    participants: ['John Deere', 'Radaz', 'Tractian', 'CNPEM'],
    support: ['FEEC', 'Unicamp'],
  };

  return (
    <section id="patrocinadores" className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Empresas participantes 2026</h2>
          <p className="text-lg text-muted-foreground">
            Empresas que tornam este evento possível
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Star size={24} className="text-yellow-500 fill-yellow-500" />
              <h3 className="text-2xl">Patrocinadores</h3>
              <Star size={24} className="text-yellow-500 fill-yellow-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {sponsors.sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="h-32 flex items-center justify-center p-8 rounded-lg border-2 border-primary bg-card text-2xl"
                >
                  {sponsor}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Star size={20} className="text-yellow-600 fill-yellow-600" />
              <h3 className="text-xl">Participantes</h3>
              <Star size={20} className="text-yellow-600 fill-yellow-600" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {sponsors.participants.map((sponsor, index) => (
                <div
                  key={index}
                  className="h-24 flex items-center justify-center p-6 rounded-lg border border-border bg-card text-lg"
                >
                  {sponsor}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Star size={18} className="text-gray-400 fill-gray-400" />
              <h3 className="text-lg">Apoio</h3>
              <Star size={18} className="text-gray-400 fill-gray-400" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {sponsors.support.map((sponsor, index) => (
                <div
                  key={index}
                  className="h-20 flex items-center justify-center p-4 rounded-lg border border-border bg-card text-sm"
                >
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
