import {PLAYLISTS} from "../../data";
import {Link} from "react-router-dom";
import './PlaylistsPage.css'
import {useFilterSearchParams} from "../../hooks/useFilterSearchParams";

export const PlaylistsPage = () => {

	const { searchDataName, searchDataGenre, handleSearch} = useFilterSearchParams({name: 'name' ,genre: 'genre'});
	const filteredByGenre = PLAYLISTS.filter((item) => item.genre.toLowerCase().includes(searchDataGenre));
	const filteredByName = PLAYLISTS.filter((item) => item.name.toLowerCase().includes(searchDataName));

	// тестовый кондишн
	let filteredList;
	if (searchDataName && searchDataGenre) {
		filteredList = [...new Set([...filteredByGenre,...filteredByName])];
	} else if (searchDataGenre) {
		filteredList = filteredByGenre;
	} else if (searchDataName) {
		filteredList = filteredByName;
	} else {
		filteredList = PLAYLISTS;
	}
	return (
		<>
			<h2>Playlists Page</h2>
			<div className={'flex-list'}>
				<label>
					введите жанр: {" "}
					<input type="text" value={searchDataGenre} onChange={(e) => {
						handleSearch(e, 'genre')
					}} />
				</label>
				<label>
					введите название: {" "}
					<input type="text" value={searchDataName} onChange={(e) => {
						handleSearch(e, 'name')
					}} />
				</label>
				<div className={'separator'}></div>
			</div>
			<ul className={'playlist__list'}>
				{
					!filteredList.length ? <h3>Ничего не найденно</h3> :
						filteredList.map(item => {
						if (item.genre !== 'Non Music') {
							return (
								<li key={item.id} className={'playlist__item'}>
									<Link
										className={'playlist__link'}
										to={`/playlists/${item.id}`}
									>
										{item.name}
									</Link>
								</li>
							)
						}
					})
				}
			</ul>
		</>
	)
}