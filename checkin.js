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


// 1. Aponta para os elementos do formulário de inscrição
const campoInscricaoRa = document.getElementById('inscricaoRa');
const campoInscricaoNome = document.getElementById('inscricaoNome');
const campoInscricaoEmail = document.getElementById('inscricaoEmail');
const botaoInscricao = document.getElementById('botaoInscricao');

// 2. Cria a função que salva o aluno no Supabase
async function registrarAluno(ra, nome, email) {
  const { data, error } = await supabase
    .from('alunos')
    .insert([
      { 
        ra: ra, 
        nome: nome, 
        email: email 
      }
    ]);

  if (error) {
    // Se o aluno já estiver inscrito (RA duplicado), o Supabase avisa!
    if (error.code === '23505') { 
        alert("Este RA já está inscrito no evento!");
    } else {
        alert("Erro na inscrição: " + error.message);
    }
  } else {
    alert("Inscrição realizada com sucesso! Você já pode fazer check-in nas palestras.");
    
    // Limpa os campos após o sucesso
    campoInscricaoRa.value = '';
    campoInscricaoNome.value = '';
    campoInscricaoEmail.value = '';
  }
}

// 3. Diz ao botão de inscrição o que fazer
if (botaoInscricao) {
    botaoInscricao.addEventListener('click', () => {
        const ra = campoInscricaoRa.value;
        const nome = campoInscricaoNome.value;
        const email = campoInscricaoEmail.value;
        
        // Pequena validação para garantir que não mandem vazio
        if (ra.length > 0 && nome.length > 0) {
            registrarAluno(ra, nome, email);
        } else {
            alert("Por favor, preencha pelo menos o RA e o Nome.");
        }
    });
}