import { DB } from "@/lib/db/db";

/**
 * Get user by email.
 * @param email
 * @returns User
 */
export const GetUserByEmailService = async (email: string) =>
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

/**
 * Get all users.
 * @param params
 * @returns List of users
 * */
export const GetUsersService = async (
  ...params: Parameters<typeof DB.user.findMany>
) => await DB.user.findMany(...params);

/**
 * Check if user is admin.
 * @param email
 * @returns Boolean
 */
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

export const AddUserService = async (
  data: Parameters<typeof DB.user.create>[0]["data"]
) => DB.user.create({ data });
