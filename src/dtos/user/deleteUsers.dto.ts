import { z } from "zod";

export interface DeleteUsersInputDTO {
  idToDelete: string;
  token: string;
}

export interface DeleteUsersOutputDTO {
  message: string;
}

export const DeleteUsersInputSchema = z.object({
  idToDelete: z.string().min(1),
  token: z.string().min(1),
});
