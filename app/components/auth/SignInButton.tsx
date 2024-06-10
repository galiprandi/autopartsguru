import { signIn } from "@/auth";
import Icon from "@components/ui/Icon";

export async function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/home" });
      }}
    >
      <button
        type="submit"
        className="outline icon"
        style={{ padding: 0, margin: 0 }}
        data-tooltip="Sign in with Google"
        data-placement="right"
      >
        <Icon icon="user-large" />
      </button>
    </form>
  );
}
