'use client'

import { ComponentProps } from 'react'
import { IconButton } from './IconButton'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const IconButtonMenu = ({
  href,
  icon,
  tooltip,
  placement = 'right',
}: {
  href: string
  icon: ComponentProps<typeof IconButton>['icon']
  tooltip: ComponentProps<typeof IconButton>['tooltip']
  placement?: ComponentProps<typeof IconButton>['placement']
}) => {
  const path = usePathname()

  return (
    <Link href={href}>
      <IconButton
        className={`icon inverse ${path === href ? 'active' : 'inactive'}`}
        icon={icon}
        tooltip={tooltip}
        placement={placement}
      />
    </Link>
  )
}
