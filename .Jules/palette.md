## 2024-03-27 - Acessibilidade para letreiros (Marquee)
**Learning:** Elementos com rolagem automática (como tickers/marquees) frequentemente são inacessíveis para usuários de teclado, violando a diretriz WCAG 2.2.2 (Pause, Stop, Hide). Adicionar hover não é suficiente.
**Action:** Ao encontrar ou criar elementos com animação de movimento contínuo, sempre adicione `tabindex="0"`, `role="marquee"`, e implemente eventos `focus`/`blur` para pausar a animação e um indicador de `:focus-visible` claro, garantindo acessibilidade plena.
