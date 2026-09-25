import { Link, useParams } from "react-router";
import { useState } from "react";

function SantriDetail() {

  const { santri_id } = useParams();

  const [santri] = useState(() => {
    const savedSantries = localStorage.getItem("santries");

    if (!savedSantries) {
      return null;
    }

    const santries = JSON.parse(savedSantries);

    return santries.find(
      (item) => String(item.id) === String(santri_id)
    );
  });

  if (!santri) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-4xl">

          <Link
            to="/santri/list"
            className="text-sm text-slate-500 transition hover:text-slate-900"
          >
            ← Kembali ke daftar santri
          </Link>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-500">
              !
            </div>

            <h2 className="mt-4 text-lg font-semibold text-slate-800">
              Data santri tidak ditemukan
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Santri dengan ID {santri_id} tidak tersedia.
            </p>
          </div>

        </div>
      </div>
    );
  }

  const initial = santri.name.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      <div className="mx-auto max-w-5xl">

        <header className="mb-6">

          <Link
            to="/santri/list"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-900"
          >
            ← Kembali ke daftar santri
          </Link>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                Database / Santri / Detail
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                Detail Santri
              </h1>
            </div>

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

              <span className="text-xs font-medium text-emerald-600">
                Data ditemukan
              </span>

            </div>

          </div>

        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 px-6 py-5">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
                  {initial}
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {santri.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    ID Santri #{santri.id}
                  </p>
                </div>

              </div>

              <span className="w-fit rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                Aktif
              </span>

            </div>

          </div>

          <div className="px-6 py-7">

            <div className="mb-6">

              <h3 className="text-sm font-semibold text-slate-900">
                Informasi Santri
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Informasi yang tersimpan di database santri.
              </p>

            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">

              <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">

                <div className="p-5">

                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    ID Santri
                  </p>

                  <p className="mt-2 font-mono text-sm font-semibold text-slate-800">
                    #{santri.id}
                  </p>

                </div>

                <div className="p-5">

                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Nama Lengkap
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {santri.name}
                  </p>

                </div>

              </div>

              <div className="grid grid-cols-1 divide-y divide-slate-200 border-t border-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">

                <div className="p-5">

                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Kelas
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {santri.classroom}
                  </p>

                </div>

                <div className="p-5">

                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Status
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>

                    <span className="text-sm font-semibold text-emerald-600">
                      Aktif
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">

            <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">

              <span className="text-slate-400">
                Database ID
              </span>

              <span className="font-mono font-medium text-slate-600">
                santries/{santri.id}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SantriDetail;