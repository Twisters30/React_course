import {Route, Routes} from "react-router-dom";
import {MainPage, UserInfoPage, UsersPage} from "../pages";
import {PlaylistsPage} from "../pages/PlaylistsPage";
import {PlaylistsInfoPage} from "../pages/PlaylistsInfoPage";
import {PLAYLISTS} from "../data";

export const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/users" element={<UsersPage />} />
				<Route path="/users/:userId" element={<UserInfoPage />} />
				<Route path="/playlists?" element={<PlaylistsPage />} />
				<Route path="/playlists/:playlistId" element={<PlaylistsInfoPage playlists={PLAYLISTS} /> } />
			</Routes>
		</div>
	)
}