import {render} from "@testing-library/react";
import {MainPage} from "../pages/MainPage/MainPage";

// it('render it work',async () => {
// 	render(<MainPage />)
// })

describe('Тест компонента MainPage', () => {
	test('Проверка корректного рендеринга компонента', () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot()
	})
})

const renderComponent = () => {
	return render(<MainPage />)
}