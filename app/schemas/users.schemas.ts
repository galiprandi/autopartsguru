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
  picture: string()
    .url({
      message: "La URL de la imagen no es válida.",
    })
    .optional(),
  role: z.enum(UsersRoles, {
    message: "El rol seleccionado no es válido.",
  }),
  active: z.boolean().default(true),
});
export type BasicUser = z.infer<typeof BasicUserSchema>;
