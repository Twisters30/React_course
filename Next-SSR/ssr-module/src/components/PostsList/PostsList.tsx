import { Space } from "antd";
import { ReactElement } from "react";
import Post from "../Post/Post";
import Api from "../../api/api";
import { Posts } from "../../models";

const getData = async (): Promise<Posts> => {
	return await Api.getPosts();
};

const PostsList = async (): Promise<ReactElement> => {

	const data = await getData();

	return (
		<Space direction="vertical" size="middle" style={{ display: "flex" }}>
			{
				Array.isArray(data) ? data.map((post) => (
						<Post post={post} key={post.id}/>
					))
					: <div>Ошибка</div>
			}
		</Space>
	);
};

export default PostsList;
