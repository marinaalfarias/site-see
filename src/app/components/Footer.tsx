import { Instagram, Linkedin, Mail, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/see.unicamp/', label: 'Instagram' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/company/semana-da-engenharia-elétrica-see/posts/?feedView=all', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:seefeec@unicamp.br', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Programação', id: 'programacao' },
    { label: 'Patrocinadores', id: 'patrocinadores' },
    { label: 'Inscrições', id: 'inscricoes' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/src/assets/logo.png"
                  alt="Logo"
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>
              <div>
                <h3>SEE Unicamp</h3>
                <p className="text-sm opacity-80">Edição 2026</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Semana da Engenharia Elétrica da Unicamp -
              Conectando estudantes, profissionais e empresas.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Redes Sociais</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm opacity-80">
              Faculdade de Engenharia Elétrica e de Computação<br />
              Universidade Estadual de Campinas<br />
              Campinas - SP
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
