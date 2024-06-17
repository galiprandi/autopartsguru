"use client";
import { userAddAction } from "@/app/actions/users/user.actions";
import { Roles } from "@/app/services/roles.service";
import { GetUserByEmailService } from "@/app/services/users.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

const status = "idle";

export default function UpdateUserForm({
  roles,
  user,
}: {
  roles: Roles;
  user: User;
}) {
  const router = useRouter();
  const [state, action] = useActionState(userAddAction, { status });
  const { email, alias, picture, active } = user;

  if (state.status === "success") router.push("/users");

  return (
    <>
      <form action={action}>
        <div className="grid">
          <fieldset>
            <label>
              Email
              <input
                name="email"
                autoComplete="off"
                defaultValue={email ?? ""}
                readOnly
              />
            </label>

            <label>
              Nombre
              <input
                name="alias"
                autoComplete="off"
                defaultValue={alias ?? ""}
              />
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
              src={picture ?? "/images/avatar.webp"}
              alt={alias ?? "Avatar"}
              width={250}
              height={250}
            />
          </div>
        </div>
      </form>
    </>
  );
}

type User = NonNullable<Awaited<ReturnType<typeof GetUserByEmailService>>>;
