import {render, screen} from "@testing-library/react";
import { PlaylistsInfoPage } from "../pages/PlaylistsInfoPage";
import {PLAYLISTS} from "../data";
import {RenderWithRouter} from "./helpers/renderWithRouter";

describe('Тестирование компонента PlaylistsInfoPage', () => {
	test('отображает текст по умолчанию, когда нет доступных плейлистов', () => {
		 render(
			<RenderWithRouter
			initialEntries={'/playlists/11111111'}
			component={<PlaylistsInfoPage playlists={PLAYLISTS} />}
		/>);
		const defaultText = screen.getByTestId('empty-playlist-id');
		expect(defaultText).toBeInTheDocument()
	});

	test('отображает данные о playlist: жанр, название плэйлиста, список треков', () => {
		render(
			<RenderWithRouter
				initialEntries={'/playlists/1'}
				component={<PlaylistsInfoPage playlists={PLAYLISTS} />}
			/>
		)

		const genre = screen.getByTestId('genre-id')
		const playlistName = screen.getByTestId('playlist-name-id')
		const playlistList = screen.getByTestId('playlist-list-id')
		expect(genre).toBeInTheDocument();
		expect(playlistName).toBeInTheDocument();
		expect(playlistList).toBeInTheDocument();
		expect(playlistList.children.length).toBeGreaterThan(0)
	})
})