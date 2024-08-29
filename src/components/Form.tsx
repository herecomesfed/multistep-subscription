import { useContext } from "react";
import {
  FormContext,
  formContextType,
  formValuesTypes,
} from "../context/FormContext";

export default function Form() {
  const { formElements, formValues, setFormValues } = useContext(
    FormContext
  ) as {
    formElements: formContextType["formElements"];
    formValues: formContextType["formValues"];
    setFormValues: formContextType["setFormValues"];
  };

  function handleSetValues(e: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <form>
      {formElements.map((element) => {
        return (
          <label key={element.name} className="block [&:not(:last-child)]:my-3">
            <p className="text-sm text-marine-blue">{element.label}</p>
            <input
              type={element.type}
              name={element.name}
              placeholder={element.placeholder}
              className="border-2 rounded-md p-2 w-full"
              value={formValues[element.name as keyof formValuesTypes]}
              onChange={handleSetValues}
            />
          </label>
        );
      })}
    </form>
  );
}
