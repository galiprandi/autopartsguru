import { GetRoles } from "@/app/services/roles.service";
import { GetUserByEmailService } from "@/app/services/users.service";
import Image from "next/image";

export default async function UserProfile({ params }: PageProps) {
  const email = decodeURIComponent(params.email);
  const user = await GetUserByEmailService(email);
  const roles = await GetRoles();

  if (!user) return <h1>User not found </h1>;

  const { alias, email: userEmail, role } = user;
  return (
    <form>
      <div className="grid">
        <fieldset>
          <label>
            Nombre
            <input name="alias" autoComplete="off" defaultValue={alias ?? ""} />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              autoComplete="off"
              readOnly
              defaultValue={email}
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
            <input name="active" type="checkbox" role="switch" />
            Usuario activo
          </label>
          <input type="submit" value="Actualizar" />
        </fieldset>
        <div className="t-center">
          <Image
            className="rounded"
            src={user?.picture ?? "/images/avatar.png"}
            alt={alias ?? "Avatar"}
            width={250}
            height={250}
          />
        </div>
      </div>
    </form>
  );
}

type PageProps = {
  params: { email: string };
};
