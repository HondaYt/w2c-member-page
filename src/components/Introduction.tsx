import styles from "@/styles/components/introduction.module.scss";
import NextImage from "@/components/NextImage";
import Image from "next/image";

export default function Introduction({
	introductionRef,
}: { introductionRef: React.RefObject<HTMLDivElement> }) {
	return (
		<div
			id="introduction"
			className={styles.introduction}
			ref={introductionRef}
		>
			<div className={styles.introductionText}>
				<p>
					<span className={styles.w2c}>
						<span>W</span>eb<span>C</span>reative<span>C</span>lub
					</span>
					は、
					コースの壁を超えて、これからのIT業界を担う、ものづくりに情熱を持った仲間とつながれるサークルです。
				</p>
			</div>
			<div className={styles.introductionImage}>
				<NextImage src="/assets/introduction.jpg" alt="活動の様子" />
			</div>
		</div>
	);
}
