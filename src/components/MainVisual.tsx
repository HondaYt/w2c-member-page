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
			<div className={styles.mainVisualText}>
				<h2 className={styles.mainVisualTextTitle}>
					毎週、月火木の
					<br />
					放課後活動中！！！
				</h2>
				<p className={styles.mainVisualTextLink}>
					<a href="https://w2c-form-sable.vercel.app/">入部はこちらから</a>
				</p>
			</div>
			<Header isSticky={isSticky} setHeaderHeight={setHeaderHeight} />
		</div>
	);
}
