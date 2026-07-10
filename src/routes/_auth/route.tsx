import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Outlet />
    </main>
  );
}
