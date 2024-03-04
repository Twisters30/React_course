import {fireEvent, render, screen} from "@testing-library/react";
import {RenderWithRouter} from "./helpers/renderWithRouter";

describe('Компонент PlaylistsPage: тест', () => {
	test('проверяем вызов метода setSearchParam из react-router-dom при вводе жанра', () => {
		render(
			<RenderWithRouter initialEntries={'/playlists'}
			/>
		)
		const inputSearchGenre = screen.getByTestId('input-genre');
		fireEvent.change(inputSearchGenre, { target: { value: 'rock' } });
		const searchGenre = screen.queryByText('Great Rock Hits');
		expect(searchGenre).toBeInTheDocument();
	})
	test('проверяем вызов метода setSearchParam из react-router-dom при вводе имени плэйлиста', () => {
		render(
			<RenderWithRouter initialEntries={'/playlists'}
			/>
		)
		const inputSearchPlaylistName = screen.getByTestId('input-playlist-name');
		fireEvent.change(inputSearchPlaylistName, { target: { value: 'rapp' } });
		const searchPlaylistName = screen.queryByText('Gansta Rapp');
		expect(searchPlaylistName).toBeInTheDocument();
	})
})