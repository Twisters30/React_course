import {z} from "zod";
import {validateResponse} from "./validateResponse";

const crateNoteSchema = z.object({
	title: z.string(),
	text: z.string()
})
const responseNoteSchema = z.object({
	list: z.array(z.object({
		id: z.string(),
		title: z.string(),
		text: z.string(),
		userId: z.string(),
		createdAt: z.number()
	})),
	pageCount: z.number()
})
type TypeCrateNote = z.infer<typeof crateNoteSchema>;
type TypeResponseNote = z.infer<typeof responseNoteSchema>

export const createNote = ({title, text}: TypeCrateNote): Promise<void> => {
	return fetch('api/notes', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title,
			text
		})
	})
		.then(response => validateResponse(response))
		.then(() => Promise.resolve(undefined))
}
export const getNotes = (): Promise<TypeResponseNote> => {
	return fetch('api/notes ')
		.then(response => validateResponse(response))
		.then((data) => data.json())
		.then(jsonData => responseNoteSchema.parse(jsonData))
}