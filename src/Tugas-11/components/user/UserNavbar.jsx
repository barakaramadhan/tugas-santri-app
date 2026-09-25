import { Link, useNavigate } from "react-router"; // 1. Tambahkan useNavigate
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/Tugas-11/Pages/Auth/store/useAuthStore";


function UserNavbar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Hapus session
    navigate("/sign-in", { replace: true }); // Lempar ke login
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">
          User Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Selamat datang kembali, <span className="font-medium text-foreground">{user?.name || "User"}</span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          asChild
          variant="outline"
          className="rounded-lg"
        >
          <Link to="/user/myprofile">
            My Profile
          </Link>
        </Button>

        {/* Tombol Logout */}
        <Button
          variant="destructive"
          className="rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default UserNavbar;