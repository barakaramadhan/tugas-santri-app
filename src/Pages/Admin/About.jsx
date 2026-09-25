
import React from "react";

function About() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-8 text-white shadow-lg shadow-blue-200">

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />

        <div className="absolute -bottom-20 right-20 h-52 w-52 rounded-full bg-white/5" />

        <div className="relative">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
              About Application
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Tentang Aplikasi
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100">
            Aplikasi ini dibuat untuk membantu pengelolaan data dan aktivitas
            santri secara lebih mudah, cepat, dan terorganisir.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="grid gap-6 md:grid-cols-2">

        {/* About */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11v5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8h.01"
              />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-slate-800">
            Apa itu aplikasi ini?
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Sistem ini merupakan aplikasi manajemen santri yang digunakan
            untuk membantu pengelolaan data santri, absensi, dan informasi
            lainnya dalam satu sistem.
          </p>

        </div>

        {/* Purpose */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
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
                d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-slate-800">
            Tujuan
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            Membantu pengurus dalam mengelola data santri dengan tampilan
            yang sederhana, modern, dan mudah digunakan.
          </p>

        </div>

      </div>

      {/* Features */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            Fitur Utama
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Beberapa fitur yang tersedia dalam aplikasi.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-blue-50">
            <h3 className="font-bold text-slate-800">
              Data Santri
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Mengelola dan melihat informasi santri dengan lebih terstruktur.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-blue-50">
            <h3 className="font-bold text-slate-800">
              Absensi
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Mencatat kehadiran santri seperti hadir, izin, sakit, dan alpha.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-blue-50">
            <h3 className="font-bold text-slate-800">
              Dashboard
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Menampilkan informasi penting dalam satu halaman yang mudah
              dipahami.
            </p>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center">

        <p className="text-sm font-medium text-blue-700">
          Santri Management System
        </p>

        <p className="mt-1 text-xs text-blue-500">
          Sistem manajemen santri yang sederhana dan terorganisir.
        </p>

      </div>

    </div>
  );
}

export default About;

