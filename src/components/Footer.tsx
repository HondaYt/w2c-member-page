import styles from "@/styles/components/footer.module.scss";
import NextImage from "@/components/NextImage";
import Image from "next/image";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<p className={styles.formLink}>
				<a href="https://w2c-form.vercel.app/">入部はこちらから</a>
			</p>
			<div className={styles.footerText}>
				<p>
					<small>&copy; 2024 Web Creative Club</small>
				</p>
			</div>
		</div>
	);
}
