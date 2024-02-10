import "./NotesListView.css";
import {NoteView} from "../NoteView";
import {useQuery} from "@tanstack/react-query";
import {getNotes} from "../../api/Notes";
import {queryClient} from "../../api/queryClient";
import {Loader} from "../Loader";

export const NotesListView = () => {
	const notesQuery = useQuery({
		queryKey: ['notes', 'all'],
		queryFn: () => getNotes()
	}, queryClient)
	return (
		<ul className="note-list-view">
			{ notesQuery.isPending ? <Loader classList={['loader-center']}/> :
				notesQuery.data?.list.map(note => (
					<li key={note.id}>
						<NoteView title={note.title} text={note.text}/>
					</li>
				)).reverse()
			}
		</ul>
	);
};
