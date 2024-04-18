import styles from "@/styles/components/works.module.scss";
import SectionTitle from "@/components/SectionTitle";

export default function Works() {
	return (
		<div className={styles.container}>
			<SectionTitle title="作品紹介" enTitle="Works" />
		</div>
	);
}
