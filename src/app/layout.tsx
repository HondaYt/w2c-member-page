import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "ress";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "W2C - Web Creative Club",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ja">
			<link
				rel="icon"
				href="/icon?<generated>"
				type="image/<generated>"
				sizes="<generated>"
			/>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
