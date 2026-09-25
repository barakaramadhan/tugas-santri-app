import React, { useEffect, useState } from "react";
import SantriCard from "@/components/SantriCard";

function SantriList() {
  // ================= DATA SANTRI =================
  const [santries, setSantries] = useState(() => {
    const savedSantries = localStorage.getItem("santries");

    if (savedSantries) {
      return JSON.parse(savedSantries);
    }

    return [
      { id: 1, name: "Ahmad Fauzi", classroom: "3A" },
      { id: 2, name: "Siti Aisyah", classroom: "3B" },
      { id: 3, name: "Rizki Ramadan", classroom: "3C" },
      { id: 4, name: "Muhammad Fikri", classroom: "3A" },
      { id: 5, name: "Aisyah Putri", classroom: "3B" },
      { id: 6, name: "Abdul Rahman", classroom: "3C" },
      { id: 7, name: "Fahri Maulana", classroom: "3A" },
      { id: 8, name: "Nabila Zahra", classroom: "3B" },
      { id: 9, name: "Dimas Pratama", classroom: "3C" },
      { id: 10, name: "Hafiz Ramadhan", classroom: "3A" },
      { id: 11, name: "Zahra Amalia", classroom: "3B" },
      { id: 12, name: "Rafi Akbar", classroom: "3C" },
    ];
  });

  // ================= STATE =================
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    classroom: "",
  });

  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState(null);

  // ================= LOCAL STORAGE =================
  useEffect(() => {
    localStorage.setItem("santries", JSON.stringify(santries));
  }, [santries]);

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= TAMBAH SANTRI =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const newSantri = {
      id: Date.now(),
      name: formData.name,
      classroom: formData.classroom,
    };

    setSantries((prev) => [...prev, newSantri]);

    setFormData({
      name: "",
      classroom: "",
    });

    setShowForm(false);

    setAlert({
      type: "success",
      message: `${newSantri.name} berhasil ditambahkan!`,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // ================= SEARCH =================
  const filteredSantries = santries.filter((santri) =>
    santri.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* ALERT */}
      {alert && (
        <div className="fixed right-6 top-6 z-[100] w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-start gap-4 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-800">Berhasil!</p>
              <p className="mt-1 text-sm text-slate-500">
                {alert.message}
              </p>
            </div>

            <button
              onClick={() => setAlert(null)}
              className="text-slate-400 transition hover:text-slate-600"
            >
              ✕
            </button>
          </div>

          <div className="h-1 bg-slate-100">
            <div className="h-full w-full origin-left animate-shrink bg-green-500" />
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-6 text-white shadow-lg shadow-blue-200">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-20 right-20 h-52 w-52 rounded-full bg-white/5"></div>

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                Student Management
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight">
              Daftar Santri
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-relaxed text-blue-100">
              Kelola dan pantau data santri dengan lebih mudah dalam satu tempat.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-md">
            <p className="text-xs text-blue-100">Total Santri</p>
            <div className="mt-1 flex items-end gap-2">
              <p className="text-3xl font-bold">{santries.length}</p>
              <span className="mb-1 text-xs text-blue-100">Santri</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH & ADD */}
      <div className="mb-7 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <svg
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama santri..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          />
        </div>

        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14M5 12h14"
            />
          </svg>
          Tambah Santri
        </button>
      </div>

      {/* RESULT INFO */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-slate-800">Semua Santri</h3>
          <p className="mt-1 text-xs text-slate-400">
            Menampilkan {filteredSantries.length} dari {santries.length} santri
          </p>
        </div>

        {search && (
          <button
            onClick={() => setSearch("")}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700"
          >
            Reset pencarian
          </button>
        )}
      </div>

      {/* SANTRI CARDS */}
      {filteredSantries.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredSantries.map((santri) => (
            <div
              key={santri.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <SantriCard
                id={santri.id}
                name={santri.name}
                classroom={santri.classroom}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
            <svg
              className="h-7 w-7 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-700">
            Santri tidak ditemukan
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Coba gunakan nama santri yang berbeda.
          </p>
        </div>
      )}

      {/* MODAL TAMBAH SANTRI */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
          onClick={() => setShowForm(false)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-7 text-white">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10"></div>
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold">Tambah Santri</h2>
                  <p className="mt-1 text-sm text-blue-100">
                    Masukkan informasi santri baru.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
                >
                  ✕
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Nama Santri
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Contoh: Ahmad Fauzi"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Kelas
                </label>
                <select
                  name="classroom"
                  value={formData.classroom}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                >
                  <option value="">Pilih kelas</option>
                  <option value="3A">3A</option>
                  <option value="3B">3B</option>
                  <option value="3C">3C</option>
                </select>
              </div>

              {formData.name && formData.classroom && (
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Preview
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                      {formData.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">
                        {formData.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        Kelas {formData.classroom}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Simpan Santri
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SantriList;