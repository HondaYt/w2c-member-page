"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/app.module.scss";

import MainVisual from "@/components/MainVisual";
import Introduction from "@/components/Introduction";
// import SectionTitle from "@/app/components/SectionTitle";
import Contents from "@/components/Contents";
import Members from "@/components/Members";
import Activity from "@/components/Activity";

export default function App() {
	return (
		<main>
			<MainVisual />
			<Introduction />
			{/* <Contents /> */}
			<Members />
			<Activity />
		</main>
	);
}
