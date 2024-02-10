import {useQuery} from "@tanstack/react-query";
import {fetchMe, logout} from "../../api/User";
import {queryClient} from "../../api/queryClient";
import {Loader} from "../Loader";
import {AuthForm} from "../AuthForm";
import {UserView} from "../UserView";
import {LogoutButton} from "../LogoutButton";
import {NotePage} from "../NotePage";

export const Account = () => {
	const meQuery = useQuery({
		queryFn: () => fetchMe(),
		queryKey: ["users", 'me'],
		retry: 0
	}, queryClient)
	switch (meQuery.status) {
		case 'pending':
			return <Loader classList={['loader-center']}/>;
		case 'error':
			return <AuthForm />;
		case 'success':
			return (
				<>
					<LogoutButton />
					<UserView username={meQuery.data.username} />
					<NotePage />
				</>
		)
	}
}