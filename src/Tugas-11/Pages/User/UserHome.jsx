import { useAuthStore } from "../Auth/store/useAuthStore"; // Sesuaikan path ini
import { BookOpen, CheckCircle2, Clock, Bell, CalendarDays } from "lucide-react";

function UserHome() {
  // Ambil data user yang sedang login
  const user = useAuthStore((state) => state.user);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Dashboard */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Ahlan wa sahlan, <span className="font-semibold text-primary">{user?.name || "Santri"}</span>! Ini adalah ringkasan aktivitas belajarmu.
        </p>
      </div>

      {/* Grid Statistik Cepat (Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Kehadiran */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Persentase Kehadiran</h3>
            <div className="p-2 bg-green-100 text-green-600 rounded-lg dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground mt-1 text-green-600 font-medium">Sangat Baik</p>
          </div>
        </div>

        {/* Card 2: Hafalan */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Target Hafalan (Juz 30)</h3>
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold">80%</div>
            <p className="text-xs text-muted-foreground mt-1">Sisa 6 Surat lagi</p>
          </div>
        </div>

        {/* Card 3: Tugas Pending */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Tugas Belum Selesai</h3>
            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg dark:bg-orange-900/30 dark:text-orange-400">
              <Clock className="h-5 w-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1 text-orange-500">Batas waktu makin dekat</p>
          </div>
        </div>

        {/* Card 4: Poin Pelanggaran */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Poin Kedisiplinan</h3>
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Bell className="h-5 w-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold">0</div>
            <p className="text-xs text-muted-foreground mt-1">Pertahankan disiplinmu!</p>
          </div>
        </div>

      </div>

      {/* Bagian Bawah: Jadwal & Pengumuman */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        
        {/* Kolom Kiri: Jadwal Hari Ini (Lebih Lebar) */}
        <div className="lg:col-span-2 rounded-xl border bg-card shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <CalendarDays className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold">Jadwal Pelajaran Hari Ini</h2>
          </div>
          
          <div className="space-y-4">
            {/* List Jadwal */}
            {[
              { time: "07:30 - 09:00", subject: "Tahfidz Al-Quran", guru: "Ustadz Ahmad" },
              { time: "09:00 - 10:30", subject: "Fiqih Ibadah", guru: "Ustadz Budi" },
              { time: "10:45 - 12:00", subject: "Bahasa Arab", guru: "Ustadz Hasan" },
            ].map((jadwal, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors gap-3">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-semibold text-primary min-w-[110px]">{jadwal.time}</div>
                  <div>
                    <p className="font-semibold">{jadwal.subject}</p>
                    <p className="text-sm text-muted-foreground">{jadwal.guru}</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-background border rounded-full text-xs font-medium w-fit">
                  Ruang Utama
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Pengumuman Terbaru */}
        <div className="rounded-xl border bg-card shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="h-5 w-5 text-orange-500" />
            <h2 className="text-lg font-bold">Pengumuman</h2>
          </div>

          <div className="space-y-6">
            {/* List Pengumuman */}
            <div className="relative pl-6 border-l-2 border-primary/30 pb-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
              <p className="text-xs text-muted-foreground mb-1">Hari ini, 08:00 WIB</p>
              <p className="text-sm font-medium">Ujian Tengah Semester dimulai minggu depan. Harap persiapkan diri.</p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute w-3 h-3 bg-muted-foreground/30 rounded-full -left-[7px] top-1.5"></div>
              <p className="text-xs text-muted-foreground mb-1">Kemarin, 14:30 WIB</p>
              <p className="text-sm font-medium">Jadwal ekstrakurikuler memanah dipindah ke hari Sabtu.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default UserHome;