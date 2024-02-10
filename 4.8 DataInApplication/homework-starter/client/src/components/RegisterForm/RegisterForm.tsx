import { FormField } from "../FormField";
import { Button } from "../Button";
import "./RegisterForm.css";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query';
import {registerUser} from "../../api/User";
import {queryClient} from "../../api/queryClient";
import {FC} from "react";

const createRegisterSchema = z.object({
    username: z.string().min(5, 'Имя должно быть не мене 5 символов'),
    email: z.string().email('Email не валиден'),
    password: z.string().min(8, 'пароль должен содержать не менее восьми символов')
})

type TypeRegisterSchema = z.infer<typeof createRegisterSchema>
type TypeRegisterProps = {
    changeAuthState: () => void
}

export const RegisterForm: FC<TypeRegisterProps> = ({changeAuthState}) => {

	const createRegisterMutation = useMutation({
		mutationFn: registerUser,
		onSuccess() {
			changeAuthState()
		},
		onError(error) {
			if (error.toString().includes('email') && error instanceof Error) {
				setError('email', {
					type: 'server',
					message: error.message
				})
			}
		}
	}, queryClient)

	const {register, handleSubmit, formState: {errors}, setError} = useForm<TypeRegisterSchema>({
		resolver: zodResolver(createRegisterSchema)
	});

  return (
    <form
	    onSubmit={handleSubmit(({username, email, password}) => {
			createRegisterMutation.mutate({username, email, password});
    })}
	    className="register-form"
    >
      <FormField label="Имя" errorMessage={errors.username?.message}>
        <input { ...register('username')} />
      </FormField>
      <FormField label="Email" errorMessage={errors.email?.message}>
        <input { ...register('email') } />
      </FormField>
      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input type="password" { ...register('password') }/>
      </FormField>
      <Button isDisabled={createRegisterMutation.isPending} isLoading={createRegisterMutation.isPending}>
          Зарегистрироваться
      </Button>
    </form>
  );
};
