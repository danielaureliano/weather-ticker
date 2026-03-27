# Guia de Contribuição

Obrigado por seu interesse em contribuir para o **Weather Ticker INMET**!

## 🚀 Como Contribuir

1.  **Faça um Fork** do repositório.
2.  **Crie uma branch** para sua funcionalidade ou correção:
    ```bash
    git checkout -b feat/minha-melhoria
    ```
3.  **Desenvolva e Teste:**
    - Adicione testes unitários em `tests/` se necessário.
    - Garanta que todos os testes passam: `npm test`.
    - Verifique o estilo de código: `npm run lint`.
4.  **Commits:** Siga o padrão **Conventional Commits** (Ex: `fix: Corrigir cálculo de sensação térmica`).
5.  **Envie um Pull Request** detalhando suas mudanças.

## 📏 Padrões de Código

- Siga as regras do **ESLint** e **Prettier** configuradas.
- Utilize nomes de variáveis semânticos em Inglês.
- Comente lógicas complexas.
- Mantenha a interface em Português (Brasil).

## 🧪 Requisitos de Teste

Toda nova função utilitária deve vir acompanhada de seu respectivo arquivo de teste Jest em `tests/`.

## 📂 Processo de Pull Request

- O CI (GitHub Actions) deve estar verde (sucesso) para que o PR seja revisado.
- Documente novas funcionalidades no `README.md` se necessário.
- Atualize o `CHANGELOG.md` na seção `[Unreleased]`.
