import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export const Contact = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const watchPassword = watch("password");
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/Nummer");
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <FormControl id="first-name" isRequired mb={4}>
        <FormLabel>Förnamn</FormLabel>
        <Input {...register("firstName")} />
      </FormControl>
      <FormControl id="lastname" mb={4}>
        <FormLabel>Efternamn</FormLabel>
        <Input {...register("lastname")} />
      </FormControl>
      <FormControl id="adress" mb={4}>
        <FormLabel>Adress</FormLabel>
        <Input {...register("adress")} />
      </FormControl>
      <FormControl id="email" isRequired mb={4}>
        <FormLabel>Email</FormLabel>
        <Input {...register("email")} type="email" />
      </FormControl>

      <Button type="submit" disabled={!isValid}>
        Nästa {">"}
      </Button>
    </form>
  );
};
