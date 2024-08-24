import { useContext } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import OptionsContainer from "../components/OptionsContainer";

import { contextTypes, DataContext } from "../context/DataContext";

export default function ChooseAddons() {
  const { data, setData } = useContext(DataContext) as {
    data: contextTypes["data"];
    setData: contextTypes["setData"];
  };

  function handleSelectAddon(name: string) {
    const updatedAddons = data.map((addon) => {
      if (addon.name === name && !addon.selected) {
        return { ...addon, selected: true };
      }
      if (addon.name === name && addon.selected) {
        return { ...addon, selected: false };
      }
      return { ...addon };
    });

    setData(updatedAddons);
  }
  return (
    <>
      <Heading>Pick Addons</Heading>
      <p>Add-ons help enhance your gaming experience.</p>
      <Container>
        {data.map((addon) => {
          return (
            <OptionsContainer
              onClick={() => handleSelectAddon(addon.name)}
              key={addon.name}
              selected={addon.selected}
            >
              <div className="flex justify-between items-center gap-3">
                <input
                  onChange={() => handleSelectAddon(addon.name)}
                  type="checkbox"
                  checked={addon.selected}
                />
                <div className="flex-1">
                  <h3 className="font-bold">{addon.name}</h3>
                  <p>{addon.description}</p>
                </div>
                <p>
                  +<span>{addon.pricing.monthly}</span>/mo
                </p>
              </div>
            </OptionsContainer>
          );
        })}
      </Container>
    </>
  );
}
