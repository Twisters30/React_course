"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import { Menu } from "antd";

const items = [
	{key: 0, label: <Link href={"/"}>Home</Link>},
	{key: 1, label: <Link href={"/posts"}>Posts</Link>},
	{key: 2, label: <Link href={"/todo"}>Todo</Link>},
	{key: 3, label: <Link href={"/albums"}>Albums</Link>},
];


export const Navigation = () => {
	const currentRoutePath = usePathname();
	const getIndexForCurrenRoute = items.find((item) => item.label.props.href.includes(currentRoutePath));
	const keyMenuActiveLink = getIndexForCurrenRoute ? getIndexForCurrenRoute.key.toString() : "0";
	return(
		<Menu
			theme="dark"
			mode="horizontal"
			defaultSelectedKeys={[keyMenuActiveLink]}
			items={items}
			style={{flex: 1, minWidth: 0}}
		/>
	);
}