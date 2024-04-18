import { useState, useEffect, useRef, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/main_visual.module.scss";

export default function MainVisual({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div id="mainVisual" className={styles.mainVisual}>
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
			{children}
		</div>
	);
}
