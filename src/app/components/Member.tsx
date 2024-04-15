import styles from "@/styles/components/member.module.scss";
import NextImage from "@/app/components/NextImage";

type MemberProps = {
	name: string;
	kana?: string;
	course: string;
	field: string;
	hobby: string;
	message: string;
	position?: string;
	image: string;
};

export default function Member(props: MemberProps) {
	const fieldNames: { [key: string]: string } = {
		engineer: "エンジニア",
		designer: "デザイナー",
		director: "ディレクター",
	};

	return (
		<div className={styles.member}>
			<div className={styles.memberMessage}>
				<p>{props.message}</p>
			</div>
			<div className={styles.memberImage}>
				<NextImage
					src={`/assets/members/${props.image}`}
					alt={`${props.name}の写真`}
				/>
			</div>
			<p className={`${styles.field} ${styles[props.field]}`}>
				{fieldNames[props.field] || "未定義の役職"}
			</p>
			<div className={styles.memberParam}>
				<h4 className={styles.memberName}>
					<span>{props.kana}</span> {props.name}
				</h4>
				<div className={styles.memberCourse}>
					<h5>コース</h5>
					<p>{props.course}</p>
				</div>
				<div className={styles.memberHobby}>
					<h5>趣味</h5>
					<p>{props.hobby}</p>
				</div>
			</div>
			{props.position ? (
				<div className={styles.position}>{props.position}</div>
			) : null}
		</div>
	);
}
