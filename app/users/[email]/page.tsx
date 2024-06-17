import { GetRoles } from "@/app/services/roles.service";
import { GetUserByEmailService } from "@/app/services/users.service";
import Image from "next/image";
import UpdateUserForm from "../components/UpdateUserForm";

export default async function UserProfile({ params }: PageProps) {
  const email = decodeURIComponent(params.email);
  const user = await GetUserByEmailService(email);
  const roles = await GetRoles();

  if (!user) return <h1>User not found </h1>;

  return <UpdateUserForm user={user} roles={roles} />;
}

type PageProps = {
  params: { email: string };
};
