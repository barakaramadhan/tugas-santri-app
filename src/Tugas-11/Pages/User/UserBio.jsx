import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthStore } from "@/Tugas-11/Pages/Auth/store/useAuthStore";

function UserBio() {
  const user = useAuthStore((state) => state.user);

  const [isSaved, setIsSaved] = useState(false);
  const [savedData, setSavedData] = useState(null);


  useEffect(() => {
  const savedBio = localStorage.getItem("userBio");

  if (savedBio) {
    const parsedBio = JSON.parse(savedBio);
    setSavedData(parsedBio);
    setIsSaved(true);
  }
}, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      bio: user?.bio || "",
    },
  });

 const onSubmit = (data) => {
  localStorage.setItem("userBio", JSON.stringify(data));

  setSavedData(data);
  setIsSaved(true);

  Swal.fire({
    icon: "success",
    title: "Berhasil!",
    text: "Perubahan data berhasil disimpan.",
    confirmButtonText: "OK",
  });
};

  const handleEdit = () => {
    reset(savedData);
    setIsSaved(false);
  };

  if (isSaved && savedData) {
    return (
      <div className="p-6">
        <div className="max-w-2xl rounded-xl border bg-background p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Bio / Detail User</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Informasi pribadi kamu.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-muted-foreground">Nama</p>
              <p className="mt-1 font-medium">{savedData.name}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="mt-1 font-medium">{savedData.email}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Nomor HP</p>
              <p className="mt-1 font-medium">{savedData.phone}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Alamat</p>
              <p className="mt-1 font-medium">{savedData.address}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Bio</p>
              <p className="mt-1 font-medium">{savedData.bio}</p>
            </div>

            <button
              type="button"
              onClick={handleEdit}
              className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Edit Bio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-2xl rounded-xl border bg-background p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Bio / Detail User</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Lengkapi informasi pribadi kamu.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Nama */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Nama</label>

            <input
              type="text"
              placeholder="Masukkan nama"
              className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              {...register("name", {
                required: "Nama wajib diisi",
                minLength: {
                  value: 3,
                  message: "Nama minimal 3 karakter",
                },
              })}
            />

            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>

            <input
              type="email"
              placeholder="Masukkan email"
              className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format email tidak valid",
                },
              })}
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Nomor HP */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Nomor HP</label>

            <input
              type="tel"
              placeholder="Masukkan nomor HP"
              className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              {...register("phone", {
                required: "Nomor HP wajib diisi",
                minLength: {
                  value: 10,
                  message: "Nomor HP minimal 10 digit",
                },
              })}
            />

            {errors.phone && (
              <p className="text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Alamat */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Alamat</label>

            <textarea
              placeholder="Masukkan alamat"
              className="min-h-24 w-full resize-none rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              {...register("address", {
                required: "Alamat wajib diisi",
              })}
            />

            {errors.address && (
              <p className="text-sm text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>

            <textarea
              placeholder="Ceritakan sedikit tentang kamu"
              className="min-h-28 w-full resize-none rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              {...register("bio", {
                required: "Bio wajib diisi",
                minLength: {
                  value: 10,
                  message: "Bio minimal 10 karakter",
                },
              })}
            />

            {errors.bio && (
              <p className="text-sm text-red-500">
                {errors.bio.message}
              </p>
            )}
          </div>

          {/* Status Validasi */}
          <p
            className={`text-center text-sm font-medium ${
              isValid ? "text-green-600" : "text-red-500"
            }`}
          >
            {isValid
              ? "Data valid, siap disimpan."
              : "Data belum valid, silakan periksa kembali."}
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full rounded-lg px-4 py-3 font-medium text-white transition ${
              isValid
                ? "bg-primary hover:opacity-90"
                : "cursor-not-allowed bg-primary/30"
            }`}
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserBio;