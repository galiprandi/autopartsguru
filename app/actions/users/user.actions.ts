"use server";

import { BasicUserSchema } from "@/app/schemas/users.schemas";
import {
  AddUserService,
  GetUserByEmailService,
} from "@/app/services/users.service";
import { z } from "zod";

/**
 * Add new user to the system.
 * @param state Current state.
 * @param formData User data.
 * @returns New state.
 */
export async function userAdd(
  state: UserAddState,
  formData: FormData
): Promise<UserAddState> {
  try {
    const rawData = {
      alias: formData.get("alias"),
      email: formData.get("email"),
      role: formData.get("role"),
    };
    const data = BasicUserSchema.parse(rawData);

    // Check if email already exists
    const existUser = await GetUserByEmailService(data.email);

    if (existUser) {
      return {
        status: "error",
        message: `El correo electrónico ya existe.`,
      };
    }

    // Add user
    const user = await AddUserService(data);
    return {
      status: "success",
      message: `Usuario ${user.alias} agregado correctamente.`,
    };
  } catch (error) {
    console.error(error);
    let message = "Error al agregar usuario.";
    if (error instanceof z.ZodError) message = error.errors[0].message;
    return {
      message,
      status: "error",
    };
  }
}

type UserAddState = {
  status: "idle" | "success" | "error";
  message?: string;
};
