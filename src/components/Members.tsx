import styles from "@/styles/components/members.module.scss";
import NextImage from "@/components/NextImage";
import Member from "@/components/Member";
import MembersGrade from "@/components/MembersGrade";
import SectionTitle from "@/components/SectionTitle";

const membersByGrade = {
	2: [
		{
			name: "本田 有人",
			kana: "ほんだ ゆうと",
			course: "Webデザイン",
			field: "engineer",
			hobby: "ギターを弾くこと",
			message: "ムキムキエンジニアになりたい💪💪",
			image: "yhonda.png",
		},
		{
			name: "岡田 未希",
			kana: "おかだ みき",
			course: "Webデザイン",
			field: "engineer",
			hobby: "可愛いものを愛でる",
			message: "みんなで楽しく頑張っていきましょう！",
			image: "mokada.jpg",
		},
		{
			name: "林 煜昭",
			kana: "りん いくあき",
			course: "Webデザイン",
			field: "engineer",
			hobby: "アイドル、バイク",
			message: "一緒にWebクリエイターを目指して頑張りましょう！！",
			image: "irin.jpg",
		},
		{
			name: "砂原 彩花",
			kana: "すなはら あやか",
			course: "Webデザイン",
			field: "engineer",
			hobby: "洋楽を聴くこと",
			message: "コーディング難しいけど楽しいでーす！",
			image: "asunahara.jpg",
		},
		{
			name: "平田 晃大",
			kana: "ひらた こうだい",
			course: "Webデザイン",
			field: "engineer",
			hobby: "歌を聴くこと・歌うこと",
			message: "一緒にご飯でも行きましょ",
			image: "khirata.jpg",
		},
		{
			name: "川上 采花",
			kana: "かわかみ あやか",
			course: "Webデザイン",
			field: "designer",
			hobby: "ゲーム、ゲーム実況者を見ること",
			message: "みんな仲良しです！",
			image: "akawakami.jpg",
		},
		{
			name: "ソンスヨン",

			course: "Webデザイン",
			field: "designer",
			hobby: "料理",
			message: "作品を作るのは楽しいですよね!",
			image: "sson.jpg",
		},
		{
			name: "グエンドゥックフィン",
			course: "Webデザイン",
			field: "engineer",
			hobby: "音楽、アニメ",
			message: "コーディング頑張りみゃす！！💪💪",
			image: "gnguyen.jpg",
		},
	],
	3: [
		{
			name: "大垣 陸斗",
			kana: "おおがき りくと",
			course: "Webデザイン",
			field: "engineer",
			hobby: "おいしいご飯を食べに行く",
			message: "みんなで楽しく頑張っていきましょう！",
			position: "部長",
			image: "roogaki.jpg",
		},
		{
			name: "細田 海斗",
			kana: "ほそだ かいと",
			course: "Webデザイン",
			field: "designer",
			hobby: "歌を聴くこと・歌うこと",
			position: "副部長",
			message: "みんなで切磋琢磨し合い助け合いながらがんばってまーす！",
			image: "khosoda.jpg",
		},
		{
			name: "福村 晃弘",
			kana: "ふくむら あきひろ",
			course: "Webデザイン",

			field: "director",
			hobby: "おいしいご飯を食べに行く",
			position: "副部長",
			message: "みんなで楽しく頑張っていきましょう！",
			image: "ahukumura.jpg",
		},
		{
			name: "松岡 優輝",
			kana: "まつおか ゆうき",
			course: "IT開発エキスパート",
			field: "engineer",
			hobby: "ダーツ",
			message: "一緒に作品作って成長しましょう^^*",
			image: "ymatsuoka.jpg",
		},
	],
};

export default function Members() {
	return (
		<>
			<SectionTitle title="メンバー紹介" enTitle="Members" />
			<div className={styles.members}>
				<MembersGrade grade={3} />
				<div className={styles.grade}>
					{membersByGrade[3].map((member, i) => (
						<Member key={i} {...member} />
					))}
				</div>
				<MembersGrade grade={2} />
				<div className={styles.grade}>
					{membersByGrade[2].map((member, i) => (
						<Member key={i} {...member} />
					))}
				</div>
			</div>
		</>
	);
}
