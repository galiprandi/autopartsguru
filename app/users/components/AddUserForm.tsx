"use client";

import { DialogForm } from "@components/ui/Dialog";
import { useRouter } from "next/navigation";
import {
  GetRoleDescription,
  GetRoles,
  Roles,
} from "@/app/services/roles.service";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { userAdd } from "@/app/actions/users/user.actions";

export const AddUserForm = ({ roles }: { roles: Roles }) => {
  const router = useRouter();
  const { pending } = useFormStatus();
  const [isOpen, setIsOpen] = useState(false);
  const [state, action] = useActionState(userAdd, {
    status: "idle",
  });
  const [roleSelected, setRoleSelected] =
    useState<(typeof roles)[number]>("USER");

  if (state.status === "success") {
    setIsOpen(false);
    router.push("/users");
  }

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
                onClick={() => setIsOpen(false)}
              />
            </li>
            <li>
              <input type="submit" value="Guardar" aria-disabled={pending} />
            </li>
          </ul>
        </nav>
      }
      onClose={() => setIsOpen(false)}
      isOpen={isOpen}
      openner={<button onClick={() => setIsOpen(true)}>Agregar Usuario</button>}
    >
      <fieldset>
        <label>
          Nombre
          <input name="alias" autoComplete="off" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="off" required />
        </label>

        <label>
          Rol
          <select
            name="role"
            value={roleSelected}
            onChange={({ target: { value } }) =>
              setRoleSelected(value as Roles[number])
            }
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <small>{GetRoleDescription(roleSelected)}</small>
      </fieldset>
    </DialogForm>
  );
};
