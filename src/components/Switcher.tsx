import { useContext } from "react";
import { contextTypes, DataContext } from "../context/DataContext";

export default function Switcher() {
  const { billingType, setBillingType, isChecked, setIsChecked } = useContext(
    DataContext
  ) as {
    billingType: contextTypes["billingType"];
    setBillingType: contextTypes["setBillingType"];
    isChecked: contextTypes["isChecked"];
    setIsChecked: contextTypes["setIsChecked"];
  };

  function handleChangePaymentMethod() {
    setIsChecked(!isChecked);
    setBillingType(billingType === "monthly" ? "yearly" : "monthly");
  }
  return (
    <label className="flex justify-center items-center gap-3 cursor-pointer mt-5 p-3 bg-magnolia rounded-lg">
      <p className="text-marine-blue font-bold">Monthly</p>
      <input
        onChange={handleChangePaymentMethod}
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isChecked}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <p>Yearly</p>
    </label>
  );
}
