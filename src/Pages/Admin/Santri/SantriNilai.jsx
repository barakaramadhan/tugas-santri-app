import React, { useState } from "react";

function SantriNilai() {
  const [santries, setSantries] = useState([
    { id: 1, name: "Ahmad Fauzi", classroom: "3A", nilai: 92 },
    { id: 2, name: "Siti Aisyah", classroom: "3B", nilai: 88 },
    { id: 3, name: "Rizki Ramadan", classroom: "3C", nilai: 95 },
    { id: 4, name: "Muhammad Fikri", classroom: "3A", nilai: 84 },
    { id: 5, name: "Aisyah Putri", classroom: "3B", nilai: 90 },
    { id: 6, name: "Abdul Rahman", classroom: "3C", nilai: 78 },
    { id: 7, name: "Fahri Maulana", classroom: "3A", nilai: 86 },
    { id: 8, name: "Nabila Zahra", classroom: "3B", nilai: 93 },
    { id: 9, name: "Dimas Pratama", classroom: "3C", nilai: 81 },
    { id: 10, name: "Hafiz Ramadhan", classroom: "3A", nilai: 89 },
    { id: 11, name: "Zahra Amalia", classroom: "3B", nilai: 96 },
    { id: 12, name: "Rafi Akbar", classroom: "3C", nilai: 87 },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    classroom: "",
    nilai: "",
  });

  // Mengubah isi input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newSantri = {
      id: santries.length + 1,
      name: formData.name,
      classroom: formData.classroom,
      nilai: Number(formData.nilai),
    };

    setSantries([...santries, newSantri]);

    // Reset form
    setFormData({
      name: "",
      classroom: "",
      nilai: "",
    });

    // Tutup form
    setShowForm(false);
  };

  const average =
    santries.reduce((total, santri) => total + santri.nilai, 0) /
    santries.length;

  const highest = Math.max(...santries.map((santri) => santri.nilai));

  const getGrade = (nilai) => {
    if (nilai >= 90) return "A";
    if (nilai >= 80) return "B";
    if (nilai >= 70) return "C";
    return "D";
  };

  const getGradeStyle = (nilai) => {
    if (nilai >= 90) {
      return "bg-green-100 text-green-700";
    }

    if (nilai >= 80) {
      return "bg-blue-100 text-blue-700";
    }

    if (nilai >= 70) {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-700";
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-tight text-slate-800">
          Nilai Santri
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Pantau dan kelola perkembangan nilai santri.
        </p>
      </div>

      {/* Statistik */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Nilai Rata-rata
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            {average.toFixed(1)}
          </h3>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${average}%` }}
            ></div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Nilai Tertinggi
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            {highest}
          </h3>

          <p className="mt-3 text-xs text-green-600">
            Performa terbaik
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-500">
            Total Santri
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            {santries.length}
          </h3>

          <p className="mt-3 text-xs text-slate-400">
            Data nilai tersedia
          </p>
        </div>
      </div>

      {/* Tabel */}
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        
        <div className="flex flex-col gap-3 border-b border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          
          <div>
            <h3 className="font-bold text-slate-800">
              Daftar Nilai
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Rekap nilai seluruh santri
            </p>
          </div>

          {/* Button Tambah */}
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <span className="text-lg leading-none">+</span>
            Tambah Nilai
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">

            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  No
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Santri
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Kelas
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Nilai
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Progress
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Grade
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">

              {santries.map((santri) => (
                <tr
                  key={santri.id}
                  className="transition hover:bg-slate-50"
                >
                  <td className="px-5 py-4 text-sm text-slate-400">
                    {String(santri.id).padStart(2, "0")}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                        {santri.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          {santri.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          ID-{String(santri.id).padStart(3, "0")}
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                      {santri.classroom}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span className="text-lg font-bold text-slate-800">
                      {santri.nilai}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{
                            width: `${santri.nilai}%`,
                          }}
                        ></div>
                      </div>

                      <span className="text-xs text-slate-400">
                        {santri.nilai}%
                      </span>

                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${getGradeStyle(
                        santri.nilai
                      )}`}
                    >
                      {getGrade(santri.nilai)}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah Nilai */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">

            {/* Modal Header */}
            <div className="mb-6 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Tambah Nilai
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Masukkan data nilai santri.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
              >
                ✕
              </button>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Nama */}
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Kelas */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Kelas
                </label>

                <select
                  name="classroom"
                  value={formData.classroom}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                >
                  <option value="">
                    Pilih kelas
                  </option>

                  <option value="3A">
                    3A
                  </option>

                  <option value="3B">
                    3B
                  </option>

                  <option value="3C">
                    3C
                  </option>
                </select>
              </div>

              {/* Nilai */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Nilai
                </label>

                <input
                  type="number"
                  name="nilai"
                  value={formData.nilai}
                  onChange={handleChange}
                  placeholder="0 - 100"
                  min="0"
                  max="100"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">

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
                  Simpan Nilai
                </button>

              </div>

            </form>

          </div>
        </div>
      )}
    </div>
  );
}

export default SantriNilai;