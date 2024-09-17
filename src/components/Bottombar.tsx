import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { ReactElement, useCallback, useContext, useEffect } from "react";
import { contextTypes, DataContext } from "../context/DataContext";
import { FormContext, formContextType } from "../context/FormContext";

interface stageTypes {
  name: string;
  label: string;
  id: number;
  path: string;
  component: ReactElement;
}

export default function Bottombar({ stages }: { stages: stageTypes[] }) {
  const { isConfirmed, setIsConfirmed } = useContext(DataContext) as {
    isConfirmed: contextTypes["isConfirmed"];
    setIsConfirmed: contextTypes["setIsConfirmed"];
  };
  const { formElements, handleValidate, isSubmitted, setIsSubmitted } =
    useContext(FormContext) as {
      handleValidate: formContextType["handleValidate"];
      formElements: formContextType["formElements"];
      isSubmitted: formContextType["isSubmitted"];
      setIsSubmitted: formContextType["setIsSubmitted"];
    };
  // Check the actual url using useLocation
  const location = useLocation();
  const { pathname } = location;
  // Create Navigate function
  const navigate = useNavigate();
  // Check Current Previous and Next Component
  const currentComponent = stages.find((stage) => stage.path === pathname);
  const previousComponent = stages.find(
    (stage) => currentComponent && stage.id === currentComponent.id - 1
  );
  const nextComponent = stages.find(
    (stage) => currentComponent && stage.id === currentComponent.id + 1
  );
  const formLocation = pathname === "/your-info";

  function handlePreviousStep() {
    if (!previousComponent) return;
    navigate(previousComponent.path);
  }

  // Using function expression for the useCallback hook
  const handleNextStep = useCallback(() => {
    if (!nextComponent) return;
    if (formElements.some((element) => element.error)) return;
    navigate(nextComponent.path);
  }, [formElements, navigate, nextComponent]);

  // Submit form function
  function handleSubmit() {
    setIsSubmitted(true);
    handleValidate();
  }

  // Check for submit event and return if there are errors
  useEffect(() => {
    if (!isSubmitted) return;
    if (formElements.some((element) => element.error)) return;
    handleNextStep();
    setIsSubmitted(false);
  }, [formElements, isSubmitted, setIsSubmitted, handleNextStep]);

  // Confirm order if last page
  function handleConfirmOrder() {
    setIsConfirmed(true);
  }

  return (
    !isConfirmed && (
      <div className="flex justify-between items-center fixed md:static bg-white bottom-0 left-0 w-full p-5 z-50">
        {previousComponent ? (
          <Button onClick={handlePreviousStep} hasBg={false}>
            Go Back
          </Button>
        ) : (
          <span className="invisible"></span>
        )}
        {nextComponent && (
          <Button onClick={formLocation ? handleSubmit : handleNextStep}>
            Next Step
          </Button>
        )}
        {!nextComponent && (
          <Button onClick={handleConfirmOrder}>Confirm</Button>
        )}
      </div>
    )
  );
}
