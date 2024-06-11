import { signIn } from '@/auth'
import Icon from '@components/ui/Icon'
import { IconButtonMenu } from '../ui/IconButtonMenu'
import { IconButton } from '../ui/IconButton'

export async function SignInButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github', { redirectTo: '/home' })
      }}
    >
      <IconButton
        type="submit"
        href=""
        icon="user-large"
        tooltip="Iniciar con Google"
        placement="right"
        className="icon inverse"
      />
    </form>
  )
}
