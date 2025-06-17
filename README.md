# Weather Ticker INMET 🌤️

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Descrição

Um ticker de rolagem horizontal que exibe em tempo real os dados meteorológicos para Brasília-DF, consumindo diretamente as APIs públicas do **Instituto Nacional de Meteorologia (INMET)**.

O projeto é um único arquivo `weatherTicker.html`, ideal para ser incorporado em dashboards, portais de notícias ou qualquer página web que necessite de informações climáticas dinâmicas e visualmente integradas.

*(Sugestão: Grave um GIF curto da tela mostrando o ticker em ação e insira aqui. Ferramentas como ScreenToGif ou LICEcap são ótimas para isso)*

![Demo do Ticker](https://i.imgur.com/placeholder.gif)

---

## 🚀 Funcionalidades Principais

* **Dados em Tempo Real:** Exibe a temperatura, sensação térmica, umidade, chuva e vento atuais da estação meteorológica mais próxima.
* **Alertas Meteorológicos:** Destaca visualmente (em vermelho) quaisquer alertas emitidos pelo INMET para a região.
* **Previsão Completa:** Mostra a previsão detalhada para o dia atual (com resumo, mín/máx de temperatura e umidade) e para os próximos 3 dias.
* **Informações Astronômicas:**
    * Calcula e exibe a **fase da lua** correta para a data da previsão, com base nos dados oficiais do IAG/USP.
    * Exibe os horários do **nascer e pôr do sol**.
    * Mostra o ícone da **estação do ano** correspondente.
* **Interatividade:** A animação de rolagem pausa automaticamente quando o mouse é posicionado sobre o ticker.
* **Eficiência:** Utiliza o `localStorage` do navegador para fazer cache das respostas da API, evitando chamadas repetidas e acelerando o carregamento em até 60 minutos.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do conteúdo.
* **CSS3:** Estilização, layout responsivo com Flexbox e animações (`@keyframes`).
* **JavaScript (ES6+):** Lógica de programação, manipulação do DOM e consumo de APIs com `async/await` e `fetch`.

---

## ⚙️ Como Usar e Configurar

Por ser um projeto *client-side* autocontido, não há necessidade de instalação ou build.

1.  Baixe o arquivo `weatherTicker.html`.
2.  Abra o arquivo em qualquer navegador de internet moderno (Chrome, Firefox, Edge, etc.).

#### Alterando a Cidade

Para exibir o clima de outra cidade, altere o valor da constante `codigoIBGE` dentro da tag `<script>` no arquivo `weatherTicker.html`.

```javascript
const codigoIBGE = "5300108"; // Brasília. Altere este valor.
```

Você pode encontrar o código da sua cidade no [site do IBGE](https://www.ibge.gov.br/explica/codigos-dos-municipios.php).

---

## 📊 Fontes de Dados

* **Previsão do Tempo e Alertas:** [APIs Públicas do INMET](https://portal.inmet.gov.br/dev)
* **Fases da Lua:** [Datas de Mudança das Fases da Lua - IAG/USP](https://docs.google.com/spreadsheets/d/1pHVcbnl-Z4K9RN2MP8oMyfxwKoRELHEGSXheoYYfbBM/edit)

---

## 📜 Licença

Este projeto está licenciado sob a Licença MIT.

---

Desenvolvido por Daniel Aureliano.