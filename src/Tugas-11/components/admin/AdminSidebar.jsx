import { Link, useNavigate } from "react-router";
import { useAuthStore } from "@/Tugas-11/Pages/Auth/store/useAuthStore";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

function AdminSidebar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/sign-in", { replace: true });
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-background">
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Admin Menu
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-10 rounded-lg px-3 text-sm font-medium hover:bg-muted"
                >
                  <Link to="/admin">Dashboard</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-10 rounded-lg px-3 text-sm font-medium hover:bg-muted"
                >
                  <Link to="/admin/users">Data User</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={handleLogout}
                  className="h-10 w-full justify-between rounded-lg px-3 text-sm font-medium text-destructive hover:bg-destructive/10 hover:text-destructive"
                >
                  <span>Logout</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
            {user?.name?.charAt(0).toUpperCase() || "A"}
          </div>

          <div className="flex flex-col overflow-hidden text-left">
            <span className="truncate text-sm font-medium text-foreground">
              {user?.name || "Admin"}
            </span>

            <span className="truncate text-xs text-muted-foreground">
              {user?.email || "admin@example.com"}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AdminSidebar;