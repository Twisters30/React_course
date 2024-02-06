import "./LoginForm.css";
import { FormField } from "../FormField";
import { Button } from "../Button";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const createLoginSchema = z.object({
    email: z.string().email('Email не валиден'),
    password: z.string().min(8, 'пароль должен содержать не менее восьми символов')
})

type TypeLoginSchema = z.infer<typeof createLoginSchema>


export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<TypeLoginSchema>({
      resolver: zodResolver(createLoginSchema)
  });
    const onSubmit = (data: TypeLoginSchema) => {
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <FormField label="Email" errorMessage={errors.email?.message}>
        <input { ...register('email') }/>
      </FormField>
      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input type="password" { ...register('password') } />
      </FormField>
      <Button>Войти</Button>
    </form>
  );
};
