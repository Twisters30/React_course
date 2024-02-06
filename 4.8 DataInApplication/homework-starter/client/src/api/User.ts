import {z} from 'zod';
import {validateResponse} from "./validateResponse";

const RegisterUserSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
});
type TypeRegisterUser = z.infer<typeof RegisterUserSchema>

export const registerUser = (username: string, password: string, email: string): Promise<TypeRegisterUser> => {
    return fetch('/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            email
        })
    })
        .then(response => response.json())
        .then(validateResponse)
        .then((data) => RegisterUserSchema.parse(data));
}
export const login = (email: string, password: string) => {
    return fetch('/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password,
            email
        })
    }).then(validateResponse);
}