import { useAppState } from "../state";
import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Form, Section, SectionRow } from "../Forms";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Skickar datan till backend
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <Heading as="h1" size="lg" mb={4}>
        Tack!
      </Heading>
      <Section title="Sammanställning" url="/">
        <SectionRow>
          <Text fontWeight="bold">Förnamn</Text>
          <Text>{state.firstName}</Text>
        </SectionRow>
        <SectionRow>
          <Text fontWeight="bold">Efternamn</Text>
          <Text>{state.lastname}</Text>
        </SectionRow>
        <SectionRow>
          <Text fontWeight="bold">Adress</Text>
          <Text>{state.adress}</Text>
        </SectionRow>
        <SectionRow>
          <Text fontWeight="bold">Mail</Text>
          <Text>{state.email}</Text>
        </SectionRow>
        <SectionRow>
          <Text fontWeight="bold">Postnummer</Text>
          <Text>{state.Postnummer}</Text>
        </SectionRow>
        <SectionRow>
          <Text fontWeight="bold">Ort</Text>
          <Text>{state.ort}</Text>
        </SectionRow>
        <SectionRow>
          <Text fontWeight="bold">Telefonnummer</Text>
          <Text>{state.phoneNumber}</Text>
        </SectionRow>
        <SectionRow>
          <Text fontWeight="bold">Policy accepted</Text>
          <Text>Yes</Text>
        </SectionRow>
      </Section>
      <FormControl isInvalid={Boolean(state.policyAgreement?.message)}>
        <FormErrorMessage>{state.policyAgreement?.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} type="submit">
        Submit
      </Button>
    </Form>
  );
};
