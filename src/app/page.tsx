"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/app.module.scss";

import MainVisual from "@/app/components/MainVisual";
import Introduction from "@/app/components/Introduction";
// import SectionTitle from "@/app/components/SectionTitle";
import Contents from "@/app/components/Contents";
import Members from "@/app/components/Members";
import Details from "@/app/components/Details";

export default function App() {
	return (
		<main>
			<MainVisual />
			<Introduction />
			{/* <Contents /> */}
			<Members />
			<Details />
		</main>
	);
}
