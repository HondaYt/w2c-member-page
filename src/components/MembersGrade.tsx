import Image from "next/image";
import styles from "@/styles/components/members_grade.module.scss";

type MembersGradeProps = {
	grade: number;
};

export default function MembersGrade(props: MembersGradeProps) {
	return (
		<div className={styles.membersGrade}>
			<h3>
				<span>{props.grade}</span>年生
			</h3>
		</div>
	);
}
