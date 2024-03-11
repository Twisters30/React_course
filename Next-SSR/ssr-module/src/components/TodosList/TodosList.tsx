import { Space } from "antd";
import { FC, useEffect, useState } from "react";
import Api from "../../api/api";
import { Todos } from "../../models";
import Todo from "../Todo/Todo";

const getData = async (): Promise<Todos> => {
	return await Api.getTodos();
};
const TodosList: FC = async () => {
	const data = await getData();

	return (
		<Space direction="vertical" size="middle" style={{ display: "flex" }}>
			{ Array.isArray(data) ? data.map((todo) => (
				<Todo todo={todo} key={todo.id} />
			)) : <div>Ошибка</div>
			}
		</Space>
	);
};

export default TodosList;
