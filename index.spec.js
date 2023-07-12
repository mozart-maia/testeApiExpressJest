const app = require("./server");
const request = require("supertest");

describe("Teste da rota get", () => {
  it("Deve retornar um json com valores da rota get", async () => {
    const res = await request(app).get("/");

    expect(res.body).toHaveProperty("message");
  });
});

describe("Teste da rota post login", () => {
  it("Deve retornar um json com valores da rota post", async () => {
    const res = await request(app).post("/login").send({
      nome: "Mozart",
      senha: "abcd@1234",
    });

    const { nome, senha } = res.body;

    expect(nome).toBe("Mozart");
    expect(senha).toBe("abcd@1234");
  });
});
