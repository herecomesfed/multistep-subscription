import { createContext, ReactNode, useState } from "react";
import { plansData, addonsData } from "../data";

// Plans Types
export interface plansDataTypes {
  name: string;
  pricing: {
    monthly: number;
    yearly: number;
  };
  icon: string;
  selected: boolean;
}

// export interface plansType {
//   plans: plansDataTypes[];
//   setPlans: plansDataTypes[];
// }

export interface contextTypes {
  plans: plansDataTypes[];
  setPlans: React.Dispatch<React.SetStateAction<plansDataTypes[]>>;
  selectedPlan: plansDataTypes[];
  setSelectedPlan: React.Dispatch<React.SetStateAction<plansDataTypes[]>>;
  data: addonsDataTypes[];
  setData: React.Dispatch<React.SetStateAction<addonsDataTypes[]>>;
}

// Addons Types
export interface addonsDataTypes {
  name: string;
  description: string;
  pricing: {
    monthly: number;
    yearly: number;
  };
  selected: boolean;
}

// export interface addonsTypes {
//   data: addonsDataTypes[];
//   setData: addonsDataTypes[];
// }

const DataContext = createContext<contextTypes | null>(null);

function DataProvider({ children }: { children: ReactNode }) {
  // Plans state for Choose Plans Page
  const [plans, setPlans] = useState(plansData);
  const [selectedPlan, setSelectedPlan] = useState(
    plansData.filter((plan) => plan.selected)
  );
  // Addons State for Choose Addons page
  const [data, setData] = useState(addonsData);

  return (
    <DataContext.Provider
      value={{
        plans,
        setPlans,
        selectedPlan,
        setSelectedPlan,
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
