import { useContext } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import OptionsContainer from "../components/OptionsContainer";
import Switcher from "../components/Switcher";
import {
  DataContext,
  contextTypes,
  plansDataTypes,
  pricingTypes,
} from "../context/DataContext";
import { pricingLabels, pricingLabelsTypes } from "../data";

export default function ChoosePlan() {
  const { plans, setPlans, billingType } = useContext(DataContext) as {
    plans: contextTypes["plans"];
    setPlans: contextTypes["setPlans"];
    billingType: contextTypes["billingType"];
  };

  function handleSelectPlan(name: string) {
    const updatedPlans = plans.map((plan) => {
      if (plan.name === name) {
        return { ...plan, selected: true };
      }
      return { ...plan, selected: false };
    });
    console.log(updatedPlans);
    setPlans(updatedPlans);
  }
  return (
    <>
      <Heading>Select your plan</Heading>
      <p>You have the option of monthly or yearly billing.</p>
      <Container>
        <ul className="md:flex md:justify-center gap-3">
          {plans.map((plan: plansDataTypes) => {
            return (
              <OptionsContainer
                selected={plan.selected}
                onClick={() => handleSelectPlan(plan.name)}
                key={plan.name}
              >
                <li>
                  <div className="flex md:flex-col gap-3">
                    <img
                      className="w-10 mb-5"
                      src={plan.icon}
                      alt={plan.name}
                    />
                    <div>
                      <h3 className="font-[500] col-2">{plan.name}</h3>
                      <p className="col-start-2">
                        $ {plan.pricing[billingType as keyof pricingTypes]}/
                        {
                          pricingLabels[billingType as keyof pricingLabelsTypes]
                            .shortLabel
                        }
                      </p>
                    </div>
                  </div>
                </li>
              </OptionsContainer>
            );
          })}
        </ul>
        <Switcher />
      </Container>
    </>
  );
}
