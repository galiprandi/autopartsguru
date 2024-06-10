import { DB } from "@/lib/db/db";

export const GetUserByEmail = async (email: string) =>
  await DB.user.findFirst({
    where: {
      email,
    },
    select: {
      id: true,
      alias: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

export const GetUsers = async (
  ...params: Parameters<typeof DB.user.findMany>
) => await DB.user.findMany(...params);

export const isAdminUser = async (email?: string | null) => {
  if (!email) return false;
  const user = await DB.user.findFirst({
    where: {
      email,
      role: "ADMIN",
    },
    select: {
      id: true,
    },
  });
  return !!user;
};
