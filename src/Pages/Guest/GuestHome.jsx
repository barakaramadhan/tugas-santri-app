export default function GuestHome() {
  return (
    <div className="min-h-screen bg-[#f7f8f6]">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">

        <div className="grid w-full items-center gap-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dfe5df] bg-white px-4 py-2 text-xs font-medium text-[#53645a] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#6f927b]" />
              Santri Management System
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#1d2922] md:text-6xl">
              Kelola Data Santri
              <span className="block text-[#5d8069]">
                Dengan Lebih Mudah.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500 md:text-base">
              Santri App membantu pengelolaan data santri, nilai, dan
              absensi dalam satu sistem yang sederhana, rapi, dan
              terorganisir.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/login"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#1d2922] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2b3b32]"
              >
                Masuk Dashboard
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/about"
                className="inline-flex items-center rounded-xl border border-[#d9ded9] bg-white px-6 py-3.5 text-sm font-semibold text-[#344139] transition duration-300 hover:bg-[#f0f3ef]"
              >
                Tentang Aplikasi
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] bg-[#1d2922] p-7 shadow-2xl md:p-9">

              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#6f927b]/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/40">
                      Dashboard
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Santri App
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm">
                    ✦
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-xs text-white/40">
                    Sistem Informasi
                  </p>

                  <h2 className="mt-2 text-2xl font-bold leading-snug text-white">
                    Semua kebutuhan
                    <br />
                    dalam satu tempat.
                  </h2>
                </div>

                <div className="mt-8 space-y-3">

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      👨‍🎓
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Data Santri
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Informasi santri terorganisir
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      📚
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Nilai Akademik
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Pengelolaan nilai dengan mudah
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      ✓
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Absensi
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Pantau kehadiran santri
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#e0e5df] bg-white px-5 py-4 shadow-lg md:block">
              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                Simple · Organized · Efficient
              </p>

              <p className="mt-1 text-sm font-semibold text-[#26352c]">
                Santri Management
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}