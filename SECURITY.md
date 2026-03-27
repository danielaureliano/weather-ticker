# Política de Segurança

## Versões Suportadas

Atualmente, apenas a versão mais recente do projeto recebe atualizações de segurança.

| Versão | Suportada          |
| ------- | ------------------ |
| 1.1.x   | :white_check_mark: |
| < 1.1.0 | :x:                |

## Reportando uma Vulnerabilidade

Se você descobrir uma vulnerabilidade de segurança, por favor, não abra uma issue pública. Em vez disso, envie um e-mail para [seu-email@exemplo.com] ou utilize o recurso de "Report a vulnerability" do GitHub.

### Nosso Compromisso
- Responderemos em até 48 horas.
- Manteremos você informado sobre o progresso da correção.
- Daremos o devido crédito caso a vulnerabilidade seja confirmada e corrigida.

## Melhores Práticas Recomendadas
Como este é um projeto frontend estático:
- **Não hardcode segredos:** Nunca insira chaves de API sensíveis no código cliente.
- **Sanitização:** O projeto utiliza funções de escape para dados vindos da API para prevenir XSS.
