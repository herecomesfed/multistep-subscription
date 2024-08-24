// Fonts
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// Pages
import YourInfo from "./pages/YourInfo";
import ChoosePlan from "./pages/ChoosePlan";
import ChooseAddons from "./pages/ChooseAddons";
import Checkout from "./pages/Checkout";

// Components
import Bottombar from "./components/Bottombar";
import { DataProvider } from "./context/DataContext";

// Data

export default function App() {
  const stages = [
    {
      name: "your-info",
      label: "Your Info",
      id: 1,
      path: "/your-info",
      component: <YourInfo />,
    },
    {
      name: "choose-plan",
      label: "Choose Plan",
      id: 2,
      path: "/choose-plan",
      component: <ChoosePlan />,
    },
    {
      name: "choose-addons",
      label: "Choose Addons",
      id: 3,
      path: "/choose-addons",
      component: <ChooseAddons />,
    },
    {
      name: "place-order",
      label: "Place Order",
      id: 4,
      path: "/place-order",
      component: <Checkout />,
    },
  ];
  return (
    <article className="md:min-h-[100vh] md:flex md:items-center">
      <div className="container w-4/5 mx-auto md:flex md:p-5 md:bg-white">
        <BrowserRouter>
          <Navbar stages={stages} />
          <section className="md:w-7/12 md:p-10 bg-white shadow-lg md:shadow-none shadow-neutral-200">
            <div className="relative wrapper p-5 -mt-10 z-10 rounded-lg md:mt-0">
              <DataProvider>
                <Routes>
                  <Route index element={<Navigate to="/your-info" />} />
                  {stages.map((stage) => {
                    return (
                      <Route
                        key={stage.id}
                        path={stage.path}
                        element={stage.component}
                      />
                    );
                  })}
                </Routes>
              </DataProvider>
            </div>
            <Bottombar stages={stages} />
          </section>
        </BrowserRouter>
      </div>
    </article>
  );
}
