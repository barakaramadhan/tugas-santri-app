import { NavLink, Outlet } from "react-router";

function SantriLayout() {
  const navLinkClass = ({ isActive }) =>
    `group relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-white text-blue-600 shadow-md shadow-slate-200/70"
        : "text-slate-500 hover:bg-white/70 hover:text-slate-800"
    }`;

  return (
    <section className="min-h-screen bg-slate-50 p-6 md:p-8">
      <header className="mb-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Management
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Data Santri
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
              Kelola data santri, nilai, dan absensi dalam satu tempat
              dengan mudah.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <svg
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-10a4 4 0 110 8 4 4 0 010-8z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400">Total Santri</p>
              <p className="text-lg font-bold text-slate-800">120</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="mb-6">
        <nav className="inline-flex rounded-2xl border border-slate-200 bg-slate-100/80 p-1.5 backdrop-blur">
          <NavLink to="/admin/santri/list" className={navLinkClass}>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Daftar
          </NavLink>

          <NavLink to="/admin/santri/nilai" className={navLinkClass}>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-2a4 4 0 018 0v2M9 7a4 4 0 108 0 4 4 0 00-8 0z"
              />
            </svg>
            Nilai
          </NavLink>

          <NavLink to="/admin/santri/absensi" className={navLinkClass}>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5-3v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2z"
              />
            </svg>
            Absensi
          </NavLink>
        </nav>
      </div>

      {/* Content */}
      <main className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-50 blur-3xl"></div>
        <div className="relative p-5 md:p-7">
          <Outlet />
        </div>
      </main>
    </section>
  );
}

export default SantriLayout;