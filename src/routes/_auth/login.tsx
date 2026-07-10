import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/features/auth/components/LoginForm";

export const Route = createFileRoute("/_auth/login")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <section className="w-full max-w-md px-4">
      <LoginForm />
    </section>
  );
}
