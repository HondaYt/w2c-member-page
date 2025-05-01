import styles from "@/styles/components/members.module.scss";
import NextImage from "@/components/NextImage";
import Member from "@/components/Member";
import MembersGrade from "@/components/MembersGrade";
import SectionTitle from "@/components/SectionTitle";

const membersByGrade = {
    1: [{}],
    2: [
        {
            name: "山形 海斗",
            kana: "やまがた かいと",
            course: "Webデザイン",
            field: "engineer",
            hobby: "バイクツーリング",
            message: "気軽に話しかけてください！",
            image: "yamagata.webp",
        },
        {
            name: "高木 湊二郎",
            kana: "たかぎ そうじろう",
            course: "Webデザイン",
            field: "engineer",
            hobby: "勉強、カラオケ",
            message: "コーディングならまかせろ",
            image: "takagi.webp",
        },
        {
            name: "金谷 魁星",
            kana: "かなや かいせい",
            course: "Webデザイン",
            field: "engineer",
            hobby: "音楽、グルメ",
            message: "たくさんおしゃべりしましょう！",
            image: "kanaya.webp",
        },
        {
            name: "友塚 亮羽",
            kana: "ともづか りょう",
            course: "Webデザイン",
            field: "engineer",
            hobby: "体を動かすこと、読書",
            message: "シャイなので気軽に話しかけてください！",
            image: "tomozuka.webp",
        },
        {
            name: "遠藤 来夏",
            kana: "えんどう こなつ",
            course: "Webデザイン",
            field: "engineer",
            hobby: "洋画, 洋楽, 少年漫画",
            message: "enjoy~！",
            image: "kendo.webp",
        },
        {
            name: "菅野 友香",
            kana: "かんの ともか",
            course: "Webデザイン",
            field: "designer",
            hobby: "イラスト、手芸",
            message: "ここは楽しいサークルだよ！",
            image: "kanno.webp",
        },
        {
            name: "守安 葉子",
            kana: "もりやす はこ",
            course: "Webデザイン",
            field: "designer",
            hobby: "お絵描き",
            message: "一人暮らしなのでたくさんご飯お誘いください🍻",
            image: "moriyasu.webp",
        },
        {
            name: "中平 隼太",
            kana: "なかひら しゅんた",
            course: "Webデザイン",
            field: "designer",
            hobby: "イラスト、ゲーム、運動",
            message:
                "やる気の塊と化しているので仲良くしていただけると嬉しいです。",
            image: "nakahira.webp",
        },
        {
            name: "児玉 琴梛",
            kana: "こだま ことな",
            course: "Webデザイン",
            field: "designer",
            hobby: "食事",
            message: "仲良くしてください！頑張ります😃",
            image: "kodama.webp",
        },
        {
            name: "小林 ",
            kana: "こばやし あおい",
            course: "IT開発エキスパート",
            field: "engineer",
            hobby: "",
            message: "",
            image: "unnamed.png",
        },
    ],
    3: [
        {
            name: "本田 有人",
            kana: "ほんだ ゆうと",
            course: "Webデザイン",
            field: "engineer",
            hobby: "ギターを弾くこと",
            message: "ムキムキエンジニアになりたい💪💪",
            position: "部長",
            image: "yhonda.png",
        },
        {
            name: "平田 晃大",
            kana: "ひらた こうだい",
            course: "Webデザイン",
            field: "engineer",
            hobby: "歌を聴くこと・歌うこと",
            message: "一緒にご飯でも行きましょ",
            position: "副部長",
            image: "khirata.jpg",
        },
        {
            name: "川上 采華",
            kana: "かわかみ あやか",
            course: "Webデザイン",
            field: "designer",
            hobby: "ゲーム、ゲーム実況を見ること",
            message: "みんな仲良しです！",
            position: "副部長",
            image: "akawakami.jpg",
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
            name: "グエンドゥックフィン",
            course: "Webデザイン",
            field: "engineer",
            hobby: "音楽、アニメ",
            message: "コーディング頑張りみゃす！！💪💪",
            image: "fnguyen.jpg",
        },
        {
            name: "上森 拓翔",
            kana: "うえもり たくと",
            course: "Webデザイン",
            field: "engineer",
            hobby: "写真撮ること",
            message: "コーディング一緒に頑張りましょう！",
            image: "tuemori.webp",
        },
        {
            name: "川岸 遥奈",
            kana: "かわぎし はるな",
            course: "IT開発エキスパート",
            field: "engineer",
            hobby: "読書、ネイル",
            message:
                "ITとWebコースでなんか交流したり、ハッカソンに出たりしたいなーって思っています！",
            image: "unnamed.png",
        },
    ],
    4: [
        {
            name: "松岡 優輝",
            kana: "まつおか ゆうき",
            course: "IT開発エキスパート",
            field: "engineer",
            hobby: "ダーツ",
            message: "一緒に作品作って成長しましょう^^*",
            image: "ymatsuoka.jpeg",
        },
    ],
};

export default function Members() {
    return (
        <div id="members" className={styles.members}>
            <SectionTitle title="メンバー紹介" enTitle="Members" />
            <div className={styles.members}>
                <MembersGrade grade={4} />
                <div className={styles.grade}>
                    {membersByGrade[4].map((member) => (
                        <Member key={member.name} {...member} />
                    ))}
                </div>
                <MembersGrade grade={3} />
                <div className={styles.grade}>
                    {membersByGrade[3].map((member) => (
                        <Member key={member.name} {...member} />
                    ))}
                </div>
                <MembersGrade grade={2} />
                <div className={styles.grade}>
                    {membersByGrade[2].map((member) => (
                        <Member key={member.name} {...member} />
                    ))}
                </div>
                {/* <MembersGrade grade={1} />
                <div className={styles.grade}>
                    {membersByGrade[1].map((member) => (
                        <Member key={member.name} {...member} />
                    ))}
                </div> */}
            </div>
        </div>
    );
}
