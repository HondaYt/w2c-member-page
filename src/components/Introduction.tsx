import styles from "@/styles/components/introduction.module.scss";
import NextImage from "@/components/NextImage";
import Image from "next/image";

export default function Introduction() {
	return (
		<div id="introduction" className={styles.introduction}>
			<div className={styles.introductionText}>
				<h3>
					<span className={styles.w2c}>
						<span>
							<span>W</span>eb
						</span>
						<span>
							<span>C</span>reative
						</span>
						<span>
							<span>C</span>lub
						</span>
					</span>
					は、
					<br />
				</h3>
				<p>
					コースの壁を超えて、これからのIT業界を担う、ものづくりに情熱を持った仲間とつながれるサークルです。
				</p>
			</div>
			<div className={styles.introductionImage}>
				<NextImage src="/assets/introduction.jpg" alt="活動の様子" />
			</div>
		</div>
	);
}
