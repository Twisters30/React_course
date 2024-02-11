import "./NotesListView.css";
import {NoteView} from "../NoteView";
import {useQuery, keepPreviousData} from "@tanstack/react-query";
import {getNotes} from "../../api/Notes";
import {queryClient} from "../../api/queryClient";
import {Loader} from "../Loader";
import {PageSelector} from "../PageSelector";
import {useState} from "react";

export const NotesListView = () => {
	const [currentPage, setPage] = useState(0)
	const { data, isPending, isPlaceholderData } = useQuery({
		queryKey: ['notes', currentPage],
		queryFn: () => getNotes({page:currentPage, pageSize: 6, searchString: ''}),
		placeholderData:keepPreviousData
	}, queryClient)
	const prevPage = () => {
		setPage((old) => Math.max(old - 1, 0))
	}
	const nextPage = () => {
		if (!isPlaceholderData && data.list.length) {
			setPage((old) => old + 1)
		}
	}
	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			{ isPending ? <Loader classList={['loader-center']}/> :
				<>
					<ul className="note-list-view">
						{
							data?.list.map(note => (
								<li key={note.id}>
									<NoteView title={note.title} text={note.text} createdAt={note.createdAt}/>
								</li>
							))
						}
					</ul>
					<PageSelector
						canSelectPrev={currentPage !== 0}
						canSelectNext={currentPage + 1 < data?.pageCount}
						currentPage={currentPage + 1}
						onPrevClick={prevPage}
						onNextClick={nextPage}
					/>
				</>
			}

		</div>
	);
};
