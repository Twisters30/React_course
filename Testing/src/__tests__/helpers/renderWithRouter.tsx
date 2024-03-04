import {MemoryRouter} from "react-router-dom";
import {FC, ReactNode} from "react";
import {AppRouter} from "../../router/AppRouter";

type TProps = {
	initialEntries: string;
	component?: ReactNode;
}

export const RenderWithRouter: FC<TProps> = ({component,initialEntries = '/'}) => {
	return (
		<MemoryRouter initialEntries={[initialEntries]}>
			<AppRouter />
		</MemoryRouter>
	)
}