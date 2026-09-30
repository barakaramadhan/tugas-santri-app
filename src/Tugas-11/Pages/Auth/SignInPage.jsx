import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAuthStore } from "./store/useAuthStore";

export default function SignInPage() {
  const login = useAuthStore((state) => state.login);
  const eror = useAuthStore((state) => state.error);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    // Panggil login di dalam submit handler
    const loggedInUser = login(data.email, data.password);

    if (loggedInUser) {
      // Arahkan berdasarkan role
      if (loggedInUser.role === "admin") {
        navigate("/admin");
      } else if (loggedInUser.role === "user") {
        navigate("/user");
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Selamat Datang Kembali
        </h1>

        <p className="text-sm text-muted-foreground">
          Masukkan email dan password untuk masuk ke akun Anda.
        </p>
      </div>

      {eror && (
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>{eror}</span>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>

          <Input
            type="email"
            placeholder="nama@email.com"
            className="h-11"
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

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Password</label>

            <Link
              to="/forgot-password"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Lupa password?
            </Link>
          </div>

          <Input
            type="password"
            placeholder="Masukkan password"
            className="h-11"
            {...register("password", {
              required: "Password wajib diisi",
              minLength: {
                value: 6,
                message: "Password minimal 6 karakter",
              },
            })}
          />

          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button
          className="w-full h-11"
          type="submit"
          disabled={!isValid}
        >
          Sign In
        </Button>
      </form>

      <div className="text-center text-sm text-muted-foreground">
        Belum punya akun?{" "}

        <Link
          to="/sign-up"
          className="font-medium text-foreground hover:underline"
        >
          Daftar sekarang
        </Link>
      </div>
    </div>
  );
}