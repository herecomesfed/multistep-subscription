import Container from "../components/Container";
import Form from "../components/Form";
import Heading from "../components/Heading";
export default function YourInfo() {
  return (
    <div>
      <Heading>Personal Info</Heading>
      <p>Please provide your name, email address, and phone number.</p>
      <Container>
        <Form />
      </Container>
    </div>
  );
}
