"use server";

import { stat } from "fs";

/**
 * Add new user to the system.
 */

type UserAddState = {
  status: "idle" | "success" | "error";
  message?: string;
};
export async function userAdd(
  state: UserAddState,
  formData: FormData
): Promise<UserAddState> {
  try {
    const userData = {
      alias: formData.get("alias"),
      email: formData.get("email"),
      role: formData.get("role"),
    };

    console.log("userAdd", userData);
    throw new Error("Not implemented");

    return {
      status: "success",
      message: `Usuario ${userData.alias} agregado correctamente.`,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Error al agregar usuario.",
    };
  }
}
