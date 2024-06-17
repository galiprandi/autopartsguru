import { z } from "zod";
const { object, string } = z;

import { UsersRoles } from "@/app/services/roles.service";

export const BasicUserSchema = z.object({
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
export type BasicUser = z.infer<typeof BasicUserSchema>;
