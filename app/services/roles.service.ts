/**
 * Get all roles
 * @returns {Promise<string[]>} List of roles
 *
 */
export type Roles = Awaited<ReturnType<typeof GetRoles>>;
export const GetRoles = async () => ["ADMIN", "USER"] as const;

/**
 * Get role description
 * @param {Roles[number]} role - Role
 * @returns {string} Role description
 *
 */
export const GetRoleDescription = (role: Roles[number]) =>
  roleDescription[role];
const roleDescription: Record<Roles[number], string> = {
  ADMIN:
    "Usuario con acceso total, puede gestionar todo lo relacionado con su compañía.",
  USER: "Usuario con acceso limitado, todos los usuarios que no tengan un rol definido.",
};
