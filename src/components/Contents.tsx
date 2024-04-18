import styles from "@/styles/components/contents.module.scss";
import NextImage from "@/components/NextImage";
import SectionTitle from "@/components/SectionTitle";

export default function Contents() {
	return (
		<div id="contents" className={styles.contents}>
			<SectionTitle title="Contents" enTitle="Contents" />
		</div>
	);
}
