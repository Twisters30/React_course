import "./LoginForm.css";
import {FormField} from "../FormField";
import {Button} from "../Button";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {login} from "../../api/User";
import {queryClient} from "../../api/queryClient";

const loginSchema = z.object({
	email: z.string().email('Email не валиден'),
	password: z.string().min(8, 'пароль должен содержать не менее восьми символов'),
})

type TypeLoginSchema = z.infer<typeof loginSchema>

export const LoginForm = () => {
	const {register, handleSubmit, formState: {errors}, setError} = useForm<TypeLoginSchema>({
		resolver: zodResolver(loginSchema)
	});
	const loginMutation = useMutation({
		mutationFn: login,
		onSuccess() {
			queryClient.invalidateQueries({queryKey: ['users', 'me']})
		},
		onError(error) {
			if (error instanceof Error) {
				if (error.message.includes('email')) {
					setError('email', {
						message: error.message
					})
				}
			}
		}
	}, queryClient)

	return (
		<form
			onSubmit={handleSubmit(({email, password}) => {
				loginMutation.mutate({email, password})
			})}
			className="login-form"
		>
			<FormField label="Email" errorMessage={errors.email?.message}>
				<input {...register('email')}/>
			</FormField>
			<FormField label="Пароль" errorMessage={errors.password?.message}>
				<input type="password" {...register('password')} />
			</FormField>
			<Button isDisabled={loginMutation.isPending} isLoading={loginMutation.isPending}>Войти</Button>
		</form>
	);
};
