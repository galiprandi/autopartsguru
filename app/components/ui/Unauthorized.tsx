import Link from "next/link";
import Icon from "./Icon";

export const Unauthorized = () => {
  return (
    <dialog open>
      <article>
        <header>
          <h2>🛡️ Unauthorized!</h2>
        </header>
        <p>
          You do not have permission to access this page. Please contact your
          administrator
        </p>
        <p>Check the following:</p>
        <ul>
          <li>Are you logged with the correct user?</li>
          <li>Do you have the correct user role?</li>
          <li>Do do you have a valid membership?</li>
        </ul>
        <footer>
          <Link href="/" role="button">
            Go to Home
          </Link>
        </footer>
      </article>
    </dialog>
  );
};
