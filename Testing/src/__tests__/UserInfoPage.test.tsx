import {fireEvent, render, screen} from "@testing-library/react";
import {RenderWithRouter} from "./helpers/renderWithRouter";
import {UserInfoPage} from "../pages/UserInfoPage/UserInfoPage";
import {userEvent} from "@testing-library/user-event";

describe('Тестирование Компонента UserInfoPage',() => {
	test('тест, проверяющий текст по умолчанию, если нет пользователя', () => {
		render(
			<RenderWithRouter
				initialEntries={'/users/11123'}
				component={<UserInfoPage />}
			/>
		)
		const defaultText = screen.getByTestId('default-text')
		expect(defaultText).toBeInTheDocument()
	})
	test('тест, проверяющий данные о пользователе, если он существует (email, имя, ссылка на плейлист)', () => {
		render(
			<RenderWithRouter initialEntries={'/users/1'}
			/>
		)
		const userLinkPlaylist = screen.getByTestId('link-playlist');
		const userName = screen.getByTestId('user-name');
		const userEmail = screen.getByTestId('user-email');
		expect(userLinkPlaylist).toBeInTheDocument()
		expect(userName).toBeInTheDocument()
		expect(userEmail).toBeInTheDocument()
	})
	test('тест, проверяющий вызов метода setSearchParam из react-router-dom при вводе имени',() => {
		render(
			<RenderWithRouter initialEntries={'/users'}
			/>
		)
		const inputSearchUser = screen.getByTestId('user-input-search');
		fireEvent.change(inputSearchUser, { target: { value: 'Ruby Koch' } });
		const searchUserName = screen.queryByText('Ruby Koch');
		expect(searchUserName).toBeInTheDocument();
	})
})