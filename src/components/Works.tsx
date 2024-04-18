import styles from "@/styles/components/works.module.scss";
import SectionTitle from "@/components/SectionTitle";

export default function Works({
	worksRef,
}: { worksRef: React.RefObject<HTMLDivElement> }) {
	return (
		<div id="works" className={styles.container} ref={worksRef}>
			<SectionTitle title="作品紹介" enTitle="Works" />
		</div>
	);
}
