import { Outlet, Navigate } from "react-router"; // 1. Tambahkan Navigate di sini
import { SidebarProvider } from "../../components/ui/sidebar";
import AdminSidebar from "../admin/AdminSidebar";
import { useAuthStore } from "../Pages/Auth/store/useAuthStore";
// import { useAuthStore } from "../"; // 2. Tambahkan import useAuthStore (sesuaikan path-nya)

export default function AdminLayout() {
  const user = useAuthStore((state) => state.user); 

  // TAMBAHKAN INI UNTUK DEBUGGING
  console.log("Data user di AdminLayout:", user);

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  if (user.role !== "admin") {
    // Kalau console.log di atas isinya "admin" tapi tetap masuk ke sini,
    // berarti ada anomali lain.
    console.log("User bukan admin, melempar ke /user..."); 
    return <Navigate to="/user" replace />;
  }
  return (
    <SidebarProvider>
      <AdminSidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}