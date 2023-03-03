import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { Form, Field } from "../Forms";
import * as z from "zod";

const schema = z.object({
  Postnummer: z
    .string()
    .min(5, { message: "Postnummer måste vara minst 5 tecken." })
    .max(5, { message: "Postnummer får inte vara längre än 5 tecken." }),
  ort: z.string().min(2, { message: "Ort måste vara minst 2 tecken." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Telefonnummer måste vara minst 10 tecken." }),
  policyAgreement: z.boolean().refine((val) => val === true, {
    message: "Du måste godkänna integritetspolicyn.",
  }),
});

export const Nummer = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <Field label="">
          <FormControl isInvalid={errors.Postnummer}>
            <FormLabel htmlFor="Postnummer">Postnummer</FormLabel>
            <Input {...register("Postnummer")} id="Postnummer" />
            <FormErrorMessage>{errors.Postnummer?.message}</FormErrorMessage>
          </FormControl>
        </Field>
        <Field label="">
          <FormControl isInvalid={errors.ort}>
            <FormLabel htmlFor="ort">Ort</FormLabel>
            <Input {...register("ort")} id="ort" />
            <FormErrorMessage>{errors.ort?.message}</FormErrorMessage>
          </FormControl>
        </Field>
        <Field label="">
          <FormControl isInvalid={errors.phoneNumber}>
            <FormLabel htmlFor="phoneNumber">Telefon</FormLabel>
            <Input
              type="number"
              {...register("phoneNumber", {})}
              id="phoneNumber"
            />
            <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
          </FormControl>
        </Field>
        <Field label="">
          <FormControl isInvalid={errors.policyAgreement}>
            <FormLabel htmlFor="policyAgreement">
              Jag godkänner integritetspolicyn
            </FormLabel>
            <Checkbox {...register("policyAgreement")} id="policyAgreement" />
            <FormErrorMessage>
              {errors.policyAgreement?.message}
            </FormErrorMessage>
          </FormControl>
        </Field>

        <div className="button-row">
          <Button variant="secondary" onClick={() => navigate("/")}>
            {"<"} Föregående
          </Button>
          <Button type="submit">Nästa {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
