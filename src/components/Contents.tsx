import { useEffect, useState, useRef } from "react";
import styles from "@/styles/components/contents.module.scss";
import NextImage from "@/components/NextImage";
import SectionTitle from "@/components/SectionTitle";

export default function Contents() {
	const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		// ビューポートの高さを取得
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.active);
						entry.target.classList.remove(styles.inactive);
					} else if (entry.target.classList.contains(styles.active)) {
						entry.target.classList.remove(styles.active);
						entry.target.classList.add(styles.inactive);
					}
				}
			},
			{
				root: null,
				rootMargin: "0px 0px -100% 0px",
				threshold: 0.0,
			},
		);

		for (const ref of observerRefs.current) {
			if (ref) observer.observe(ref);
		}

		return () => {
			for (const ref of observerRefs.current) {
				if (ref) observer.unobserve(ref);
			}
		};
	}, []);

	const contents = [
		{
			title: "Coding",
			subtitle: "基礎をしっかり！！！",
			text: (
				<p>
					分からない所は優しい先輩がわかるまで教えます。
					<br />
					できる人は学校の授業を先取り？！
					<br />
					これであなたもムキムキエンジニア！！！！！
				</p>
			),
			imageSrc: "coding.jpg",
			imageAlt: "teamProduction",
		},
		{
			title: "design",
			subtitle: "自分の色を持つデザイナーに！！！",
			text: (
				<p>
					初めは先輩からの課題をこなし力をつけ、
					<br />
					それからは自分の得意を伸ばしてのびのびデザイン。
					<br />
					これであなたもムキムキデザイナー！！！！！
				</p>
			),
			imageSrc: "design.jpg",
			imageAlt: "design",
		},
		{
			title: "TeamProject",
			subtitle: "楽しく・完成度が高いものを！！！",
			text: (
				<p>
					多くの知識を持った先輩とチームで一緒に制作できる！
					<br />
					一人では難しくても、一緒にやれば知識をつけて成長できる！！！！！
					<br />
					これであなたもムキムキ！！！！！
				</p>
			),
			imageSrc: "teamProduction.jpg",
			imageAlt: "teamProduction",
		},
	];

	return (
		<div className={styles.contents}>
			{contents.map((content, index) => (
				<div
					ref={(el) => {
						observerRefs.current[index] = el;
					}}
					className={styles.contentWrap}
					key={content.title}
					id={`content-${index}`}
				>
					<div className={styles.content}>
						<div className={styles.contentImage}>
							<NextImage
								src={`/assets/${content.imageSrc}`}
								alt={content.imageAlt}
							/>
						</div>
						<h2 className={styles.contentTitle}>{content.title}</h2>

						<div className={styles.contentText}>
							<h3>{content.subtitle}</h3>
							{content.text}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
