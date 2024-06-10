import Icon from "@components/ui/Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function IconButton({
  icon,
  "data-tooltip": tooltip,
  "data-placement": placement,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className="outline icon"
      style={{ padding: 0, margin: 0 }}
      data-tooltip={tooltip}
      data-placement={placement}
      {...rest}
    >
      <Icon icon={icon} />
    </button>
  );
}

type IconButtonProps = {
  icon: IconProp;
  "data-tooltip"?: string;
  "data-placement"?: "right" | "left" | "bottom";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
} & React.HTMLProps<HTMLButtonElement>;
