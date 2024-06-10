"use client";

import { DialogForm } from "@components/ui/Dialog";
import {
  GetRoleDescription,
  GetRoles,
  Roles,
} from "@/app/services/roles.service";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { userAdd } from "@/app/actions/users/user.actions";

const roles = await GetRoles();

export default function AddUser({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { pending } = useFormStatus();
  const [state, action] = useActionState(userAdd, {
    status: "idle",
  });
  const [roleSelected, setRoleSelected] =
    useState<(typeof roles)[number]>("ADMIN");

  if (state.status === "success") onClose();
  return (
    <DialogForm
      formAttr={{ action }}
      title="✨ Agregar Usuario"
      footer={
        <nav>
          <ul>
            <li className={state.status}>{state.message}</li>
          </ul>
          <ul>
            <li>
              <input
                type="reset"
                value="Cancelar"
                className="text secondary"
                onClick={onClose}
              />
            </li>
            <li>
              <input type="submit" value="Guardar" aria-disabled={pending} />
            </li>
          </ul>
        </nav>
      }
      onClose={onClose}
      isOpen={isOpen}
    >
      <fieldset>
        <label>
          Nombre
          <input
            name="alias"
            placeholder="Nombre"
            autoComplete="off"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <small>
            Debe ingresar el email que el usuario utilizará para iniciar sesión.
          </small>
        </label>
        <label>
          Rol
          <select
            name="role"
            value={roleSelected}
            onChange={(e) => setRoleSelected(e.target.value as Roles[number])}
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <small>{GetRoleDescription(roleSelected)}</small>
        </label>
      </fieldset>
    </DialogForm>
  );
}
