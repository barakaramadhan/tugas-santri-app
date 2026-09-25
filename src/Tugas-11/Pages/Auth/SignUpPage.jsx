import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function SignUpPage() {
  return (
    <div className="space-y-7">
  
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Buat Akun Baru
        </h1>

        <p className="text-sm text-muted-foreground">
          Daftarkan akun Anda untuk mulai menggunakan aplikasi.
        </p>
      </div>

   
      <form
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Username
          </label>

          <Input
            type="text"
            placeholder="Masukkan username"
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email
          </label>

          <Input
            type="email"
            placeholder="nama@email.com"
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Password
          </label>

          <Input
            type="password"
            placeholder="Masukkan password"
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Konfirmasi Password
          </label>

          <Input
            type="password"
            placeholder="Masukkan ulang password"
            className="h-11"
          />
        </div>

        <Button
          className="w-full h-11"
          type="submit"
        >
          Sign Up
        </Button>
      </form>


      <div className="text-center text-sm text-muted-foreground">
        Sudah punya akun?{" "}
        <Link
          to="/sign-in"
          className="font-medium text-foreground hover:underline transition-colors"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}