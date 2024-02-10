import {z} from 'zod';
import {validateResponse} from "./validateResponse";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const RegisterUserSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
});
const LoginUserSchema = z.object({
    email: z.string(),
    password: z.string(),
})
const RegisterResponseSchema = z.object({
    id: z.string()
})
const FetchMeResponseSchema = z.object({
    id: z.string(),
    email: z.string(),
    username: z.string()
})
type TypeRegisterUser = z.infer<typeof RegisterUserSchema>
type TypeResponseUser = z.infer<typeof RegisterResponseSchema>
type TypeLoginUser = z.infer<typeof LoginUserSchema>
export type TypeFetchMeResponse = z.infer<typeof FetchMeResponseSchema>

export const registerUser = ({username, password, email}: TypeRegisterUser): Promise<TypeResponseUser> => {
    return fetch('api/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
        })
    })
        .then(validateResponse)
        .then(response => response.json())
        .then((data) => RegisterResponseSchema.parse(data))
}
export const login = ({email, password}:TypeLoginUser) => {
    return fetch('api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password,
            email
        })
    }).then(validateResponse);
}
export const fetchMe = (): Promise<TypeFetchMeResponse> => {
    return fetch('api/users/me')
        .then(validateResponse)
        .then(response => response.json())
        .then(data => FetchMeResponseSchema.parse(data))
}
export const logout = (): Promise<void> => {
	return fetch('/api/logout ', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		}
	})
		.then(response => validateResponse(response))
		.then(() => Promise.resolve(undefined))
}