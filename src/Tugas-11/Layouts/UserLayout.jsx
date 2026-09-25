import { Outlet, Navigate } from "react-router"; // 1. Tambahkan Navigate

import UserNavbar from "../components/user/UserNavbar";
import UserSidebar from "../components/user/UserSidebar";

import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuthStore } from "../Pages/Auth/store/useAuthStore"; // 2. Import useAuthStore (sesuaikan path-nya jika beda)

function UserLayout() {
  // 3. Ambil data user dari store
  const user = useAuthStore((state) => state.user);

  // 4. Proteksi: Jika BELUM login, langsung lempar ke /sign-in
  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <SidebarProvider>
      <UserSidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <UserNavbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default UserLayout;