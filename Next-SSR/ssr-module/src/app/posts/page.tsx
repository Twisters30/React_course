import PostsList from "../../components/PostsList/PostsList";
import { FC } from "react";

const Page: FC = () => {
	return (
		<div className="page-wrapper red">
			<h1>Posts</h1>
			<PostsList />
		</div>
	);
};

export default Page;
