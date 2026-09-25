import { createBrowserRouter, Navigate } from "react-router"; // atau "react-router-dom"

import GuestLayout from "./Tugas-11/Layouts/GuestLayout";

import AuthLayout from "./Tugas-11/Layouts/AuthLayout";

import HomePage from "./Tugas-11/Pages/HomePage";

import SignInPage from "./Tugas-11/Pages/Auth/SignInPage";

import SignUpPage from "./Tugas-11/Pages/Auth/SignUpPage";

/* --- DIPOSISI KOMENTAR SEMENTARA JIKA ADMIN ERROR --- */

import AdminHome from "./Tugas-11/Pages/Admin/AdminHome";

import About from "./Tugas-11/Pages/Admin/About";

import SantriList from "./Tugas-11/Pages/Admin/Santri/SantriList";

import SantriDetail from "./Tugas-11/Pages/Admin/Santri/SantriDetail";

import SantriNilai from "./Tugas-11/Pages/Admin/Santri/SantriNilai";

import SantriAbsensi from "./Tugas-11/Pages/Admin/Santri/SantriAbsensi";

import AppLayouts from "./Tugas-11/Layouts/AppLayouts";

import SantriLayout from "./Tugas-11/Layouts/SantriLayout";

/* */

/* ADMIN BARU */

import AdminLayout from "./Tugas-11/Layouts/AdminLayout";

/* USER */

import UserLayout from "./Tugas-11/Layouts/UserLayout";

import UserHome from "./Tugas-11/Pages/User/UserHome";

import MyProfile from "./Tugas-11/Pages/User/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },

      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },

  /* --- ROUTE ADMIN (DIKOMENTARI SEMENTARA) ---

  {
    path: "/admin",
    element: <AppLayouts />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "about", element: <About /> },
      {
        path: "santri",
        element: <SantriLayout />,
        children: [
          { index: true, element: <SantriList /> },
          {
            path: "list",
            children: [
              { index: true, element: <SantriList /> },
              { path: ":santri_id", element: <SantriDetail /> },
            ],
          },
          { path: "nilai", element: <SantriNilai /> },
          { path: "absensi", element: <SantriAbsensi /> },
        ],
      },
    ],
  },

  */

  // ROUTE ADMIN BARU
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  },

  // ROUTE USER
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },

      {
        path: "myprofile",
        element: <MyProfile />,
      },
    ],
  },

  // FALLBACK REDIRECT
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);