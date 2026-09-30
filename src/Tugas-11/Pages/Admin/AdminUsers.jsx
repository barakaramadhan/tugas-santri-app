import { useAuthStore } from "../Auth/store/useAuthStore";
import { Users, ShieldCheck, UserCircle } from "lucide-react";

function AdminUsers() {
  const users = useAuthStore((state) => state.users);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Data User
        </h1>

        <p className="mt-1 text-muted-foreground">
          Kelola dan lihat seluruh data pengguna yang terdaftar.
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
              <Users className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Total Akun
              </p>

              <p className="text-2xl font-bold">
                {users?.length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-green-100 p-3 text-green-600">
              <UserCircle className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Santri
              </p>

              <p className="text-2xl font-bold">
                {users?.filter((user) => user.role === "user").length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Administrator
              </p>

              <p className="text-2xl font-bold">
                {users?.filter((user) => user.role === "admin").length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">
            Daftar Pengguna
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Data seluruh akun yang terdaftar di aplikasi.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  No
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Nama
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Role
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {users?.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b last:border-0 hover:bg-muted/30"
                >
                  <td className="px-6 py-4 text-sm">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
                        {item.name?.charAt(0).toUpperCase()}
                      </div>

                      <span className="font-medium">
                        {item.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {item.email}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        item.role === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.role === "admin"
                        ? "Administrator"
                        : "Santri"}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      Aktif
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;