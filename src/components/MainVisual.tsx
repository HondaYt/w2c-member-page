import { useState, useEffect, useRef, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/main_visual.module.scss";
import Header from "@/components/Header";

export default function MainVisual() {
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
		<div className={styles.mainVisual}>
			<h2>あなたの成長を加速させる.</h2>
			<Header isSticky={isSticky} setHeaderHeight={setHeaderHeight} />
		</div>
	);
}
