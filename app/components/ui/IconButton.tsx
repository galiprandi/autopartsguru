import Icon from '@components/ui/Icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const IconButton = ({
  icon,
  tooltip,
  placement,
  ...rest
}: IconButtonProps) => {
  return (
    <button
      className="icon"
      data-tooltip={tooltip}
      data-placement={placement}
      {...rest}
    >
      <Icon icon={icon} />
    </button>
  )
}

type IconButtonProps = {
  icon: IconProp
  tooltip?: string
  placement?: 'right' | 'left' | 'bottom'
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
} & React.HTMLProps<HTMLButtonElement>
