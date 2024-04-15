import styles from "@/styles/components/introduction.module.scss";
import NextImage from "@/components/NextImage";
import Image from "next/image";

export default function Introduction() {
	return (
		<div className={styles.introduction}>
			<div className={styles.introductionText}>
				<h2>
					<span>W</span>eb<span>C</span>reative<span>C</span>lub
				</h2>
				<p>
					<span>W2C</span>
					は、コースの壁を超えて、これからのIT業界を担う、ものづくりに情熱を持った仲間と、つながれるサークルです。
				</p>
			</div>
			<div className={styles.introductionImage}>
				<NextImage src="/assets/introduction.jpg" alt="" />
			</div>
		</div>
	);
}
