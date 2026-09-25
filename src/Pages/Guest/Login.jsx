import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d2922] text-xl text-white shadow-lg">
            ✦
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6d8174]">
            Santri App
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-[#1d2922]">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Masuk untuk mengakses dashboard admin.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(30,45,36,0.08)] sm:p-9">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Username */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-600">
                Username
              </label>

              <input
                type="text"
                placeholder="Masukkan username"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#6d8877] focus:bg-white focus:ring-4 focus:ring-[#6d8877]/10"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-600">
                  Password
                </label>

                <button
                  type="button"
                  className="text-[11px] font-medium text-[#6d8174] transition hover:text-[#1d2922]"
                >
                  Lupa password?
                </button>
              </div>

              <input
                type="password"
                placeholder="Masukkan password"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#6d8877] focus:bg-white focus:ring-4 focus:ring-[#6d8877]/10"
                required
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 accent-[#1d2922]"
                />

                <span className="text-xs text-slate-500">
                  Ingat saya
                </span>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#1d2922] text-sm font-semibold text-white shadow-md shadow-[#1d2922]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#2b3b32] hover:shadow-lg"
            >
              Masuk ke Dashboard

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-100" />

            <span className="text-[10px] uppercase tracking-wider text-slate-300">
              Santri App
            </span>

            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <p className="text-center text-[11px] leading-5 text-slate-400">
            Sistem informasi pengelolaan data santri,
            <br />
            nilai, dan absensi.
          </p>

        </div>

      </div>
    </div>
  );
}