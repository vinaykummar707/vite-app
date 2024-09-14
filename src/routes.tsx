import {createBrowserRouter, Navigate} from "react-router-dom";
import HomePage from "./Pages/home/HomePage.tsx";
import {ShiftsPage} from "./Pages/home/ShiftsPage/ShiftsPage.tsx";
import {PatientsPage} from "./Pages/home/PatientsPage/PatientsPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"}/>,
  },
  {
    path: "home",
    element: (
          <HomePage/>
    ),
    children: [
      {
        path: "",
        element: <Navigate to={"patients"}/>,
      },
      {
        path: "shifts",
        element: <ShiftsPage/>,
      },
      {
        path: "patients",
        element: <PatientsPage/>,
      },
    ],
  },
]);
