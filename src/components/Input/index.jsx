import { useFormContext, Controller } from "react-hook-form";
import { Container, Separator } from "./styles";

export function Input({ name, placeholder, type, icon }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      controle={control}
      name={name}
      render={({ field }) => (
        <Container isValid={!!errors[name]?.message}>
          {icon}
          <Separator />
          <input type={type} {...field} placeholder={placeholder} />
        </Container>
      )}
    />
  );
}
