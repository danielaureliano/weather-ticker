# 🌤️ Weather Ticker INMET - Guia de Contexto

Este documento fornece orientações e contexto técnico sobre o projeto **Weather Ticker INMET** para o Gemini CLI.

## 📖 Visão Geral do Projeto

O **Weather Ticker INMET** é uma aplicação web _frontend-only_ que exibe dados meteorológicos em tempo real para Brasília (ou outros municípios via código IBGE) através de um ticker horizontal. O projeto consome APIs públicas do Instituto Nacional de Meteorologia (INMET).

### Principais Funcionalidades

- **Ticker Horizontal:** Animação contínua de rolagem de dados meteorológicos.
- **Dados em Tempo Real:** Temperatura, sensação térmica, umidade, vento e precipitação.
- **Previsão:** Resumo para o dia atual e os próximos 3 dias.
- **Cálculos Astronômicos:** Fase da lua (algoritmo próprio) e horários de sol.
- **Sistema de Cache:** Utiliza `localStorage` para reduzir chamadas à API (30-60 min).
- **Alertas Críticos:** Exibição de avisos meteorológicos destacados.

## 🛠️ Tecnologias e Arquitetura

- **Linguagens:** HTML5, CSS3, JavaScript (ES6+).
- **APIs:** `apiprevmet3.inmet.gov.br` (Previsão, Estações e Avisos).
- **Estrutura de Testes:** Jest (Configurado para rodar no diretório `tests/`).
- **Estilização:** CSS puro com uso intensivo de `@keyframes` para animações e Flexbox para layout.

## 📂 Estrutura de Arquivos Chave

- `index.html`: Ponto de entrada da aplicação.
- `src/style.css`: Define a estética, responsividade e a animação `ticker-weather`.
- `src/script.js`: Lógica principal, consumo de API e cálculos astronômicos.
- `tests/`: Pasta dedicada para testes automatizados com Jest.
- `docs/specs/`: Documentação de requisitos, design técnico e execução de novas features.

## 🚀 Comandos e Execução

Como é um projeto de frontend estático:

- **Abrir o projeto:** Basta abrir o arquivo `index.html` em qualquer navegador moderno.
- **Executar Testes:** `npm test` (Executa todos os testes dentro de `tests/` usando Jest).
- **Desenvolvimento Local:** Recomenda-se o uso de extensões como "Live Server" (VS Code) ou um servidor HTTP simples (`python -m http.server`).

## 🛠️ Convenções de Desenvolvimento

- **Nomenclatura:** Variáveis e funções em inglês (`camelCase`), mas strings de interface em Português (pt-BR).
- **Separação de Preocupações:** Lógica no `src/script.js` e estilos no `src/style.css`.
- **Commits:** Utilizar **Conventional Commits** (feat, fix, refactor, docs, test) em Português (Brasil).
- **Cálculo da Lua:** Baseado na "idade lunar" desde uma data base (1970-01-07).

## ⚙️ Configurações Importantes (src/script.js)

- **Município:** Alterar a constante `codigoIBGE` (Ex: Brasília = `5300108`).
- **Intervalo de Atualização:** O ticker atualiza os dados a cada 30 minutos via `setInterval`.
- **Velocidade do Ticker:** Definida na variável `speedPxPerSec` (padrão: 140px/s) para cálculos de animação dinâmica.
