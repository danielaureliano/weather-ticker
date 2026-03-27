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

### 3. Setup de Testes e Qualidade Profissional (Concluído ✅)
- [x] Instalação do Jest (`npm install --save-dev jest`).
- [x] Migração dos testes para sintaxe Jest.
- [x] Configuração de cobertura de código (`--coverage`).
- [x] Criação de `sonar-project.properties`.
- [x] Atualização da Pipeline CI com SonarCloud Scan.
- [x] Validação da execução dos testes e linting local.

### 4. Documentação (Concluído ✅)
- [x] Criação de `1-requirements.md`.
- [x] Criação de `2-tech-design.md`.
- [x] Criação de `3-execution.md`.

## 🧪 Próximas Etapas (Roadmap)
- [ ] Configurar Branch Protection Rules no GitHub para exigir aprovação do CI/Sonar.
- [ ] Implementar ESLint e Prettier para padronização de código. (Concluído ✅)
- [ ] Configurar GitHub Actions para CI. (Concluído ✅)


