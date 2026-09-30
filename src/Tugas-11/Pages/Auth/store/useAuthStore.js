import { create } from "zustand";
import { persist } from "zustand/middleware";

const MOCK_USER = [
  {
    id: "1",
    email: "admin@test.com",
    password: "123456",
    name: "BUdi",
    role: "admin",
  },
  {
    id: "2",
    email: "user@test.com",
    password: "123456",
    name: "Siti",
    role: "user",
  },
];

export const useAuthStore = create(
  persist(
    (set, get) => ({
      users: MOCK_USER,
      user: null,
      error: null,

      login: (email, password) => {
        const foundUser = get().users.find(
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
        }

        set({
          user: null,
          error: "Email atau password salah",
        });

        return null;
      },

      updateProfile: (name, email) => {
        set((state) => {
          if (!state.user) {
            return state;
          }

          const updatedUsers = state.users.map((user) =>
            user.id === state.user.id
              ? {
                  ...user,
                  name,
                  email,
                }
              : user
          );

          return {
            users: updatedUsers,
            user: {
              ...state.user,
              name,
              email,
            },
          };
        });
      },

      logout: () =>
        set({
          user: null,
          error: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
);