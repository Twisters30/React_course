import {render} from "@testing-library/react";
import {MainPage} from "../pages/MainPage/MainPage";

describe('Тест компонента MainPage', () => {
	test('Проверка корректного рендеринга компонента MainPage', () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot()
	})
})

const renderComponent = () => {
	return render(<MainPage />)
}