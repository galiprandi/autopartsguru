"use server";

import { BasicUserSchema } from "@/app/schemas/users.schemas";
import {
  AddUserService,
  GetUserByEmailService,
  UpdateUserService,
} from "@/app/services/users.service";
import { z } from "zod";

/**
 * Add new user to the system.
 * @param state Current state.
 * @param formData User data.
 * @returns New state.
 */
export async function userAddAction(
  state: UserAddState,
  formData: FormData
): Promise<UserAddState> {
  try {
    const rawData = {
      alias: formData.get("alias"),
      email: formData.get("email"),
      role: formData.get("role"),
      active: formData.get("active") === "on",
    };

    const validatedData = BasicUserSchema.parse(rawData);

    // Check if email already exists
    const existUser = await GetUserByEmailService(validatedData.email);

    if (existUser) {
      const { email: _email, ...data } = validatedData;
      await UpdateUserService(existUser.email, data);
      return {
        status: "success",
        message: `El usuario ha sido actualizado.`,
      };
    }

    // Add user
    const user = await AddUserService(validatedData);
    return {
      status: "success",
      message: `Usuario ${user.alias} ${
        existUser ? "actualizado" : "agregado"
      } correctamente.`,
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

/**
 * Update user data
 */
export async function userUpdateAction(
  state: UserAddState,
  formData: FormData
) {
  const rawData = {
    alias: formData.get("alias"),
    email: formData.get("email"),
    role: formData.get("role"),
    active: formData.get("active") === "on",
  };

  const validatedData = BasicUserSchema.parse(rawData);

  // Check if email already exists
  const existUser = await GetUserByEmailService(validatedData.email);
  if (!existUser) {
    return {
      status: "error",
      message: `El usuario no existe.`,
    };
  }

  const updated = await UpdateUserService(existUser.email, validatedData);

  return {
    status: "success",
    message: `Usuario ha sido actualizado.`,
  };
}

type UserAddState = {
  status: "idle" | "success" | "error";
  message?: string;
};
