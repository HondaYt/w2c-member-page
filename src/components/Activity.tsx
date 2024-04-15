import Image from "next/image";
import styles from "@/styles/components/activity.module.scss";
import SectionTitle from "@/components/SectionTitle";

export default function Activity() {
	const isActive = true;
	const ActivityDays = [
		{ day: "日" },
		{ day: "月", isActive },
		{ day: "火", isActive },
		{ day: "水" },
		{ day: "木", isActive },
		{ day: "金" },
		{ day: "土" },
	];
	return (
		<div className={styles.activity}>
			<SectionTitle title="活動日時" enTitle="activity" />
			<div className={styles.activityDays}>
				{ActivityDays.map((day) => (
					<div
						key={day.day}
						className={`${styles.day} ${day.isActive ? styles.activeDay : ""}`}
					>
						{day.day}
					</div>
				))}
			</div>
			<div className={styles.activityTimes}>
				<div className={styles.pie} />
				<div className={styles.text}>
					<span>放課後</span>から<span>閉館</span>まで
					<br />
					活動しています！
				</div>
			</div>
		</div>
	);
}
