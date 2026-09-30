import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuthStore } from "@/Tugas-11/Pages/Auth/store/useAuthStore";

function AdminNavbar() {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <div>
          <h2 className="text-sm font-semibold">
            Admin Dashboard
          </h2>
          <p className="text-xs text-muted-foreground">
            Kelola aplikasi dan pengguna
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium">
            {user?.name || "Admin"}
          </p>

          <p className="text-xs text-muted-foreground">
            Administrator
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
          {user?.name?.charAt(0).toUpperCase() || "A"}
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;