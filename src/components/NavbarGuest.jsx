import { Link } from "react-router";

function NavbarGuest() {
  return (
    <nav className="sticky top-0 z-40 flex h-14 shrink-0 items-center justify-between border-b border-border bg-background/95 px-6 backdrop-blur">
      {/* App Name / Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-600" />
        <span className="text-sm font-semibold tracking-tight text-foreground">
          SantriApp
        </span>
      </Link>

      {/* Tombol Sign In */}
      <Link 
        to="/login" 
        className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign In
      </Link>
    </nav>
  );
}

export default NavbarGuest;