import { USERS } from "../../data";
import "./UsersPage.css";
import { Link } from "react-router-dom";
import {useFilterSearchParams} from "../../hooks/useFilterSearchParams";

export function UsersPage() {
	const { searchDataUserName, handleSearch } = useFilterSearchParams({username:'username'});
	const filteredUsers = USERS.filter(({ fullName }) =>
		fullName.toLowerCase().includes(searchDataUserName)
	);

	return (
		<div className="usersPage">
			<h2>UsersPage</h2>

			<div className="users">
				<label>
					введите имя{" "}
					<input data-testid={'user-input-search'} type="text" value={searchDataUserName} onChange={(e) => handleSearch(e, 'username')} />
				</label>

				{filteredUsers.map(({ id, fullName }) => (
					<Link to={`/users/${id}`} key={id}>
						{fullName}
					</Link>
				))}
			</div>
		</div>
	);
}
