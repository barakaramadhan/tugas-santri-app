
import React, { useEffect, useState } from "react";

function SantriAbsensi() {
  // ================= DATA SANTRI =================
  const santries = [
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

  // ================= DATE =================
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // ================= ATTENDANCE =================
  const [attendance, setAttendance] = useState(() => {
    try {
      const saved = localStorage.getItem("santriAttendance");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // ================= SEARCH =================
  const [search, setSearch] = useState("");

  // ================= ALERT =================
  const [alert, setAlert] = useState(null);

  // ================= SAVE TO LOCAL STORAGE =================
  useEffect(() => {
    localStorage.setItem(
      "santriAttendance",
      JSON.stringify(attendance)
    );
  }, [attendance]);

  // ================= ALERT FUNCTION =================
  const showAlert = (message, type = "success") => {
    setAlert({
      message,
      type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // ================= SELECT ATTENDANCE =================
  const handleAttendance = (id, status) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: status,
    }));
  };

  // ================= SAVE BUTTON =================
  const handleSave = () => {
    const totalAbsen = Object.keys(attendance).length;

    if (totalAbsen === 0) {
      showAlert("Belum ada absensi yang dipilih.", "warning");
      return;
    }

    localStorage.setItem(
      "santriAttendance",
      JSON.stringify(attendance)
    );

    showAlert(
      `Absensi berhasil disimpan untuk ${totalAbsen} santri.`
    );
  };

  // ================= RESET =================
  const handleReset = () => {
    const confirmReset = window.confirm(
      "Apakah kamu yakin ingin menghapus semua data absensi?"
    );

    if (!confirmReset) return;

    setAttendance({});
    localStorage.removeItem("santriAttendance");

    showAlert("Semua data absensi berhasil dihapus.");
  };

  // ================= SEARCH =================
  const filteredSantries = santries.filter((santri) =>
    santri.name.toLowerCase().includes(search.toLowerCase())
  );

  // ================= STATISTICS =================
  const hadir = Object.values(attendance).filter(
    (status) => status === "Hadir"
  ).length;

  const izin = Object.values(attendance).filter(
    (status) => status === "Izin"
  ).length;

  const sakit = Object.values(attendance).filter(
    (status) => status === "Sakit"
  ).length;

  const alpha = Object.values(attendance).filter(
    (status) => status === "Alpha"
  ).length;

  return (
    <div className="space-y-6">

      {/* ================= ALERT ================= */}
      {alert && (
        <div className="fixed right-6 top-6 z-[100] w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

          <div className="flex items-start gap-4 p-4">

            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                alert.type === "warning"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {alert.type === "warning" ? (
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
                    d="M12 9v2m0 4h.01M10.29 3.86l-7.82 14a2 2 0 001.75 3h15.56a2 2 0 001.75-3l-7.82-14a2 2 0 00-3.42 0z"
                  />
                </svg>
              ) : (
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
              )}
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-800">
                {alert.type === "warning"
                  ? "Perhatian"
                  : "Berhasil!"}
              </p>

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
            <div className="animate-shrink h-full w-full origin-left bg-green-500" />
          </div>
        </div>
      )}

      {/* ================= HEADER ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-6 text-white shadow-lg shadow-blue-200">

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10"></div>

        <div className="absolute -bottom-20 right-20 h-52 w-52 rounded-full bg-white/5"></div>

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-2">

              <div className="h-2 w-2 rounded-full bg-white"></div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                Attendance Management
              </span>

            </div>

            <h2 className="text-3xl font-bold tracking-tight">
              Absensi Santri
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-relaxed text-blue-100">
              Kelola dan pantau kehadiran santri dengan lebih mudah dalam satu
              tempat.
            </p>
          </div>

          {/* REALTIME DATE */}
          <div className="w-fit rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-md">

            <p className="text-xs text-blue-100">
              Hari Ini
            </p>

            <p className="mt-1 text-lg font-bold capitalize">
              {formattedDate}
            </p>

          </div>

        </div>
      </div>

      {/* ================= STATISTICS ================= */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* HADIR */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-slate-400">
                Hadir
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {hadir}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Santri hadir
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">

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

          </div>

        </div>

        {/* IZIN */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-slate-400">
                Izin
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {izin}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Santri izin
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">

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
                  d="M12 9v2m0 4h.01M10.29 3.86l-7.82 14a2 2 0 001.75 3h15.56a2 2 0 001.75-3l-7.82-14a2 2 0 00-3.42 0z"
                />
              </svg>

            </div>

          </div>

        </div>

        {/* SAKIT */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-slate-400">
                Sakit
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {sakit}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Santri sakit
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">

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
                  d="M9 12h6m-3-3v6m8-3a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>

            </div>

          </div>

        </div>

        {/* ALPHA */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-medium text-slate-400">
                Alpha
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-800">
                {alpha}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Tanpa keterangan
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600">

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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            </div>

          </div>

        </div>

      </div>

      {/* ================= ABSENSI ================= */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

        {/* HEADER */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Data Absensi
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Catat kehadiran santri hari ini.
            </p>
          </div>

          {/* SIMPAN */}
          <button
            onClick={handleSave}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
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
                d="M5 13l4 4L19 7"
              />
            </svg>

            Simpan Absensi

          </button>

        </div>

        {/* SEARCH */}
        <div className="border-b border-slate-100 p-6">

          <div className="relative">

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
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />

          </div>

        </div>

        {/* ================= SANTRI LIST ================= */}
        {filteredSantries.length > 0 ? (

          <div className="divide-y divide-slate-100">

            {filteredSantries.map((santri) => (

              <div
                key={santri.id}
                className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
              >

                {/* PROFILE */}
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                    {santri.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800">
                      {santri.name}
                    </h4>

                    <p className="mt-1 text-xs text-slate-400">
                      Kelas {santri.classroom}
                    </p>

                    {/* STATUS */}
                    {attendance[santri.id] && (
                      <p className="mt-1 text-xs font-semibold text-blue-600">
                        Status: {attendance[santri.id]}
                      </p>
                    )}
                  </div>

                </div>

                {/* BUTTON ABSENSI */}
                <div className="grid grid-cols-2 gap-2 sm:flex">

                  <button
                    onClick={() =>
                      handleAttendance(santri.id, "Hadir")
                    }
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-95 ${
                      attendance[santri.id] === "Hadir"
                        ? "bg-green-600 text-white shadow-md shadow-green-200"
                        : "border border-green-200 bg-green-50 text-green-600 hover:bg-green-100"
                    }`}
                  >
                    Hadir
                  </button>

                  <button
                    onClick={() =>
                      handleAttendance(santri.id, "Izin")
                    }
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-95 ${
                      attendance[santri.id] === "Izin"
                        ? "bg-yellow-500 text-white shadow-md shadow-yellow-200"
                        : "border border-yellow-200 bg-yellow-50 text-yellow-600 hover:bg-yellow-100"
                    }`}
                  >
                    Izin
                  </button>

                  <button
                    onClick={() =>
                      handleAttendance(santri.id, "Sakit")
                    }
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-95 ${
                      attendance[santri.id] === "Sakit"
                        ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                        : "border border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100"
                    }`}
                  >
                    Sakit
                  </button>

                  <button
                    onClick={() =>
                      handleAttendance(santri.id, "Alpha")
                    }
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-95 ${
                      attendance[santri.id] === "Alpha"
                        ? "bg-red-600 text-white shadow-md shadow-red-200"
                        : "border border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                    }`}
                  >
                    Alpha
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* EMPTY SEARCH */
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

              <svg
                className="h-8 w-8"
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

            <h3 className="text-base font-bold text-slate-700">
              Santri tidak ditemukan
            </h3>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
              Coba gunakan nama santri yang berbeda.
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Reset Pencarian
            </button>

          </div>

        )}

        {/* FOOTER */}
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">

          <p className="text-xs text-slate-400">
            {Object.keys(attendance).length} dari{" "}
            {santries.length} santri sudah diabsen
          </p>

        </div>

      </div>
    </div>
  );
}

export default SantriAbsensi;

