import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold">
          GameTracker
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            to="/wishlist"
            className="text-sm font-medium hover:text-primary"
          >
            Wishlist
          </Link>
        </nav>
      </div>
    </header>
  );
};
