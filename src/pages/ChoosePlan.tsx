// import { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import OptionsContainer from "../components/OptionsContainer";
import Switcher from "../components/Switcher";
import { plansData } from "../data";
console.log(plansData);
export default function ChoosePlan() {
  // const [selectedPlan, setSelectedPlan] = useState();
  return (
    <>
      <Heading>Select your plan</Heading>
      <p>You have the option of monthly or yearly billing.</p>
      <Container>
        <ul className="md:flex md:justify-center gap-3">
          {plansData.map((plan) => {
            return (
              <OptionsContainer key={plan.name}>
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
                        $ {plan.pricing.monthly} / mo
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
