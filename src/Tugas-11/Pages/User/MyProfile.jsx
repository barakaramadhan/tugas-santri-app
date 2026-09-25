import { useAuthStore } from "../Auth/store/useAuthStore"; // Sesuaikan path-nya
import { Button } from "@/components/ui/button";
import { Mail, UserCircle, Shield, Calendar, MapPin, Edit3 } from "lucide-react";

function MyProfile() {
  // Ambil data user yang sedang login
  const user = useAuthStore((state) => state.user);

  // Ambil huruf pertama dari nama untuk Avatar
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Halaman */}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Profil Saya</h1>
        <p className="text-muted-foreground">
          Kelola informasi data diri dan akun kamu di sini.
        </p>
      </div>

      {/* Card Profil Utama */}
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
        
        {/* Banner Cover (Bagian Atas Warna) */}
        <div className="h-32 md:h-40 bg-gradient-to-r from-blue-600 to-indigo-400"></div>

        <div className="p-6 md:p-8 relative">
          {/* Avatar (Menimpa Banner) */}
          <div className="absolute -top-16 left-6 md:left-8">
            <div className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-4 border-background bg-primary text-4xl md:text-5xl font-bold text-primary-foreground shadow-md">
              {initial}
            </div>
          </div>

          {/* Aksi / Tombol Edit */}
          <div className="flex justify-end mb-4">
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              <Edit3 className="h-4 w-4" />
              <span>Edit Profil</span>
            </Button>
          </div>

          {/* Info Nama & Role */}
          <div className="mt-4 md:mt-2 space-y-2">
            <h2 className="text-2xl font-bold">{user?.name || "Nama Pengguna"}</h2>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {user?.role === 'admin' ? 'Administrator' : 'Santri'}
              </span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                Aktif
              </span>
            </div>
          </div>

          <hr className="my-6 border-border" />

          {/* Detail Informasi User */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Item Detail */}
            <div className="flex items-start gap-4">
              <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Alamat Email</p>
                <p className="text-base font-medium">{user?.email || "user@example.com"}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Hak Akses</p>
                <p className="text-base font-medium capitalize">{user?.role || "User"}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Bergabung Sejak</p>
                <p className="text-base font-medium">Agustus 2024</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-muted rounded-lg text-muted-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Lokasi / Asrama</p>
                <p className="text-base font-medium">Gedung Utama, Kamar 102</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MyProfile;