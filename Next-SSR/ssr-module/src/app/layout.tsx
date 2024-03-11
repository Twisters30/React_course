import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import styles from "./layout.module.scss";
import { Layout } from "antd";
import { Header, Footer } from "antd/es/layout/layout";
import { Navigation } from "@/components/Navigation/Navigation";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={inter.className}>
		<AntdRegistry>
			<Layout className={styles.root}>
				<Header className={styles.header}>
					<Navigation />
				</Header>
				<div className={styles.main}>{children}</div>
				<Footer className={styles.footer}>Footer</Footer>
			</Layout>
		</AntdRegistry>
		</body>
		</html>
	);
}
