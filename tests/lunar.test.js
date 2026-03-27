const { getLunarDay, getFaseLua } = require("../src/script.js");

describe("Lógica da Fase da Lua", () => {
  test("getLunarDay deve retornar 0 para a Lua Nova de referência (1970-01-07)", () => {
    const knownNewMoon = new Date("1970-01-07T00:00:00Z");
    // getLunarDay usa Date.UTC internamente para a data alvo
    expect(getLunarDay(knownNewMoon)).toBe(0);
  });

  test('getFaseLua deve retornar "Nova" para a data de referência', () => {
    const knownNewMoon = new Date("1970-01-07T00:00:00Z");
    const result = getFaseLua(knownNewMoon);
    expect(result.name).toBe("Nova");
    expect(result.iconUrl).toContain("0.png");
  });

  test('getFaseLua deve retornar "Cheia" aproximadamente 14.7 dias após a Lua Nova', () => {
    // 1970-01-07 + 15 dias (aproximadamente cheia)
    const midCycle = new Date("1970-01-22T00:00:00Z");
    const result = getFaseLua(midCycle);
    expect(result.name).toBe("Cheia");
    expect(result.iconUrl).toContain("4.png");
  });

  test("getLunarDay deve ser consistente entre 0 e 29.53", () => {
    const date = new Date("2024-03-27T12:00:00Z");
    const lunarDay = getLunarDay(date);
    expect(lunarDay).toBeGreaterThanOrEqual(0);
    expect(lunarDay).toBeLessThan(29.54);
  });

  test("getFaseLua deve retornar um objeto com nome e ícone válidos", () => {
    const result = getFaseLua(new Date());
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("iconUrl");
    expect(typeof result.name).toBe("string");
    expect(result.iconUrl).toMatch(
      /^https:\/\/portal\.inmet\.gov\.br\/uploads\/luas\/\d\.png$/
    );
  });
});
