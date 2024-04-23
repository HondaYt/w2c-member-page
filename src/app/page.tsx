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

	const contentsRef = useRef<HTMLDivElement>(null);
	const [isContentsBottom, setIsContentsBottom] = useState(false); // スクロールの状態を保持するフラグ
	const [isContentsTop, setIsContentsTop] = useState(false); // スクロールの状態を保持するフラグ

	const [isSnap, setIsSnap] = useState(false);

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

	useEffect(() => {
		let lastScrollY = window.scrollY; // 前回のスクロール位置を記録する変数

		const handleScroll = () => {
			const currentScrollY = window.scrollY; // 現在のスクロール位置

			if (!contentsRef.current) {
				lastScrollY = currentScrollY; // スクロール位置を更新
				return;
			}

			const contentsTop = contentsRef.current.offsetTop;
			const contentsHeight = contentsRef.current.offsetHeight;
			const contentsBottom = contentsTop + contentsHeight;
			const scrollPosition = currentScrollY + window.innerHeight;

			if (currentScrollY > lastScrollY) {
				if (!isContentsBottom) {
					if (
						scrollPosition >= contentsBottom &&
						scrollPosition < contentsBottom + window.innerHeight
					) {
						window.scrollTo({
							top: contentsBottom - window.innerHeight,
							behavior: "smooth",
						});
						setIsSnap(true);
					} else {
						setIsSnap(false);
					}
				}
				lastScrollY = currentScrollY; // スクロール位置を更新
			}
			if (currentScrollY < lastScrollY) {
				if (!isContentsTop) {
					if (
						scrollPosition <= contentsBottom &&
						scrollPosition > contentsBottom - window.innerHeight
					) {
						window.scrollTo({
							top: contentsBottom - window.innerHeight,
							behavior: "smooth",
						});
						setIsSnap(true);
					} else {
						setIsSnap(false);
					}
				}
				// Contentsの底辺が画面内に入ったら、スクロールをスナップさせる
				lastScrollY = currentScrollY; // スクロール位置を更新
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isContentsBottom, isContentsTop]); // isContentsBottom, isContentsTopを依存配列に追加

	return (
		<main className={styles.mainContainer}>
			<MainVisual>
				<Header isSticky={isSticky} setHeaderHeight={setHeaderHeight} />
			</MainVisual>
			<Introduction />
			<Contents
				isContentsTop={isContentsTop}
				setIsContentsTop={setIsContentsTop}
				isContentsBottom={isContentsBottom}
				setIsContentsBottom={setIsContentsBottom}
				contentsRef={contentsRef}
				isSnap={isSnap}
			/>

			<Members />
			<Activity />
			{/* <Works /> */}
		</main>
	);
}
