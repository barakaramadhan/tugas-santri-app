import { createBrowserRouter, Navigate } from "react-router"; // atau "react-router-dom"

import GuestLayout from "./Tugas-11/Layouts/GuestLayout";

import AuthLayout from "./Tugas-11/Layouts/AuthLayout";

import HomePage from "./Tugas-11/Pages/HomePage";

import SignInPage from "./Tugas-11/Pages/Auth/SignInPage";

import SignUpPage from "./Tugas-11/Pages/Auth/SignUpPage";


/* ADMIN BARU */

import AdminLayout from "./Tugas-11/Layouts/AdminLayout";

/* USER */

import UserLayout from "./Tugas-11/Layouts/UserLayout";

import UserHome from "./Tugas-11/Pages/User/UserHome";

import MyProfile from "./Tugas-11/Pages/User/MyProfile";
import AdminHome from "./Tugas-11/admin/AdminHome";

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
