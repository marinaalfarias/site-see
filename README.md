# Site para evento de engenharia

This is a code bundle for Site para evento de engenharia. The original project is available at https://www.figma.com/design/ahS5YgKNH203GzRHk0l6iC/Site-para-evento-de-engenharia.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

---

## Modo noturno automático (prefers-color-scheme)

Adicionei suporte ao modo noturno automático usando a consulta de mídia CSS `@media (prefers-color-scheme: dark)` em `src/styles/theme.css`.

O que foi alterado:

- `src/styles/theme.css`: adicionado um bloco `@media (prefers-color-scheme: dark)` que redefine as mesmas variáveis CSS do tema escuro, de forma que o site passa automaticamente para o tema escuro quando o sistema do usuário estiver configurado para isso.

Como testar localmente:

1. Rode a aplicação com `npm run dev`.
2. Abra o site no navegador e, nas DevTools, vá em `Rendering` (Chrome) ou nas preferências de Aparência (Firefox/Safari) e force "prefers-color-scheme: dark" / "light".
3. Verifique que as cores mudam automaticamente sem precisar recarregar a página.

Observações e próximos passos:

- Esta alteração já foi comitada no branch padrão (commit: Add prefers-color-scheme dark media query to enable automatic dark mode).
- Se você quiser que eu crie um PR que inclua tanto essa mudança de CSS (em um branch) quanto o README, eu posso reverter o commit no branch padrão e aplicar ambos em um branch único antes de abrir o PR. Diga se prefere isso.
- Para suporte a ícones/imagens que não respeitam as variáveis de cor, considere usar SVGs com `currentColor` ou versões alternativas para o tema escuro.
