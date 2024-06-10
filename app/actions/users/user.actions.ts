"use server";

import { z } from "zod";
import { UsersRoles } from "@/app/services/roles.service";
import {
  AddUserService,
  GetUserByEmailService,
} from "@/app/services/users.service";

const { object, string } = z;

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
    const data = UserAddSchema.parse(rawData);

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

const UserAddSchema = z.object({
  alias: string({
    required_error: "Ingrese un nombre para el usuario.",
  }).min(4, {
    message: "El nombre es demasiado corto.",
  }),
  email: string({
    required_error: "Ingrese un correo electrónico.",
  }).email({
    message: "Correo electrónico no válido.",
  }),
  role: z.enum(UsersRoles, {
    message: "El rol seleccionado no es válido.",
  }),
});

type UserAddState = {
  status: "idle" | "success" | "error";
  message?: string;
};
