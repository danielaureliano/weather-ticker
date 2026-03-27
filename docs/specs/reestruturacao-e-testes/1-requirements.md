# Requisitos: Reestruturação e Testes

## 🎯 Objetivo

Melhorar a manutenibilidade, organização e confiabilidade do projeto **Weather Ticker INMET** adotando padrões de engenharia de software utilizados no projeto `maqplan-api`.

## ✅ Critérios de Aceite

1.  **Organização de Diretórios:**
    - Código fonte deve residir em `src/`.
    - Testes devem residir em `tests/`.
    - Documentação técnica deve residir em `docs/specs/`.
2.  **Infraestrutura de Testes e Qualidade:**
    - Implementação do **Jest** como runner de testes padrão.
    - Migração de testes existentes para a sintaxe do Jest.
    - Geração de relatórios de cobertura de código (LCOV).
    - Integração com **SonarCloud** para análise estática e Quality Gate.
    - Garantir que o comando `npm test` execute todos os testes com sucesso.
3.  **Integridade da Aplicação e CI/CD:**
    - O `index.html` deve carregar corretamente os recursos das novas pastas.
    - A funcionalidade principal do ticker deve permanecer inalterada para o usuário final.
    - Bloqueio de merge em `master` se o Quality Gate falhar (via GitHub Actions).

## 🛡️ Tratamento de Erros e Casos de Borda

- Testes unitários para funções utilitárias devem cobrir entradas nulas, indefinidas e tipos de dados inválidos.
- A aplicação deve suportar a nova estrutura de pastas sem quebras de referências de arquivos.
