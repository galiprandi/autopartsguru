"use client";
import { userAdd } from "@/app/actions/users/user.actions";
import { IconButton } from "@/app/components/ui/IconButton";
import { Roles } from "@/app/services/roles.service";
import { GetUserByEmailService } from "@/app/services/users.service";
import Image from "next/image";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function UpdateUserForm({
  roles,
  user,
}: {
  roles: Roles;
  user: User;
}) {
  const { pending } = useFormStatus();
  const [state, action] = useActionState(userAdd, {
    status: "idle",
  });
  const { alias, email, picture, active } = user;
  return (
    <form action={action}>
      <div className="grid">
        <fieldset>
          <fieldset role="group">
            <input
              type="email"
              name="email"
              autoComplete="off"
              readOnly
              defaultValue={email}
            />
            <IconButton
              type="button"
              className="icon error"
              icon="edit"
              title="Cambiar email"
              size={30}
              onClick={() => console.log("Change email")}
            />
            {/* <input type="button" value="Change" /> */}
          </fieldset>
          <label>
            Nombre
            <input name="alias" autoComplete="off" defaultValue={alias ?? ""} />
          </label>

          <label>
            Rol
            <select name="role" defaultValue={user?.role || "USER"}>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>

          <label>
            <input
              name="active"
              type="checkbox"
              role="switch"
              defaultChecked={active}
            />
            Usuario activo
          </label>

          <br />

          <input type="submit" value="Actualizar" />
          <small>{state.message}</small>
        </fieldset>
        <div className="t-center">
          <Image
            className="rounded"
            src={user?.picture ?? "/images/avatar.webp"}
            alt={alias ?? "Avatar"}
            width={250}
            height={250}
          />
        </div>
      </div>
    </form>
  );
}

type User = NonNullable<Awaited<ReturnType<typeof GetUserByEmailService>>>;
