import Container from "../components/Container";
import Heading from "../components/Heading";
import OptionsContainer from "../components/OptionsContainer";

import { addonsData } from "../data";

export default function ChooseAddons() {
  return (
    <>
      <Heading>Pick Addons</Heading>
      <p>Add-ons help enhance your gaming experience.</p>
      <Container>
        {addonsData.map((addon) => {
          return (
            <OptionsContainer key={addon.name}>
              <label className="flex justify-between items-center gap-3">
                <input type="checkbox" name="" id="" />
                <div className="flex-1">
                  <h3 className="font-bold">{addon.name}</h3>
                  <p>{addon.description}</p>
                </div>
                <p>
                  +<span>{addon.pricing.monthly}</span>/mo
                </p>
              </label>
            </OptionsContainer>
          );
        })}
      </Container>
    </>
  );
}
