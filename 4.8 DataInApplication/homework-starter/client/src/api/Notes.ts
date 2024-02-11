import {object, z} from "zod";
import {validateResponse} from "./validateResponse";
import {queryClient} from "./queryClient";

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
const getNotesParamsSchema = z.object({
	page: z.number(),
	pageSize: z.number(),
	searchString: z.string()
})
type TypeCrateNote = z.infer<typeof crateNoteSchema>;
type TypeResponseNote = z.infer<typeof responseNoteSchema>;
type TypeGetNotesParams = z.infer<typeof getNotesParamsSchema>

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
export const getNotes = ({pageSize, page, searchString}:TypeGetNotesParams): Promise<TypeResponseNote> => {
	const url = searchString ?
		`api/notes?page=${page}&pageSize=${pageSize}&searchString=${searchString}`:
		`api/notes?page=${page}&pageSize=${pageSize}`
	return fetch(url)
		.then(response => validateResponse(response))
		.then((data) => data.json())
		.then(jsonData => responseNoteSchema.parse(jsonData));
}