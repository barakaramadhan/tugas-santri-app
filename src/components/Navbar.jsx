
import { SidebarTrigger } from "./ui/sidebar";

function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex h-14 shrink-0 items-center gap-4 border-b border-border bg-background/95 px-4 backdrop-blur">

      {/* Sidebar Button */}
      <SidebarTrigger className="-ml-1" />

      {/* Divider */}
      <div className="h-5 w-px bg-border" />

      {/* App Name */}
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-600" />

        <span className="text-sm font-semibold tracking-tight text-foreground">
          SantriApp
        </span>
      </div>

    </nav>
  );
}

export default Navbar;

