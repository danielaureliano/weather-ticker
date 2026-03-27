# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.1.0] - 2026-03-27

### Adicionado
- Infraestrutura de testes com **Jest**.
- Configuração de linting com **ESLint v10** e **Prettier**.
- Pipeline de CI com **GitHub Actions**.
- Documentação técnica detalhada (`GEMINI.md`, `AGENTS.md`, `docs/specs/`).
- Exportação de funções utilitárias para testes unitários.

### Alterado
- **Reestruturação de Diretórios:** Código movido para `src/`, testes para `tests/` e especificações para `docs/`.
- Atualizado `index.html` para refletir os novos caminhos dos ativos.
- Melhorada a robustez do cálculo da fase da lua usando métodos UTC.

## [1.0.0] - 2024-03-20 (Lançamento Inicial)

### Adicionado
- Versão inicial do ticker meteorológico.
- Integração direta com APIs do INMET.
- Cálculo de fase da lua e horários solares.
- Sistema de cache local.
