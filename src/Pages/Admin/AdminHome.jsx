import React from "react";

function AdminHome() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* Hero */}
      <section className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-medium text-blue-100">
            Welcome back 👋
          </p>

          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            Selamat Datang di Dashboard
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-blue-100 md:text-base">
            Kelola aktivitas dan informasi kamu dengan mudah melalui
            dashboard ini.
          </p>

          <button className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-md transition hover:bg-blue-50">
            Mulai Sekarang
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-slate-500">Total Data</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            120
          </h2>
          <p className="mt-2 text-xs text-green-500">
            +12% dari bulan lalu
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-slate-500">Aktivitas</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            48
          </h2>
          <p className="mt-2 text-xs text-green-500">
            +8 aktivitas baru
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-slate-500">Selesai</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            86%
          </h2>
          <p className="mt-2 text-xs text-blue-500">
            Progress bulan ini
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm text-slate-500">Status</p>
          <h2 className="mt-2 text-3xl font-bold text-green-500">
            Aktif
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            Sistem berjalan normal
          </p>
        </div>

      </section>

      {/* Content */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Quick Action */}
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-1">
          <h2 className="text-lg font-bold text-slate-800">
            Quick Action
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Akses fitur dengan cepat.
          </p>

          <div className="mt-5 space-y-3">

            <button className="flex w-full items-center gap-4 rounded-xl bg-slate-50 p-4 text-left transition hover:bg-blue-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                +
              </div>

              <div>
                <p className="font-semibold text-slate-700">
                  Tambah Data
                </p>
                <p className="text-xs text-slate-400">
                  Tambahkan data baru
                </p>
              </div>
            </button>

            <button className="flex w-full items-center gap-4 rounded-xl bg-slate-50 p-4 text-left transition hover:bg-blue-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                ↗
              </div>

              <div>
                <p className="font-semibold text-slate-700">
                  Lihat Data
                </p>
                <p className="text-xs text-slate-400">
                  Periksa semua data
                </p>
              </div>
            </button>

            <button className="flex w-full items-center gap-4 rounded-xl bg-slate-50 p-4 text-left transition hover:bg-blue-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                ✓
              </div>

              <div>
                <p className="font-semibold text-slate-700">
                  Aktivitas
                </p>
                <p className="text-xs text-slate-400">
                  Lihat aktivitas terbaru
                </p>
              </div>
            </button>

          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Aktivitas Terbaru
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Aktivitas yang baru dilakukan.
              </p>
            </div>

            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Lihat Semua
            </button>
          </div>

          <div className="mt-6 space-y-5">

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-100"></div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-700">
                  Data baru berhasil ditambahkan
                </p>

                <p className="text-xs text-slate-400">
                  5 menit yang lalu
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                Success
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-purple-100"></div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-700">
                  Profil berhasil diperbarui
                </p>

                <p className="text-xs text-slate-400">
                  1 jam yang lalu
                </p>
              </div>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                Updated
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-orange-100"></div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-700">
                  Sistem melakukan sinkronisasi
                </p>

                <p className="text-xs text-slate-400">
                  3 jam yang lalu
                </p>
              </div>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                Process
              </span>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}

export default AdminHome;