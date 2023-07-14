import React, { createElement } from "react";
import Home from "../views/home";
import Service from "../Views/services";
import Suivre from "../views/suivre";
import ErrorPage from "../components/errorPage"
import Root from "../components/layout/root";
import DetailsService from "../views/detailsService";
import Connexion from "../views/connexion";

export const publicRoute = [
  {
    path: "/",
    element: createElement(Root),
    errorElement: createElement(ErrorPage),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "services/details/:id",
        element: <DetailsService />,
      },
      {
        path: "demande",
        element: <Suivre />,
      },
    ],
  },
  {
    path: "/connexion",
    element: <Connexion />
  }
];
