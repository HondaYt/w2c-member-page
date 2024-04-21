import { useEffect, useState, useRef } from "react";
import styles from "@/styles/components/contents.module.scss";
import NextImage from "@/components/NextImage";
import SectionTitle from "@/components/SectionTitle";

type ContentsProps = {
	isContentsBottom: boolean;
	setIsContentsBottom: (isContentsBottom: boolean) => void;
	isContentsTop: boolean;
	setIsContentsTop: (isContentsTop: boolean) => void;
	contentsRef: React.RefObject<HTMLDivElement>;
	isSnap: boolean;
};
export default function Contents(props: ContentsProps) {
	useEffect(() => {
		const handleScroll = () => {
			if (!props.contentsRef.current) {
				return;
			}
			const { scrollTop, scrollHeight, clientHeight } =
				props.contentsRef.current;
			if (scrollTop + clientHeight >= scrollHeight) {
				props.setIsContentsBottom(true);
			} else {
				props.setIsContentsBottom(false);
			}

			if (scrollTop === 0) {
				// 一番上に達したかチェック
				props.setIsContentsTop(true);
			} else {
				props.setIsContentsTop(false);
			}
		};

		const contentsElement = props.contentsRef.current;
		if (contentsElement) {
			contentsElement.addEventListener("scroll", handleScroll);

			return () => {
				if (contentsElement) {
					contentsElement.removeEventListener("scroll", handleScroll);
				}
			};
		}
	}, [props.contentsRef, props.setIsContentsBottom, props.setIsContentsTop]);

	if (window.innerWidth <= 430) {
		return null;
	}

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
			imageSrc: "teamProduction.jpg",
			imageAlt: "teamProduction",
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
		<div
			className={`${styles.contents} ${props.isSnap ? styles.snap : ""}`}
			ref={props.contentsRef}
		>
			{contents.map((content) => (
				<div className={styles.content} key={content.title}>
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
			))}
		</div>
	);
}
