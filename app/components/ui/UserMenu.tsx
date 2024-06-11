import { auth } from '@/auth'

import Link from 'next/link'
import { isAdminUser } from '@/app/services/users.service'
import { IconButtonMenu } from './IconButtonMenu'

export default async function UserMenu() {
  const session = await auth()
  const isAdmin = await isAdminUser(session?.user?.email)

  return (
    <div className="grid">
      {isAdmin && (
        <IconButtonMenu
          href="/users"
          icon="user-gear"
          tooltip="Gestionar usuarios"
        />
      )}
    </div>
  )
}
