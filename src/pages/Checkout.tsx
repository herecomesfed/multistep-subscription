import { useContext } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import {
  DataContext,
  contextTypes,
  pricingTypes,
} from "../context/DataContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { pricingLabels } from "../data";

import thankYouIcon from "../assets/icon-thank-you.svg";

export default function Checkout() {
  const { selectedPlan, selectedAddons, billingType, isConfirmed } = useContext(
    DataContext
  ) as {
    selectedPlan: contextTypes["selectedPlan"];
    selectedAddons: contextTypes["selectedAddons"];
    billingType: contextTypes["billingType"];
    isConfirmed: contextTypes["isConfirmed"];
  };
  // const currentPlan = selectedPlan[0];
  const navigate = useNavigate();

  // Create Total pricing variable
  const totalPrice = [
    selectedPlan.pricing[billingType as keyof pricingTypes],
    ...selectedAddons.map(
      (addon) => addon.pricing[billingType as keyof pricingTypes]
    ),
  ].reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      {isConfirmed ? (
        <>
          <img className="mx-auto" src={thankYouIcon} alt="" />
          <Container textAlign="center">
            <Heading>Thank you!</Heading>
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </Container>
        </>
      ) : (
        <>
          <Heading>Finishing up</Heading>
          <p>Double-check everything looks OK before confirming.</p>
          <Container>
            <div className="bg-magnolia p-5 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">
                    {selectedPlan.name}{" "}
                    <span>
                      (
                      {
                        pricingLabels[billingType as keyof pricingTypes]
                          .longLabel
                      }
                    </span>
                    )
                  </h3>
                  <Button
                    onClick={() => navigate("/choose-plan")}
                    hasBg={false}
                  >
                    <span className="text-sm">Change</span>
                  </Button>
                </div>
                <p>
                  +
                  <span>
                    {selectedPlan.pricing[billingType as keyof pricingTypes]}
                  </span>
                  <span>
                    /
                    {
                      pricingLabels[billingType as keyof pricingTypes]
                        .shortLabel
                    }
                  </span>
                </p>
              </div>
              <hr className="h-2 my-3" />
              <ul data-name="addons">
                {selectedAddons.length > 0 &&
                  selectedAddons.map((addon) => {
                    return (
                      <li
                        key={addon.name}
                        className="flex justify-between items-center text-sm [&:not(:last-child)]:mb-2"
                      >
                        <p>{addon.name}</p>
                        <p>
                          +
                          <span>
                            {addon.pricing[billingType as keyof pricingTypes]}
                          </span>
                          <span>
                            /
                            {
                              pricingLabels[billingType as keyof pricingTypes]
                                .shortLabel
                            }
                          </span>
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="flex justify-between items-center text-sm p-5">
              <p>Total per month</p>
              <p>
                {totalPrice}/
                <span>
                  {pricingLabels[billingType as keyof pricingTypes].shortLabel}
                </span>
              </p>
            </div>
          </Container>
        </>
      )}
    </>
  );
}
