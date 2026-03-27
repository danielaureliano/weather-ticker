# Weather Ticker INMET 🌤️

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## 📖 Descrição

Um ticker de rolagem horizontal que exibe em tempo real os dados meteorológicos para Brasília-DF (ou qualquer município via código IBGE), consumindo diretamente as APIs públicas do **Instituto Nacional de Meteorologia (INMET)**.

Este projeto segue rigorosos padrões de engenharia de software, com separação de responsabilidades, testes automatizados e integração contínua.

![Demo do Ticker](https://github.com/danielaureliano/weather-ticker/blob/3879c0bef1d2dd7c0d3d96206e46407f160c7c97/weather-ticker-example.gif)

---

## 🚀 Funcionalidades Principais

- **Dados em Tempo Real:** Temperatura, sensação térmica, umidade, chuva e vento atuais.
- **Alertas Meteorológicos:** Destaque visual para avisos críticos emitidos pelo INMET.
- **Previsão Completa:** Detalhes para o dia atual e os próximos 3 dias.
- **Informações Astronômicas:**
  - Cálculo preciso da **fase da lua** baseado no ciclo sinódico.
  - Horários de **nascer e pôr do sol**.
  - Ícone da **estação do ano** atual.
- **Eficiência e Cache:** Armazenamento em `localStorage` (30-60 min) para otimizar o consumo da API.
- **Interatividade:** Pausa automática da animação ao passar o mouse.

---

## 📂 Estrutura do Projeto

O projeto adota uma arquitetura modular para facilitar a manutenção e testes:

```plaintext
weather-ticker/
├── .github/workflows/  # Pipelines de CI/CD (GitHub Actions)
├── docs/specs/         # Especificações técnicas e requisitos
├── src/                # Código fonte (Lógica e Estilos)
│   ├── script.js
│   └── style.css
├── tests/              # Testes automatizados (Jest)
├── index.html          # Ponto de entrada da aplicação
├── GEMINI.md           # Guia de contexto para IA
└── AGENTS.md           # Diretrizes para agentes de IA
```

---

## 🛠️ Tecnologias e Ferramentas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+).
- **Testes:** [Jest](https://jestjs.io/) para testes unitários.
- **Qualidade de Código:** [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/).
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) para validação automática de Pull Requests.

---

## 📥 Como Usar

### Pré-requisitos

- Um navegador moderno.
- [Node.js](https://nodejs.org/) (recomendado v22+) para rodar testes e lint.

### Passos para Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/danielaureliano/weather-ticker.git
   ```
2. **Instale as dependências de desenvolvimento:**
   ```bash
   npm install
   ```
3. **Abra o `index.html`:**
   Utilize um servidor local (ex: Live Server) ou abra diretamente no navegador.

### Comandos de Desenvolvimento

- **Executar Testes:** `npm test`
- **Análise Estática (Lint):** `npm run lint`
- **Formatação Automática:** `npm run format`

---

## ⚙️ Personalização

### Alterando o Município
Edite a constante `codigoIBGE` no arquivo `src/script.js`.
- Brasília: `5300108`
- Rio de Janeiro: `3304557`
- São Paulo: `3509502`

---

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

Desenvolvido por [Daniel Aureliano](https://github.com/danielaureliano).
