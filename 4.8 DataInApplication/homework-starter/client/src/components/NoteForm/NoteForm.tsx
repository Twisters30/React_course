import {FormField} from "../FormField";
import {Button} from "../Button";
import "./NoteForm.css";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation} from "@tanstack/react-query";
import {z} from "zod";
import {createNote} from "../../api/Notes";
import {queryClient} from "../../api/queryClient";

const noteSchema = z.object({
	title: z.string().min(1),
	text: z.string().min(10, 'не меньше 10 символов').max(300, 'не больше 300 символов')
})

type TypeNote = z.infer<typeof noteSchema>

export const NoteForm = () => {
	const {register, reset, handleSubmit, formState: {errors}} = useForm<TypeNote>({
		resolver: zodResolver(noteSchema)
	})
	const noteMutation = useMutation({
		mutationFn: createNote,
		async onSuccess() {
			await queryClient.invalidateQueries({queryKey: ['notes', 'all']});
			reset({title: '',text: ''});
		}
	}, queryClient)
	return (
		<form
			onSubmit={handleSubmit(({title, text}) => {
				noteMutation.mutate({title, text});
			})}
			className="note-form"
		>
			<FormField label="Заголовок" errorMessage={errors.title?.message}>
				<input {...register('title')} type="text"/>
			</FormField>
			<FormField label="Текст" errorMessage={errors.text?.message}>
				<textarea {...register('text')}/>
			</FormField>
			<Button isDisabled={noteMutation.isPending} isLoading={noteMutation.isPending}>
				Сохранить
			</Button>
		</form>
	);
};
