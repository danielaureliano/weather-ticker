const { capitalize } = require("../src/script.js");

describe("função utilitária capitalize", () => {
  const casosDeTeste = [
    {
      entrada: "hello",
      esperado: "Hello",
      descricao: "deve capitalizar uma string em minúsculas",
    },
    {
      entrada: "Hello",
      esperado: "Hello",
      descricao: "deve manter strings já capitalizadas",
    },
    {
      entrada: "hELLO",
      esperado: "Hello",
      descricao: "deve converter o restante para minúsculas (hELLO)",
    },
    {
      entrada: "WORLD",
      esperado: "World",
      descricao: "deve converter o restante para minúsculas (WORLD)",
    },
    {
      entrada: "jAvAsCrIpT",
      esperado: "Javascript",
      descricao: "deve lidar com strings de caixa mista",
    },
    {
      entrada: "a",
      esperado: "A",
      descricao: "deve lidar com strings de um único caractere (a)",
    },
    {
      entrada: "Z",
      esperado: "Z",
      descricao: "deve lidar com strings de um único caractere (Z)",
    },
    {
      entrada: "",
      esperado: "",
      descricao: "deve retornar vazio para string vazia",
    },
    { entrada: null, esperado: "", descricao: "deve lidar com entrada nula" },
    {
      entrada: undefined,
      esperado: "",
      descricao: "deve lidar com entrada indefinida",
    },
    { entrada: 123, esperado: "", descricao: "deve lidar com números" },
    { entrada: {}, esperado: "", descricao: "deve lidar com objetos" },
    { entrada: [], esperado: "", descricao: "deve lidar com arrays" },
  ];

  casosDeTeste.forEach(({ entrada, esperado, descricao }) => {
    test(descricao, () => {
      expect(capitalize(entrada)).toBe(esperado);
    });
  });
});
