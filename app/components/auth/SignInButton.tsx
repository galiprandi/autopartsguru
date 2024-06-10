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
        className="contrast icon"
        style={{ padding: 0, margin: 0 }}
      >
        <Icon icon="user-large" />
      </button>
    </form>
  );
}
