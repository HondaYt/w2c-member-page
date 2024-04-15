import Image from "next/image";
import styles from "@/styles/components/section_title.module.scss";

type SectionTitleProps = {
	title: string;
	enTitle: string;
};

export default function SectionTitle(props: SectionTitleProps) {
	return (
		<div className={styles.sectionTitle}>
			<h2>
				{props.title}
				<span>{props.enTitle}</span>
			</h2>
		</div>
	);
}
