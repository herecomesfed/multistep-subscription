import iconArcade from "./assets/icon-arcade.svg";
import iconAdvanced from "./assets/icon-advanced.svg";
import iconPro from "./assets/icon-pro.svg";

export const plansData = [
  {
    name: "Arcade",
    pricing: {
      monthly: 9,
      yearly: 90,
    },
    icon: iconArcade,
    selected: true,
  },
  {
    name: "Advanced",
    pricing: {
      monthly: 12,
      yearly: 120,
    },
    icon: iconAdvanced,
    selected: false,
  },
  {
    name: "Pro",
    pricing: {
      monthly: 15,
      yearly: 150,
    },
    icon: iconPro,
    selected: false,
  },
];

export const addonsData = [
  {
    name: "Online Service",
    description: "Access to multiplayer games",
    pricing: {
      monthly: 1,
      yearly: 10,
    },
    selected: false,
  },
  {
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    pricing: {
      monthly: 2,
      yearly: 20,
    },
    selected: false,
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    pricing: {
      monthly: 2,
      yearly: 20,
    },
    selected: false,
  },
];

// Pricing Labels Types
export interface pricingLabelsTypes {
  monthly: {
    shortLabel: string;
    longLabel: string;
  };
  yearly: {
    shortLabel: string;
    longLabel: string;
  };
}

export const pricingLabels = {
  monthly: {
    longLabel: "Monthly",
    shortLabel: "mo",
  },
  yearly: {
    longLabel: "Yearly",
    shortLabel: "yr",
  },
};
