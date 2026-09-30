import { Outlet, Navigate } from "react-router";
import { SidebarProvider } from "../../components/ui/sidebar";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";
import { useAuthStore } from "../Pages/Auth/store/useAuthStore";

export default function AdminLayout() {
  const user = useAuthStore((state) => state.user);

  console.log("Data user di AdminLayout:", user);

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  if (user.role !== "admin") {
    console.log("User bukan admin, melempar ke /user...");
    return <Navigate to="/user" replace />;
  }

  return (
    <SidebarProvider>
      <AdminSidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <AdminNavbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}