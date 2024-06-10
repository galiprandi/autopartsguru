import IconButton from "@components/ui/IconButton";
import { FormHTMLAttributes, ReactNode } from "react";

export function Dialog(props: DialogProps) {
  const { isOpen, ...rest } = props;

  if (!isOpen) return null;
  return (
    <dialog open={isOpen}>
      <DialogBody {...rest} />
    </dialog>
  );
}

export function DialogForm(props: DialogFormProps) {
  const { formAttr, isOpen, ...rest } = props;

  if (!isOpen) return null;
  return (
    <form {...formAttr}>
      <dialog open={isOpen}>
        <DialogBody {...rest} />
      </dialog>
    </form>
  );
}

const DialogBody = ({ title, onClose, children, footer }: DialogProps) => {
  return (
    <article>
      <header>
        <nav>
          <ul>
            <li>{typeof title === "string" ? <h2>{title}</h2> : title}</li>
          </ul>
          {onClose && (
            <ul>
              <li>
                <IconButton icon={"xmark"} onClick={onClose} />
              </li>
            </ul>
          )}
        </nav>
      </header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </article>
  );
};

type DialogProps = {
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  isOpen?: boolean;
};

type DialogFormProps = DialogProps & {
  formAttr?: FormHTMLAttributes<HTMLFormElement>;
};
