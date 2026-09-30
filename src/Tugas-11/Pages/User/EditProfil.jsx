import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAuthStore } from "../Auth/store/useAuthStore";

function EditProfile() {
  const user = useAuthStore((state) => state.user);
  const updateProfile = useAuthStore((state) => state.updateProfile);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const onSubmit = (data) => {
    updateProfile(data.name, data.email);

    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Profil berhasil diperbarui.",
      confirmButtonText: "OK",
    }).then(() => {
      navigate("/user/myprofile");
    });
  };

  return (
    <div className="mx-auto max-w-2xl p-6 md:p-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Edit Profil
        </h1>

        <p className="mt-1 text-muted-foreground">
          Ubah nama dan email akun kamu.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Nama
            </label>

            <input
              type="text"
              {...register("name", {
                required: "Nama wajib diisi",
                minLength: {
                  value: 3,
                  message: "Nama minimal 3 karakter",
                },
              })}
              className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan nama"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format email tidak valid",
                },
              })}
              className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              placeholder="Masukkan email"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("/user/myprofile")}
              className="w-full rounded-lg border px-4 py-3 font-medium transition hover:bg-muted"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={!isValid}
              className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;