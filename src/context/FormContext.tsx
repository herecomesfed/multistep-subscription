import { createContext, ReactNode, useState } from "react";

export interface formElementsType {
  name: string;
  placeholder: string;
  type: string;
  label: string;
  path?: RegExp;
  error: boolean;
  errorMessage: string;
}

export interface formValuesTypes {
  "your-name": string;
  "your-email": string;
  "your-phone": string;
}

export interface formContextType {
  formElements: formElementsType[];
  setFormElements: React.Dispatch<React.SetStateAction<formElementsType[]>>;
  formValues: formValuesTypes;
  setFormValues: React.Dispatch<React.SetStateAction<formValuesTypes>>;
  handleValidate: () => void;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContext = createContext<formContextType | null>(null);

function FormProvider({ children }: { children: ReactNode }) {
  const [formElements, setFormElements] = useState([
    {
      name: "your-name",
      placeholder: "e.g. Stephen King",
      type: "text",
      label: "Name",
      error: false,
      errorMessage: "",
    },
    {
      name: "your-email",
      placeholder: "stephenking@lorem.com",
      type: "email",
      label: "Email Address",
      path: /^[\w.-]+@[a-zA-Z\d-]+(\.[a-zA-Z]{2,})+$/,
      error: false,
      errorMessage: "",
    },
    {
      name: "your-phone",
      placeholder: "+1 234 567 890",
      type: "tel",
      label: "Phone Number",
      path: /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      error: false,
      errorMessage: "",
    },
  ]);

  const [formValues, setFormValues] = useState({
    "your-name": "",
    "your-email": "",
    "your-phone": "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleValidate() {
    setFormElements((prevEls: formElementsType[]) => {
      return prevEls.map((element) => {
        const inputValue = formValues[element.name as keyof formValuesTypes];
        if (
          inputValue === "" ||
          (element.path && !element.path.test(inputValue))
        ) {
          return {
            ...element,
            error: true,
            errorMessage: `Please insert a valid ${element.label}`,
          };
        } else {
          return { ...element, error: false, errorMessage: "" };
        }
      });
    });
  }

  return (
    <FormContext.Provider
      value={{
        formElements,
        setFormElements,
        formValues,
        setFormValues,
        handleValidate,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };
