import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { USER_ROLES, UserModel } from "../../src/models/User";

describe("Testando busca de usuários por id", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("Deve retornar uma lista mockada", async () => {
    const input = {
      id: "id-mock-fulano",
      token: "token-mock-astrodev",
    };

    const output = await userBusiness.getUsersById(input);
    const userU001: UserModel = {
      id: "id-mock-fulano",
      name: "Fulano",
      email: "fulano@email.com",
      // senha = "fulano123"
      role: USER_ROLES.NORMAL,
      createdAt: expect.any(String),
    };

    expect(output).toEqual(userU001);
  });
});
