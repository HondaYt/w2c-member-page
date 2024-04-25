import { useState, useEffect, RefObject, useRef } from "react";
import styles from "@/styles/components/header.module.scss";

type HeaderProps = {
	isSticky: boolean;
	setHeaderHeight: (height: number) => void;
};

export default function Header(props: HeaderProps) {
	const headerRef = useRef<HTMLDivElement>(null);
	const [isClicked, setIsClicked] = useState(false); // クリック状態を管理するための状態

	useEffect(() => {
		const handleScroll = (event: Event) => {
			event.preventDefault();
			const target = event.target as HTMLAnchorElement;
			const id = target.getAttribute("href");
			const element = id ? document.querySelector(id) : null;
			if (element) {
				const yOffset = -150;
				const y =
					element.getBoundingClientRect().top + window.scrollY + yOffset;

				window.scrollTo({ top: y, behavior: "smooth" });
			}
		};

		const links = document.querySelectorAll("a[href^='#']");
		for (const link of links) {
			link.addEventListener("click", handleScroll);
		}

		return () => {
			for (const link of links) {
				link.removeEventListener("click", handleScroll);
			}
		};
	}, []);

	const handleHamburgerClick = () => {
		setIsClicked(!isClicked); // クリック状態を反転させる
	};

	useEffect(() => {
		if (headerRef.current) {
			props.setHeaderHeight(headerRef.current.clientHeight);
		}
	}, [props.setHeaderHeight]);

	if (typeof window !== "undefined" && window.innerWidth <= 430) {
		return null;
	}

	return (
		<div
			className={`${styles.navWrap} ${props.isSticky ? styles.fixed : ""} ${
				isClicked ? styles.isClick : ""
			}`}
			ref={headerRef}
		>
			<nav>
				<h1>
					<img src="/assets/logo.svg" alt="W2C" />
				</h1>
				<ul className={styles.menu}>
					<li className={styles.hamburgerMenu} onClick={handleHamburgerClick}>
						<div className={styles.icon} />
					</li>
					<ul className={styles.menuList}>
						<li>
							<a href="#introduction">
								サークルについて<span>Introduction</span>
							</a>
						</li>
						<li>
							<a href="#contents">
								活動内容<span>Contents</span>
							</a>
						</li>
						<li>
							<a href="#members">
								メンバー紹介<span>Members</span>
							</a>
						</li>
						<li>
							<a href="#activity">
								活動日時<span>Activity</span>
							</a>
						</li>
						{/* <li>
							<a href="#works">
								作品紹介<span>Works</span>
							</a>
						</li> */}
					</ul>
				</ul>

				<p className={styles.formLink}>
					<a href="https://w2c-form.vercel.app/">入部はこちら</a>
				</p>
			</nav>
		</div>
	);
}
