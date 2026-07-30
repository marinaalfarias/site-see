// 1. Importa a biblioteca do Supabase
import { createClient } from '@supabase/supabase-js';

// 2. Puxa as senhas do arquivo .env (escondido do GitHub)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 3. Cria a conexão
const supabase = createClient(supabaseUrl, supabaseKey);

// 4. A função que envia a presença quando o aluno clica/scaneia
async function registrarPresenca(raDoAluno, idDaAtividade) {
  
  // O Supabase tenta inserir na tabela 'presencas'
  const { data, error } = await supabase
    .from('presencas')
    .insert([
      { 
        aluno_ra: raDoAluno, 
        atividade_id: idDaAtividade 
      }
    ]);

  if (error) {
    console.error("Erro ao registrar presença:", error.message);
    alert("Erro! Verifique com a organização.");
  } else {
    console.log("Sucesso!", data);
    alert("Presença confirmada com sucesso!");
  }
}

// Exemplo de uso: O aluno 123456 foi na palestra 2
// registrarPresenca('123456', 2);