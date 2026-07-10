import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
