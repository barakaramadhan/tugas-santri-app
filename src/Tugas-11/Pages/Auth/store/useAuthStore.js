import { create } from "zustand";
import { persist } from "zustand/middleware"; // 1. Import persist

const MOCK_USER = [
  {
    id: "1",
    email: "admin@test.com",
    password: "123",
    name: "BUdi",
    role: "admin",
  },
  {
    id: "2", // 2. Ubah ID agar unik
    email: "user@test.com",
    password: "123",
    name: "Siti",
    role: "user", // 3. Ubah jadi huruf kecil agar sesuai dengan pengecekan role
  },
];

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      error: null, // 4. Disamakan menjadi 'error'

      login: (email, password) => {
        const foundUser = MOCK_USER.find(
          (u) => u.email === email && u.password === password
        );

        if (foundUser) {
          set({
            user: {
              id: foundUser.id,
              email: foundUser.email,
              name: foundUser.name,
              role: foundUser.role,
            },
            error: null,
          });
          return foundUser;
        } else {
          set({
            user: null,
            error: "Email atau password salah",
          });
          return null;
        }
      },

      logout: () => set({ user: null, error: null }),
    }),
    {
      name: "auth-storage", // 5. Nama key penyimpanan di localStorage
    }
  )
);