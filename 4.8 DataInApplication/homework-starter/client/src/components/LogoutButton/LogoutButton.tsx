import { Button } from "../Button";
import "./LogoutButton.css";
import {logout} from "../../api/User";
import { useMutation} from "@tanstack/react-query";
import {queryClient} from "../../api/queryClient";

export const LogoutButton = () => {
	const logoutMutation = useMutation({
		mutationFn: () => logout(),
		onSuccess() {
			console.log('logoutMutation - success')
			queryClient.invalidateQueries({queryKey: ['users', 'me']})
		}
	}, queryClient)
  return (
    <div className="logout-button">
      <Button
	      isLoading={logoutMutation.isPending}
	      isDisabled={logoutMutation.isPending}
	      kind="secondary"
	      handleClick={logoutMutation.mutate}
      >
	      Выйти
			</Button>
    </div>
  );
};
