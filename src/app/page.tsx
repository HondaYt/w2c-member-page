"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/app.module.scss";

import MainVisual from "@/components/MainVisual";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
// import SectionTitle from "@/app/components/SectionTitle";
import Contents from "@/components/Contents";
import Members from "@/components/Members";
import Activity from "@/components/Activity";
import Works from "@/components/Works";

export default function App() {
	const [headerHeight, setHeaderHeight] = useState(0);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= window.innerHeight - headerHeight) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [headerHeight]);

	return (
		<main className={styles.mainContainer}>
			<MainVisual>
				<Header isSticky={isSticky} setHeaderHeight={setHeaderHeight} />
			</MainVisual>
			<Introduction />
			<Contents />

			<Members />
			<Activity />
			{/* <Works /> */}
		</main>
	);
}
