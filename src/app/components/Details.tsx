import Image from "next/image";
import styles from "@/styles/components/details.module.scss";
import SectionTitle from "@/app/components/SectionTitle";

export default function Details() {
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
		<>
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
			<div className={styles.activityTime}>
				{/* <div className={styles.time}>18:00〜20:00</div> */}
				<div className={styles.pie}>
					<span>60%</span>
				</div>
			</div>
		</>
	);
}
