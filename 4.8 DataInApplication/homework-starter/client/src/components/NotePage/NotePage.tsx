import {NoteForm} from "../NoteForm";
import {NotesListView} from "../NotesListView";
import './NotePage.css';

export const NotePage = () => {
	return (
		<div className={'note-page'}>
			<NoteForm />
			<NotesListView />
		</div>
	)
}