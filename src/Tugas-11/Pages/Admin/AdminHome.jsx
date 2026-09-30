import { useAuthStore } from "../Auth/store/useAuthStore";

import {
  Users,
  ShieldCheck,
  UserCheck,
  Activity,
  ArrowRight,
  UserPlus,
  Database,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router";

function AdminHome() {
  const user = useAuthStore((state) => state.user);
  const users = useAuthStore((state) => state.users);

  const totalUsers =
    users?.filter((user) => user.role === "user").length || 0;

  const totalAdmins =
    users?.filter((user) => user.role === "admin").length || 0;

  const totalAccounts = users?.length || 0;

  const recentUsers = users?.slice(-3).reverse() || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard Admin
        </h1>

        <p className="mt-1 text-muted-foreground">
          Selamat datang kembali, {user?.name || "Admin"}.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Akun
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {totalAccounts}
              </h2>
            </div>

            <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Santri
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {totalUsers}
              </h2>
            </div>

            <div className="rounded-lg bg-green-100 p-3 text-green-600">
              <UserCheck className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Administrator
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {totalAdmins}
              </h2>
            </div>

            <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Status Sistem
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Aktif
              </h2>
            </div>

            <div className="rounded-lg bg-emerald-100 p-3 text-emerald-600">
              <Activity className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Users */}
        <div className="rounded-xl border bg-card shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b p-6">
            <div>
              <h2 className="text-xl font-semibold">
                Pengguna Terbaru
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Daftar pengguna yang tersimpan di sistem.
              </p>
            </div>

            <Link
              to="/admin/users"
              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Lihat Semua
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="divide-y">
            {recentUsers.length > 0 ? (
              recentUsers.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                      {item.name?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <p className="font-medium">
                        {item.name}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {item.email}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.role === "admin"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.role === "admin"
                      ? "Administrator"
                      : "Santri"}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-sm text-muted-foreground">
                Belum ada data pengguna.
              </div>
            )}
          </div>
        </div>

        {/* Quick Action */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold">
              Quick Action
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Akses cepat untuk mengelola aplikasi.
            </p>
          </div>

          <div className="mt-6 space-y-3">
            <Link
              to="/admin/users"
              className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted"
            >
              <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                <Users className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold">
                  Kelola User
                </p>

                <p className="text-xs text-muted-foreground">
                  Lihat data pengguna
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>

            <div className="flex items-center gap-3 rounded-lg border p-4">
              <div className="rounded-lg bg-green-100 p-2 text-green-600">
                <UserPlus className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold">
                  Total Pengguna
                </p>

                <p className="text-xs text-muted-foreground">
                  {totalAccounts} akun terdaftar
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border p-4">
              <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                <Database className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold">
                  Database
                </p>

                <p className="text-xs text-muted-foreground">
                  Data tersimpan dengan baik
                </p>
              </div>

              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Current Admin */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold">
            Informasi Administrator
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Data akun administrator yang sedang login.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
            {user?.name?.charAt(0).toUpperCase() || "A"}
          </div>

          <div>
            <p className="font-semibold">
              {user?.name || "Admin"}
            </p>

            <p className="text-sm text-muted-foreground">
              {user?.email || "-"}
            </p>

            <span className="mt-1 inline-block text-xs font-medium text-primary">
              Administrator
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;