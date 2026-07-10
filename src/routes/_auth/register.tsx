import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export const Route = createFileRoute("/_auth/register")({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <section className="w-full max-w-md px-4">
      <RegisterForm />
    </section>
  );
}
