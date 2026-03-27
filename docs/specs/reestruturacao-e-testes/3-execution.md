# Plano de Execução: Reestruturação e Testes

## 📋 Lista de Tarefas (Checklist)

### 1. Preparação (Concluído ✅)

- [x] Sincronização com o repositório remoto (`git pull origin master`).
- [x] Criação da estrutura de diretórios (`src/`, `tests/`, `docs/specs/`).

### 2. Reestruturação de Arquivos (Concluído ✅)

- [x] Mover `script.js` e `style.css` para `src/`.
- [x] Mover `capitalize.test.js` para `tests/`.
- [x] Atualizar referências de caminhos em `index.html`.
- [x] Atualizar importação em `tests/capitalize.test.js`.

### 3. Setup de Testes Profissional (Concluído ✅)

- [x] Instalação do Jest (`npm install --save-dev jest`).
- [x] Migração dos testes da sintaxe do Node para sintaxe do Jest.
- [x] Atualização do `package.json` com o novo script de teste.
- [x] Validação da execução dos testes (`npm test`).

### 4. Documentação (Concluído ✅)

- [x] Criação de `1-requirements.md`.
- [x] Criação de `2-tech-design.md`.
- [x] Criação de `3-execution.md`.

## 🧪 Próximas Etapas (Roadmap)
- [x] Criar testes para a função `getLunarDay`. (Concluído ✅)
- [x] Implementar ESLint e Prettier para padronização de código. (Concluído ✅)
- [x] Configurar GitHub Actions para CI (execução automática de testes em PRs). (Concluído ✅)

