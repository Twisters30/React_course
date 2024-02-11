import "./NoteView.css";
import {FC} from "react";

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
type TypeNote = {
	title: string;
	text: string;
	createdAt: number;
}

export const NoteView: FC<TypeNote> = ({title, text, createdAt }) => {
  return (
    <div className="note-view">
      <div className="note-view__head">
        <p className="note-view__datetime">{formatDate(createdAt)}</p>
        <p className="note-view__title">{title}</p>
      </div>

      <p className="note-view__text">
        {text}
      </p>
    </div>
  );
};
