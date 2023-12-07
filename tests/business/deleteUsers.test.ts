import { DeleteUsersInputDTO } from "../../src/dtos/user/deleteUsers.dto";
import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { UserBusiness } from "../../src/business/UserBusiness";

describe("Testando getUsers", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new TokenManagerMock(),
    new HashManagerMock()
  );

  test("deve deletar um usuário existente", async () => {
    const input: DeleteUsersInputDTO = {
      // Pegar o id de quem esta sendo deletado no arquivo UserDatabaseMock
      idToDelete: "id-mock-fulano",
      token: "token-mock-astrodev", // Pegar o id de quem esta deletando no TokenManagerMock
    };

    const output = await userBusiness.deleteUsers(input);

    expect(output).toEqual({
      message: "Usuário deletado com sucesso",
    });
  });
});
