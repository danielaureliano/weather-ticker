// Ícones oficiais
const ICON_TMIN =
  "https://portal.inmet.gov.br/uploads/icones/temperatura_minima.jpg";
const ICON_TMAX =
  "https://portal.inmet.gov.br/uploads/icones/temperatura_maxima.png";
const ICON_UMAX = "https://portal.inmet.gov.br/uploads/icones/umidade_max.png";
const ICON_UMIN = "https://portal.inmet.gov.br/uploads/icones/umidade_min.png";
const ICON_OCASO = "https://portal.inmet.gov.br/uploads/icones/ocaso_sol.png";
const ICON_NASCER = "https://portal.inmet.gov.br/uploads/icones/nascer_sol.png";
const ICON_SEN =
  "https://portal.inmet.gov.br/uploads/icones/sensa%C3%A7%C3%A3o.png";
const ICON_WIND = "https://portal.inmet.gov.br/uploads/icones/wind.png";
const ICON_CHUVA =
  "https://portal.inmet.gov.br/uploads/icones/precipta%C3%A7%C3%A3o.png";
const ICON_ESTACAO = (estacao) =>
  estacao
    ? `https://portal.inmet.gov.br/uploads/seasons/${capitalize(estacao)}.png`
    : ""; // Ícone de estação vazio se não houver estação
const ICON_LUA = (num) => `https://portal.inmet.gov.br/uploads/luas/${num}.png`;
const ICON_UMID = ICON_UMAX;
const ICON_TEMP = ICON_TMAX;

const codigoIBGE = "5300108"; // Brasília

// --- LÓGICA DA FASE DA LUA - VERSÃO FINAL BASEADA NO CÁLCULO DE "IDADE" ---

// 1. Constantes e Mapeamentos
const LUNAR_CYCLE_MS = 2551442877; // Período Sinódico em milissegundos
const KNOWN_NEW_MOON_MS = new Date("1970-01-07T00:00:00Z").getTime(); // Lua Nova conhecida em milissegundos UTC

// Nomes das 8 fases em ordem, para exibição
const phaseNames = [
  "Nova",
  "Crescente",
  "Quarto Crescente",
  "Crescente Gibosa",
  "Cheia",
  "Minguante Gibosa",
  "Quarto Minguante",
  "Minguante",
];

// Mapeamento dos nomes para os ícones corretos
const phaseToIconMap = {
  Nova: 0,
  Crescente: 1,
  "Quarto Crescente": 2,
  "Crescente Gibosa": 3,
  Cheia: 4,
  "Minguante Gibosa": 5,
  "Quarto Minguante": 6,
  Minguante: 7,
};

/**
 * Calcula a idade da lua em dias desde a última lua nova.
 * @param {Date} targetDate - A data para a qual se quer calcular a idade da lua.
 * @returns {number} A idade da lua em dias (0 a ~29.5).
 */
function getLunarDay(targetDate) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Garante que estamos comparando em UTC para consistência
  const targetMs = Date.UTC(
    targetDate.getFullYear(),
    targetDate.getMonth(),
    targetDate.getDate()
  );

  const diffMs = targetMs - KNOWN_NEW_MOON_MS;
  // Pega o resto da divisão em milissegundos, como no código Java
  const cycleRemainderMs = diffMs % LUNAR_CYCLE_MS;

  const lunarDay = cycleRemainderMs / MS_PER_DAY;

  // Garante que o resultado seja positivo
  return lunarDay < 0 ? lunarDay + LUNAR_CYCLE_MS / MS_PER_DAY : lunarDay;
}

/**
 * Função principal que recebe uma data e retorna o nome e ícone da fase da lua.
 * @param {Date} forecastDate - A data da previsão.
 * @returns {{iconUrl: string, name: string}}
 */
function getFaseLua(forecastDate) {
  const lunarDay = getLunarDay(forecastDate);

  // O ciclo de ~29.5 dias é dividido em 8 fases de ~3.7 dias cada.
  const phaseIndex = Math.floor(lunarDay / 3.6875 + 1); // +1 para alinhar com o índice 0-7
  // Garante que o índice esteja dentro do intervalo 0-7
  const phaseName = phaseNames[phaseIndex % 8];
  const iconNumber = phaseToIconMap[phaseName] ?? 4;

  return {
    iconUrl: ICON_LUA(iconNumber),
    name: phaseName,
  };
}
// pegue a data atual do navegador e mostre no console o resultado do cálculo da fase da lua para a data atual mais os próximos 4 dias
const currentDate = new Date();
const faseLuaAtual = getFaseLua(currentDate);
console.log("Fase da Lua Atual:", faseLuaAtual);

for (let i = 1; i <= 4; i++) {
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + i);
  const faseLuaProxima = getFaseLua(nextDate);
  console.log(
    `Fase da Lua em ${nextDate.toLocaleDateString()}:`,
    faseLuaProxima
  );
}

function capitalize(str) {
  return str && typeof str === "string"
    ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    : "";
}

function safe(val, unit = "") {
  return val !== undefined && val !== null && val !== "" ? val + unit : "--";
}

async function fetchJsonOrText(url) {
  const resp = await fetch(url);
  const text = await resp.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(text);
  }
}

function getCachedData(key, maxMinutes) {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    const { data, timestamp } = JSON.parse(item);
    const ageMinutes = (Date.now() - timestamp) / 1000 / 60;
    if (ageMinutes > maxMinutes) return null;
    return data;
  } catch {
    return null;
  }
}

function setCachedData(key, data) {
  localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
}

async function loadWeatherData() {
  const urlPrev = `https://apiprevmet3.inmet.gov.br/previsao/${codigoIBGE}`;
  const urlAvisos = `https://apiprevmet3.inmet.gov.br/avisos/${codigoIBGE}`;
  const urlAgora = `https://apiprevmet3.inmet.gov.br/estacao/proxima/${codigoIBGE}`;
  let tickerHtml = "";

  try {
    // ALERTAS/AVISOS (cache 30min)
    let alerts;
    try {
      alerts = getCachedData("inmet_alertas", 30);
      if (!alerts) {
        alerts = await fetchJsonOrText(urlAvisos);
        setCachedData("inmet_alertas", alerts);
      }
      if (
        alerts &&
        alerts[codigoIBGE] &&
        Array.isArray(alerts[codigoIBGE]) &&
        alerts[codigoIBGE].length > 0
      ) {
        alerts[codigoIBGE].forEach((alerta) => {
          tickerHtml += `<span class="weather-alert">
    ⚠️ ${safe(alerta.tipo)} - ${safe(alerta.titulo)}: ${safe(alerta.texto)}
    </span>`;
        });
      }
    } catch (e) {
      console.warn("Avisos não disponíveis:", e.message);
    }

    // TEMPO AGORA (cache 30min)
    let dadosObj = getCachedData("inmet_agora", 30);
    if (!dadosObj) {
      dadosObj = await fetchJsonOrText(urlAgora);
      setCachedData("inmet_agora", dadosObj);
    }
    let dado = dadosObj.dados || {};

    tickerHtml += `<span class="weather-item">
                <img src="${ICON_TEMP}" class="weather-icon-tmax" alt="Temperatura atual">
                <span class="weather-label">Agora:</span>
                ${safe(dado.TEM_INS, "°C")}
                <img src="${ICON_SEN}" class="weather-icon-small" alt="Sensação térmica">
                Sensação: ${safe(dado.TEM_SEN, "°C")}
                <img src="${ICON_UMID}" class="weather-icon-umid" alt="Umidade">
                UMD: ${safe(dado.UMD_INS, "%")}
                <img src="${ICON_CHUVA}" class="weather-icon-small" alt="Chuva">
                Chuva: ${safe(dado.CHUVA, " mm")}
                <img src="${ICON_WIND}" class="weather-icon-small" alt="Vento">
                Vento: ${safe(dado.VEN_VEL, " m/s")} (${safe(
      dado.VEN_RAJ,
      " m/s"
    )})
                </span>`;

    // PREVISÃO DO TEMPO (hoje + próximos 3 dias) (cache 60min)
    let data = getCachedData("inmet_previsao", 60);
    if (!data) {
      data = await fetchJsonOrText(urlPrev);
      setCachedData("inmet_previsao", data);
    }

    const br = data && data[codigoIBGE] ? data[codigoIBGE] : {};
    const diasKeys = Object.keys(br).sort((a, b) => {
      const [da, ma, ya] = a.split("/").map(Number);
      const [db, mb, yb] = b.split("/").map(Number);
      return ya - yb || ma - mb || da - db;
    });
    if (!diasKeys.length)
      throw new Error("Sem dados de previsão para Brasília");

    const hoje = br[diasKeys[0]];

    // Converte a data da previsão para um objeto Date
    const [d, m, y] = diasKeys[0].split("/");
    const forecastDate = new Date(y, m - 1, d);
    const faseLua = getFaseLua(forecastDate);
    const iconEstacao = ICON_ESTACAO(hoje.manha.estacao);

    // Previsão do dia
    tickerHtml += `<span class="weather-item">
                <span class="weather-day">Previsão do dia:</span>
                <span>${safe(
                  hoje.manha.resumo
                )}</span> <img src="${ICON_TMAX}" class="weather-icon-tmax" alt="Temp. Máx.">Máxima: <span class="weather-max">${safe(
      hoje.manha.temp_max,
      "°C"
    )}</span>
                <img src="${ICON_TMIN}" class="weather-icon-tmin" alt="Temp. Mín.">Mínima: <span class="weather-min">${safe(
      hoje.manha.temp_min,
      "°C"
    )}</span>
                <img src="${ICON_UMAX}" class="weather-icon-umid" alt="Umidade Máx.">Umd. Máx.: <span>${safe(
      hoje.manha.umidade_max,
      "%"
    )}</span>
                <img src="${ICON_UMIN}" class="weather-icon-umid" alt="Umidade Mín.">Umd. Mín.: <span>${safe(
      hoje.manha.umidade_min,
      "%"
    )}</span>
                <img src="${ICON_NASCER}" class="weather-icon-small" alt="Nascer do Sol">
                    Nascer do Sol: ${safe(hoje.manha.nascer)}
                <img src="${ICON_OCASO}" class="weather-icon-small" alt="Pôr do Sol">
                    Pôr do Sol: ${safe(hoje.manha.ocaso)}
                <span class="weather-label">Estação:</span>
                    <img src="${iconEstacao}" class="weather-icon-estacao" alt="Estação" title="${safe(
      hoje.manha.estacao
    )}">
                    <span>${safe(hoje.manha.estacao)}</span>
                <span class="weather-label">Lua:</span>
                    <img src="${
                      faseLua.iconUrl
                    }" class="weather-icon-lua" alt="Lua" title="${safe(
      faseLua.name
    )}">
                    <span>${safe(faseLua.name)}</span>
                </span>`;

    // Previsão períodos de hoje
    ["manha", "tarde", "noite"].forEach((periodo) => {
      if (hoje[periodo]) {
        tickerHtml += `<span class="weather-item">
                            <img src="${
                              hoje[periodo].icone
                            }" class="weather-icon" alt="${periodo}">
                            <span class="weather-day">${capitalize(
                              periodo
                            )}:</span>
                        ${safe(hoje[periodo].resumo)},
                            Vento: ${safe(hoje[periodo].int_vento)} (${safe(
          hoje[periodo].dir_vento
        )})
                        </span>`;
      }
    });

    // Próximos 3 dias
    for (let i = 1; i < 4 && i < diasKeys.length; i++) {
      const dia = br[diasKeys[i]];
      const previsao = dia.manha || dia;
      const umidadeMax = dia.umidade_max || previsao.umidade_max;
      const umidadeMin = dia.umidade_min || previsao.umidade_min;

      // Calcula a fase da lua para cada dia da previsão
      const [d_loop, m_loop, y_loop] = diasKeys[i].split("/");
      const forecastDate_loop = new Date(y_loop, m_loop - 1, d_loop);
      const faseLuaDia = getFaseLua(forecastDate_loop);

      tickerHtml += `<span class="weather-item">
                    <span class="weather-day">${safe(
                      previsao.dia_semana || dia.dia_semana
                    )}:</span>
                    <img src="${
                      previsao.icone
                    }" class="weather-icon" alt="${safe(
        previsao.dia_semana || dia.dia_semana
      )}">
                    <span>${safe(
                      previsao.resumo
                    )}</span> <img src="${ICON_TMAX}" class="weather-icon-tmax" alt="Temp. Máx">Máxima: <span class="weather-max">${safe(
        previsao.temp_max,
        "°C"
      )}</span>
                    <img src="${ICON_TMIN}" class="weather-icon-tmin" alt="Temp. Mín">Mínima: <span class="weather-min">${safe(
        previsao.temp_min,
        "°C"
      )}</span>
                    <img src="${ICON_UMAX}" class="weather-icon-umid" alt="Umidade Max">Umd. Máx.: <span>${safe(
        previsao.umidade_max, // Corrigido: sempre buscar do objeto 'dia'
        "%"
      )}</span>
                    <img src="${ICON_UMIN}" class="weather-icon-umid" alt="Umidade Min">Umd. Mín.: <span>${safe(
        previsao.umidade_min, // Corrigido: sempre buscar do objeto 'dia'
        "%"
      )}</span>
                    <img src="${ICON_WIND}" class="weather-icon-small" alt="Vento">Vento: ${safe(
        previsao.int_vento
      )} (${safe(previsao.dir_vento)}) 
                        <span class="weather-label">Lua:</span>
                        <img src="${
                          faseLuaDia.iconUrl
                        }" class="weather-icon-lua" alt="Lua" title="${safe(
        faseLuaDia.name
      )}">
                        <span>${safe(faseLuaDia.name)}</span>
                  </span>`;
    }
  } catch (e) {
    tickerHtml =
      "Erro ao carregar informações meteorológicas. " + (e.message || e);
    console.error(e);
  }

  document.getElementById("weather-ticker-content").innerHTML = tickerHtml;

  const ticker = document.getElementById("weather-ticker-content");
  ticker.style.animation = "none";
  ticker.style.minWidth = "unset";
  setTimeout(() => {
    const tickerWidth = ticker.scrollWidth;
    const parentWidth = ticker.parentElement.offsetWidth;
    const speedPxPerSec = 140; // Velocidade fixa de 140px/s
    const duration = (tickerWidth + parentWidth) / speedPxPerSec;
    const keyframesName = "ticker-weather-dyn";
    const styleElem =
      document.getElementById("ticker-style-dyn") ||
      (() => {
        const style = document.createElement("style");
        style.id = "ticker-style-dyn";
        document.head.appendChild(style);
        return style;
      })();
    styleElem.innerHTML = `@keyframes ${keyframesName} { 0% { transform: translateX(${parentWidth}px); } 100% { transform: translateX(-${tickerWidth}px); } }`;
    ticker.style.animation = `${keyframesName} ${duration}s linear infinite`;
  }, 30);
}

document.addEventListener("DOMContentLoaded", () => {
  loadWeatherData(); // Carrega os dados na primeira vez

  // Lógica para pausar a animação com o mouse
  const tickerBar = document.getElementById("weather-ticker-bar");
  const tickerContent = document.getElementById("weather-ticker-content");

  if (tickerBar && tickerContent) {
    tickerBar.addEventListener("mouseenter", () => {
      tickerContent.style.animationPlayState = "paused";
    });

    tickerBar.addEventListener("mouseleave", () => {
      tickerContent.style.animationPlayState = "running";
    });
  }
});

// Atualiza os dados a cada 30 minutos
setInterval(loadWeatherData, 30 * 60 * 1000);
