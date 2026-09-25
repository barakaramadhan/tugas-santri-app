import { Link, useNavigate } from "react-router";
import { useAuthStore } from "@/Tugas-11/Pages/Auth/store/useAuthStore"; // 1. Import useNavigate


import {
  Sidebar,
  SidebarContent,
  SidebarFooter, // 3. Tambahkan SidebarFooter
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

function UserSidebar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  // Handler untuk menghapus session & redirect
  const handleLogout = () => {
    logout();
    navigate("/sign-in", { replace: true });
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-background">
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            User Menu
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-10 rounded-lg px-3 text-sm font-medium hover:bg-muted"
                >
                  <Link to="/user">Dashboard</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-10 rounded-lg px-3 text-sm font-medium hover:bg-muted"
                >
                  <Link to="/user/myprofile">My Profile</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Tombol Logout Menggunakan onClick */}
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M9 12h12l-3 -3" />
                    <path d="M18 15l3 -3" />
                  </svg>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Info User di Pojok Bawah Sidebar */}
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="flex flex-col overflow-hidden text-left">
            <span className="truncate text-sm font-medium text-foreground">
              {user?.name || "User"}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              {user?.email || "user@example.com"}
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default UserSidebar;