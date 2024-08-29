import { createContext, ReactNode, useState } from "react";

export interface formElementsType {
  name: string;
  placeholder: string;
  type: string;
  label: string;
}

export interface formValuesTypes {
  "your-name": string;
  "your-email": string;
  "your-phone": string;
}

export interface formContextType {
  formElements: formElementsType[];
  formValues: formValuesTypes;
  setFormValues: React.Dispatch<React.SetStateAction<formValuesTypes>>;
}

const FormContext = createContext<formContextType | null>(null);

const formElements = [
  {
    name: "your-name",
    placeholder: "e.g. Stephen King",
    type: "text",
    label: "Name",
  },
  {
    name: "your-email",
    placeholder: "stephenking@lorem.com",
    type: "email",
    label: "Email Address",
  },
  {
    name: "your-phone",
    placeholder: "+1 234 567 890",
    type: "tel",
    label: "Phone Number",
  },
];

function FormProvider({ children }: { children: ReactNode }) {
  const [formValues, setFormValues] = useState({
    "your-name": "",
    "your-email": "",
    "your-phone": "",
  });
  return (
    <FormContext.Provider value={{ formElements, formValues, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };
