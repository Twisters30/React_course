import {Link, useParams} from "react-router-dom";
import {PLAYLISTS} from "../../data";
import './PlaylistsInfoPage.css'

export const PlaylistsInfoPage = () => {
	const { playlistId } = useParams();
	const playlist = PLAYLISTS[Number(playlistId)];
	return (
		<>
			<h2>PlaylistsInfoPage</h2>
			<h3>
				Жанр: <Link className={'playlist__link'} to={'/playlists'}>{playlist.genre}</Link>
			</h3>
			<h3>Название: {playlist.name}</h3>
			<ul className={'songs__list'}>
				{ !playlist ? 'список пуст' :
					playlist?.songs.map(song => <li className={'songs__item'} key={song + Math.random()}>- {song}</li>)
				}
			</ul>
		</>
	)
}