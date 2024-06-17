"use client";

import { DialogForm } from "@components/ui/Dialog";
import { useRouter } from "next/navigation";
import { GetRoleDescription, Roles } from "@/app/services/roles.service";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { userAdd } from "@/app/actions/users/user.actions";
import { BasicUser } from "@/app/schemas/users.schemas";

export const AddUserForm = ({
  roles,
  user,
}: {
  roles: Roles;
  user?: BasicUser;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { pending } = useFormStatus();
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
          <input
            name="alias"
            autoComplete="off"
            required
            defaultValue={user?.alias}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            autoComplete="off"
            required
            defaultValue={user?.email}
            readOnly={!!user?.email}
          />
        </label>

        <label>
          Rol
          <select
            name="role"
            defaultValue={user?.role || "USER"}
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
