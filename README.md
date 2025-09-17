HOMEPAGE-HUGO-PROFISSIONAL/
│
├── README.md
│   # Homepage Profissional Hugo – Pacote para Redesenho
│
│   ## Descrição do Projeto
│   Este projeto é uma homepage profissional construída com Hugo, organizada para exibir:
│   - Seção Hero (nome, título profissional, subtítulo)
│   - Portfólio (grid de projetos)
│   - Sobre (biografia resumida)
│   - Contato (formulário + chat relay para Telegram)
│
│   O objetivo é fornecer estrutura funcional mínima para que a IA Lovable redesenhe a interface, mantendo a lógica de seções e integração de chat.
│
│   ## Estrutura do Projeto
│   ```
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
│
├── config.toml
│   # Placeholder: título, baseURL, menus, params (subtitle, about, etc.)
│
├── layouts/
│   ├── _default/
│   │   └── baseof.html
│   │       <!DOCTYPE html>
│       <html lang="pt-br">
│       <head>
│         <meta charset="utf-8" />
│         <title>{{ .Site.Title }}</title>
│         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
│         <link rel="stylesheet" href="/css/custom.css" />
│       </head>
│       <body>
│         <header>
│           <nav>
│             {{ range .Site.Menus.main }}
│               <a href="{{ .URL }}">{{ .Name }}</a>
│             {{ end }}
│           </nav>
│         </header>
│
│         <main>
│           {{ block "main" . }}{{ end }}
│         </main>
│
│         <footer>
│           <p>© {{ now.Format "2006" }} {{ .Site.Title }}</p>
│         </footer>
│       </body>
│       </html>
│
│   └── index.html
│       {{ define "main" }}
│       <section id="hero">
│         <h1>{{ .Site.Title }}</h1>
│         <p>{{ .Site.Params.subtitle }}</p>
│       </section>
│
│       <section id="portfolio">
│         <h2>Portfólio</h2>
│         <!-- Placeholder: grid de projetos -->
│       </section>
│
│       <section id="about">
│         <h2>Sobre mim</h2>
│         <p>{{ .Site.Params.about }}</p>
│       </section>
│
│       <section id="contact">
│         <h2>Contato</h2>
│         <div id="chat-relay" class="chat-box">
│           <div id="chat-messages" class="chat-messages"></div>
│           <form id="chat-form">
│             <input type="text" id="chat-input" placeholder="Digite sua mensagem..." />
│             <button type="submit">Enviar</button>
│           </form>
│         </div>
│       </section>
│
│       <script src="/js/chat.js"></script>
│       {{ end }}
│
├── static/
│   ├── css/
│   │   └── custom.css
│   │       body {
│   │         font-family: sans-serif;
│   │         margin: 0;
│   │         padding: 0;
│   │       }
│   │       header, footer {
│   │         padding: 1rem;
│   │         background: #f0f0f0;
│   │       }
│   │       .chat-box {
│   │         border: 1px solid #ccc;
│   │         padding: 1rem;
│   │         max-width: 400px;
│   │       }
│   │       .chat-messages {
│   │         min-height: 100px;
│   │         border: 1px solid #ddd;
│   │         margin-bottom: 0.5rem;
│   │         padding: 0.5rem;
│   │       }
│   │       .msg-sent {
│   │         text-align: right;
│   │         margin: 0.2rem 0;
│   │       }
│   │
│   └── js/
│       └── chat.js
│           document.getElementById('chat-form').addEventListener('submit', async (e) => {
│             e.preventDefault();
│             const input = document.getElementById('chat-input');
│             const msg = input.value.trim();
│             if (!msg) return;
│
│             const chatBox = document.getElementById('chat-messages');
│             chatBox.innerHTML += `<div class="msg-sent">${msg}</div>`;
│             input.value = "";
│
│             try {
│               await fetch('/sendMessage', {
│                 method: 'POST',
│                 headers: { 'Content-Type': 'application/json' },
│                 body: JSON.stringify({ text: msg })
│               });
│             } catch (err) {
│               console.error('Erro ao enviar mensagem:', err);
│             }
│           });
│
└── assets/
    ├── css/   # opcional (Hugo Pipes)
    └── js/    # opcional
