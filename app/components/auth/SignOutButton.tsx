import { auth, signOut } from '@/auth'
import Image from 'next/image'
import Icon from '@components/ui/Icon'
import { IconButtonMenu } from '../ui/IconButtonMenu'

export async function SignOutButton() {
  const session = await auth()

  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      {session?.user?.image ? (
        <button
          type="submit"
          className="icon rounded"
          data-tooltip="Cerrar sesión"
          data-placement="right"
        >
          <Image
            src={session?.user?.image}
            alt={session?.user?.name ?? 'Avatar'}
            width={38}
            height={38}
            style={{ borderRadius: '50%' }}
          />
        </button>
      ) : (
        <IconButtonMenu
          href="/"
          icon="right-from-bracket"
          tooltip="Cerrar sesión"
        />
      )}
    </form>
  )
}
