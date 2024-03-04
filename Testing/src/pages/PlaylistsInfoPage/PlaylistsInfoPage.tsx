import {Link, useParams} from "react-router-dom";
import './PlaylistsInfoPage.css'
import type {TPlaylist} from "../../data/interfaces";
import {FC} from "react";
type TProps = {
	playlists :TPlaylist[];
}

export const PlaylistsInfoPage: FC<TProps> = ({playlists}) => {
	const { playlistId } = useParams();
	const playlist = playlists && playlistId ? playlists[Number(playlistId)] : null;
	if (!playlist) {
		return <h2 data-testid="empty-playlist-id">'Нет доступных плейлистов.'</h2>
	} else {
		return (
			<>
				<h2 >PlaylistsInfoPage</h2>
				<h3 data-testid={'genre-id'}>
					Жанр: <Link className={'playlist__link'} to={'/playlists'}>{playlist.genre}</Link>
				</h3>
				<h3 data-testid={'playlist-name-id'}>Название: {playlist.name}</h3>
				<ul data-testid={'playlist-list-id'} className={'songs__list'}>
					{
						playlist?.songs.map(song => <li className={'songs__item'} key={song + Math.random()}>- {song}</li>)
					}
				</ul>
			</>
		)
	}
}