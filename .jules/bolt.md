## 2024-05-24 - [INMET API Bottleneck]
**Learning:** O carregamento sequencial de múltiplas chamadas à API do INMET (avisos, tempo atual, previsão) bloqueia a renderização inicial do ticker e aumenta o tempo de resposta em ~6 segundos.
**Action:** Usar `Promise.all` para chamadas de API independentes, mantendo apenas a montagem do HTML em ordem sequencial.
