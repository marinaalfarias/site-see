import { useState } from 'react';
import { CheckCircle2, UserPlus } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Conexão com o Supabase (puxando as variáveis de ambiente do seu .env)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export function Registration() {
  // Estados para guardar o que o aluno digita nos campos
  const [ra, setRa] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // Para mostrar "Carregando..." ao clicar

  const perks = [
    'Acesso a todas as palestras',
    'Certificado de participação e horas',
    'Coffee break e networking',
    'Kit do participante',
    'Acesso à feira de empresas',
    'Abono de falta nas aulas',
  ];

  // Função que envia os dados para o Supabase quando o formulário é submetido
  async function handleSubmit(e) {
    e.preventDefault(); // Evita que a página recarregue ao enviar o formulário
    setLoading(true);

    const { data, error } = await supabase
      .from('alunos')
      .insert([
        { ra: ra, nome: nome, email: email }
      ]);

    if (error) {
      if (error.code === '23505') { 
        alert("Este RA já está inscrito no evento!");
      } else {
        alert("Erro na inscrição: " + error.message);
      }
    } else {
      alert("Inscrição realizada com sucesso! Você já pode fazer check-in nas palestras.");
      // Limpa os campos após o sucesso
      setRa('');
      setNome('');
      setEmail('');
    }
    
    setLoading(false);
  }

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
            
            {/* Cartão de Inscrição Estudante */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">Estudante</h3>
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

              {/* Formulário Integrado ao Supabase */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Seu RA (ex: 123456)"
                  value={ra}
                  onChange={(e) => setRa(e.target.value)}
                  required
                  className="px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
                />
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className="px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
                />
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 mt-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {loading ? 'Processando...' : 'Inscrever-se'}
                  <UserPlus size={18} />
                </button>
              </form>
            </div>
            
            {/* Cartão Informativo */}
            <div className="bg-card rounded-lg border border-border p-8 flex items-center text-center">
              <p className="text-lg text-muted-foreground">
                Te esperamos ansiosos para esse evento incrível! Fique atento às nossas redes sociais para mais informações sobre as inscrições e novidades do evento.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}