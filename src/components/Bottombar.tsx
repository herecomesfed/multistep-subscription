import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { ReactElement, useContext } from "react";
import { contextTypes, DataContext } from "../context/DataContext";

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

  function handlePreviousStep() {
    if (!previousComponent) return;
    navigate(previousComponent.path);
  }

  function handleNextStep() {
    if (!nextComponent) return;
    navigate(nextComponent.path);
  }

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
        {nextComponent && <Button onClick={handleNextStep}>Next Step</Button>}
        {!nextComponent && (
          <Button onClick={handleConfirmOrder}>Confirm</Button>
        )}
      </div>
    )
  );
}
