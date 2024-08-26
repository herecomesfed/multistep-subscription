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

// Pricing Labels Types
// export interface pricingLabelsTypes {
//   monthly: {
//     shortLabel: string;
//     longLabel: string;
//   };
//   yearly: {
//     shortLabel: string;
//     longLabel: string;
//   };
// }

// Plans Pricing Types for bracket notation
export interface pricingTypes {
  monthly: number;
  yearly: number;
}

// All Context Props Types
export interface contextTypes {
  plans: plansDataTypes[];
  setPlans: React.Dispatch<React.SetStateAction<plansDataTypes[]>>;
  selectedPlan: plansDataTypes;
  data: addonsDataTypes[];
  setData: React.Dispatch<React.SetStateAction<addonsDataTypes[]>>;
  selectedAddons: addonsDataTypes[];
  billingType: string;
  setBillingType: React.Dispatch<React.SetStateAction<string>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataContext = createContext<contextTypes | null>(null);

function DataProvider({ children }: { children: ReactNode }) {
  // Plans state for Choose Plans Page
  const [plans, setPlans] = useState(plansData);
  const selectedPlan = plans.filter((plan) => plan.selected)[0];

  // Addons State for Choose Addons page
  const [data, setData] = useState(addonsData);
  const selectedAddons = data.filter((addon) => addon.selected);

  // Billing type
  // 1. Monthly (Default)
  // 2. Yearly

  const [billingType, setBillingType] = useState("monthly");
  // BillingType Checkbox Control Value
  const [isChecked, setIsChecked] = useState(false);

  return (
    <DataContext.Provider
      value={{
        plans,
        setPlans,
        selectedPlan,
        data,
        setData,
        selectedAddons,
        billingType,
        setBillingType,
        isChecked,
        setIsChecked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
