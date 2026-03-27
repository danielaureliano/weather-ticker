# Tech Design: Reestruturação e Testes

## 🏗️ Arquitetura Proposta

O projeto foi transformado de uma estrutura plana para uma organização modular por responsabilidades.

### Estrutura de Diretórios

- `/src`: Contém os arquivos de lógica (`script.js`) e estilo (`style.css`).
- `/tests`: Contém os arquivos de teste unitário e de integração.
- `/docs/specs`: Repositório de especificações técnicas seguindo o padrão Lead/Sub-agent.

## 🛠️ Tecnologias e Ferramentas

- **Jest:** Substitui o `node:test` para fornecer um ambiente de teste mais rico, com suporte a `describe`, `test`, e `expect`.
- **NPM Scripts:** Padronização do comando `npm test` para automação.

## 🧪 Estratégia de Testes

- **Testes Unitários:** Foco em funções utilitárias puras (ex: `capitalize`, `safe`, `getLunarDay`).
- **Mocking:** Futura implementação de mocks para as APIs do INMET no `localStorage` para testar a lógica de cache sem dependência de rede.

## 🛡️ Segurança e Qualidade

- **Encapsulamento:** Funções exportadas via `module.exports` apenas quando o ambiente for de teste para evitar poluição no escopo do navegador.
- **Padrão Clean Code:** Aplicação dos princípios SOLID e DRY na separação de arquivos.
