HOMEPAGE-HUGO-PROFISSIONAL/

README.md
# Homepage

## Descrição do Projeto
Este projeto é uma homepage profissional construída com Hugo, organizada para exibir:
- Seção Hero (nome, título profissional, subtítulo)
- Portfólio (grid de projetos)
- Sobre (biografia resumida)
- Contato (formulário + chat relay para Telegram)

O objetivo é fornecer estrutura funcional mínima para que a IA Lovable redesenhe a interface, mantendo a lógica de seções e integração de chat.

## Estrutura do Projeto
```
│   / (raiz)
│   ├── config.toml
│   ├── layouts/_default/baseof.html
│   ├── layouts/index.html
│   ├── static/css/custom.css
│   └── static/js/chat.js
│   ```
│
│   ## Pontos Importantes
│   - Chat Relay: `chat.js` envia mensagens ao backend (/sendMessage). Backend não incluso.
│   - Placeholders de conteúdo: {{ .Site.Title }}, {{ .Site.Params.subtitle }}, etc.
│   - Estilos: CSS mínimo, a IA deve aplicar novo design.
│   - Flexibilidade: arquivos separados permitem redesenho independente.
│
│   ## Instruções de Uso
│   1. Copiar arquivos para projeto Hugo.
│   2. Substituir placeholders por conteúdo real.
│   3. Implementar backend do chat (não incluso).
│   4. Aplicar redesign visual via CSS ou frameworks.
│
│   ## Observações Finais
│   Pacote mínimo funcional, pronto para redesenho. Elementos críticos preservados.
```
