import { Outlet } from "react-router";
import NavbarGuest from "@/components/NavbarGuest";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar Khusus Guest (Tanpa SidebarTrigger) */}
      <NavbarGuest />

      {/* Tempat Rendernya Landing Page / Form Login */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Outlet />
      </main>
    </div>
  );
}