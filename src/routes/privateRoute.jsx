import react, { useState } from "react";
import PrivateRoot from "../components/layout/privateRoot";
import Protected from "./protectedRoute";
import Index from "../views/admin";
import ErrorPage from "../components/errorPage";
import EmployedList from "../views/admin/employedList";
import DemandList from "../views/admin/demandList";

export const privateRoute = [
  {
    path: "/dashboard",
    element: (
      <Protected>
        <PrivateRoot />
      </Protected>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "employedList",
        element: <EmployedList />,
      },
      {
        path: "demandeList",
        element: <DemandList />,
      },
    ],
  },
];
