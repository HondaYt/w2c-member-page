import styles from "@/styles/components/contents.module.scss";
import NextImage from "@/components/NextImage";
import SectionTitle from "@/components/SectionTitle";

export default function Contents({
	contentsRef,
}: { contentsRef: React.RefObject<HTMLDivElement> }) {
	return (
		<div id="contents" className={styles.contents} ref={contentsRef}>
			<SectionTitle title="Contents" enTitle="Contents" />
		</div>
	);
}
