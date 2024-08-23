export default function Form() {
  const formElements = [
    {
      name: "your-name",
      placeholder: "e.g. Stephen King",
      type: "text",
      label: "Name",
    },
    {
      name: "your-email",
      placeholder: "stephenking@lorem.com",
      type: "email",
      label: "Email Address",
    },
    {
      name: "your-phone",
      placeholder: "+1 234 567 890",
      type: "tel",
      label: "Phone Number",
    },
  ];
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
            />
          </label>
        );
      })}
    </form>
  );
}
