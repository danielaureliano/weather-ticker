# Weather Ticker INMET 🌤️

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Descrição

Um ticker de rolagem horizontal que exibe em tempo real os dados meteorológicos para Brasília-DF, consumindo diretamente as APIs públicas do **Instituto Nacional de Meteorologia (INMET)**.

O projeto foi estruturado com a separação de HTML, CSS e JavaScript, seguindo as melhores práticas de desenvolvimento web para facilitar a manutenção e escalabilidade. Ideal para ser incorporado em dashboards, portais de notícias ou qualquer página web que necessite de informações climáticas dinâmicas e visualmente integradas.

![Demo do Ticker](https://github.com/danielaureliano/weather-ticker/blob/3879c0bef1d2dd7c0d3d96206e46407f160c7c97/weather-ticker-example.gif)

---

## 🚀 Funcionalidades Principais

* **Dados em Tempo Real:** Exibe a temperatura, sensação térmica, umidade, chuva e vento atuais da estação meteorológica mais próxima.
* **Alertas Meteorológicos:** Destaca visualmente (em vermelho) quaisquer alertas emitidos pelo INMET para a região.
* **Previsão Completa:** Mostra a previsão detalhada para o dia atual (com resumo, mín/máx de temperatura e umidade) e para os próximos 3 dias.
* **Informações Astronômicas:**
    * Calcula e exibe a **fase da lua** correta para a data da previsão, usando um algoritmo preciso.
    * Exibe os horários do **nascer e pôr do sol**.
    * Mostra o ícone da **estação do ano** correspondente.
* **Interatividade:** A animação de rolagem pausa automaticamente quando o mouse é posicionado sobre o ticker.
* **Eficiência:** Armazena em cache as respostas da API no `localStorage` do navegador por até 60 minutos para otimizar a eficiência, evitando chamadas repetidas e acelerando o carregamento.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do conteúdo.
* **CSS3:** Estilização, layout responsivo com Flexbox e animações (`@keyframes`).
* **JavaScript (ES6+):** Lógica de programação, manipulação do DOM e consumo de APIs com `async/await` e `fetch`.

---

## 📂 Estrutura do Projeto

``` plaintext
weather-ticker/
|-- 📄 index.html      (Estrutura principal da página)
|-- 📄 style.css        (Código de estilo visual)
|-- 📄 script.js        (Código da lógica e comportamento)
|-- 📄 README.md        (Documentação do projeto)
|-- 📄 .gitignore       (Arquivos a serem ignorados pelo Git)

```
--- 

## 📥 Como Usar
### Pré-requisitos
* Um navegador moderno (Chrome, Firefox, Edge, Safari).
* Conexão com a internet para acessar as APIs do INMET.
### Passos para Execução
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/danielaureliano/weather-ticker.git
   ```
2. **Acesse o diretório do projeto:**
   ```bash
   cd weather-ticker
   ```
3. **Abra o arquivo `index.html` em um navegador:**
   ```bash
   start index.html
   ```
4. **Visualize o ticker em ação:** O ticker começará a exibir os dados meteorológicos de Brasília-DF automaticamente.
5. **Interaja com o ticker:** Passe o mouse sobre o ticker para pausar a rolagem e visualizar os dados detalhados.
6. **Verifique os alertas:** Se houver alertas meteorológicos ativos, eles serão destacados em vermelho.
### Personalização
Você pode personalizar o ticker para exibir dados de outros Municípios ou ajustar o estilo visual conforme necessário.
### Alterando o Município
Para exibir o clima de outro município, altere o valor da constante `codigoIBGE` dentro da tag `<script>` no arquivo `script.js`.

```javascript
const codigoIBGE = "5300108"; // Brasília. Altere este valor.
```

### Encontrando o Código IBGE
Para encontrar o código IBGE da sua cidade, você pode consultar o site do IBGE ou utilizar a API de municípios disponível no INMET. O código IBGE é um identificador único para cada município brasileiro e é necessário para consultar as informações meteorológicas corretas.
### Exemplo de Código IBGE
O código IBGE para Brasília-DF é `5300108`. Para outros Municípios, você precisará substituir esse valor pelo código correspondente.
### Exemplo de Código IBGE para Outras Municípios
```javascript
const codigoIBGE = "3304557"; // Rio de Janeiro
```
```javascript
const codigoIBGE = "3509502"; // São Paulo
```
```javascript
const codigoIBGE = "3106200"; // Belo Horizonte
```
### Encontrando o Código IBGE da Sua Cidade
Para encontrar o código IBGE da sua cidade, você pode consultar o [site do IBGE](https://www.ibge.gov.br/explica/codigos-dos-municipios.php) ou utilizar a API de municípios disponível no INMET. O código IBGE é um identificador único para cada município brasileiro e é necessário para consultar as informações meteorológicas corretas.

## 🌙 Fases da Lua
Para calcular a fase da lua, o projeto utiliza um algoritmo baseado na data atual. A fase da lua é determinada com base no número de dias desde a última lua nova, e as fases são categorizadas como:
* **Lua Nova:** 0 a 1 dias após a lua nova.
* **Lua Crescente:** 2 a 7 dias após a lua nova.
* **Lua Cheia:** 14 a 15 dias após a lua nova.
* **Lua Minguante:** 16 a 21 dias após a lua nova.
* **Lua Nova:** 22 a 29 dias após a lua nova.

## 🌐 Acesso ao Projeto
Você pode acessar o projeto diretamente no seguinte link: [Weather Ticker INMET](https://danielaureliano.github.io/weather-ticker/)

## 📚 Documentação
Para mais detalhes sobre as APIs utilizadas, consulte a documentação oficial do INMET e do IAG/USP para as fases da lua.

## 📊 Fontes de Dados

* **Previsão do Tempo e Alertas:** [APIs Públicas do INMET](https://portal.inmet.gov.br/noticias/saiba-como-acessar-os-dados-meteorol%C3%B3gicos-dispon%C3%ADveis-no-site-do-inmet)
* **Lógica de Cálculo da Lua:** Baseada no algoritmo de "idade lunar" e no [calendário do Departamento de Astronomia do IAG/USP.](https://docs.google.com/spreadsheets/d/1pHVcbnl-Z4K9RN2MP8oMyfxwKoRELHEGSXheoYYfbBM/edit)

---

## 📧 Contato
Para dúvidas, sugestões ou contribuições, sinta-se à vontade para entrar em contato comigo através do meu perfil no GitHub: [Daniel Aureliano](https://github.com/danielaureliano)

## 📝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções de bugs ou novas funcionalidades.

## 🏷️ Tags
- Weather
- Meteorologia
- Lua
- JavaScript
- HTML
- CSS

## 📜 Licença
Este projeto está licenciado sob a Licença MIT.

Desenvolvido por [Daniel Aureliano.](https://github.com/danielaureliano)