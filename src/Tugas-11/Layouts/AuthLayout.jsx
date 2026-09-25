import { Outlet, Navigate } from "react-router"; // 1. Tambahkan Navigate
import Walpaper from "../Assets/walpaper.jpeg";
import { useAuthStore } from "../Pages/Auth/store/useAuthStore"; // 2. Tambahkan import useAuthStore (sesuaikan path-nya ya)

export default function AuthLayout() {
  // 3. Ambil data user
  const user = useAuthStore((state) => state.user);

  // 4. Logika pelindung: Jika sudah login, tendang ke halaman masing-masing
  if (user) {
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/user" replace />;
  }

  // 5. Jika belum login, tampilkan desain asli kamu
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <img
        src={Walpaper}
        alt="Auth Illustration"
        className="hidden md:block w-1/2 h-full object-cover"
      />

      <div className="w-full md:w-1/2 h-full flex items-start justify-center p-8 pt-24 bg-background overflow-y-auto">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}