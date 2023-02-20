import { Achievements, Counter } from "./components/Achievements";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/achievements',
    element: <Achievements />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
