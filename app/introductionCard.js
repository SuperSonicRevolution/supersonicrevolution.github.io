import styles from './introductionCard.module.css';

export default function IntroductionCard({props}) {
    const avatarBackground = props.avatar 
        ? {"backgroundImage": `url(${props.avatar})`}
        : {"aspectRatio": "auto"};

    return <section className={styles.card}>
        <div className={styles.cardAvatar} style={avatarBackground}>
            <h1>{props.name}</h1>
            <div className={styles.cardTitle}>
                <h2>{props.title}</h2>
            </div>
        </div>
        <div className={styles.cardCommunity}>
        {
            Object.keys(props.links).map(community => (
                <a href={props.links[community]} target="_blank" key={community}>
                    <img src={`/images/community_logo/${community}.svg`} 
                        alt={community}
                        className={styles[`community_${community}`] + " " + styles.communityItems} />
                </a>))
        }
        </div>
        <div className={styles.cardIntroduction}>
            {props.introduction.split("\n").map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
        </div>
        <div>
            <div className={styles.cardListItem}>
                <div><h3>音速小子系列擅長遊戲</h3></div>
                <div><ul>{
                    props.goodAtSonicGames.map(game => (
                        <li key={game}>
                            {game}
                        </li>
                    ))
                }</ul></div>
            </div>
            <div className={styles.cardListItem}>
                <div><h3>其他擅長遊戲</h3></div>
                <div><ul>{
                    props.goodAtOtherGames.map(game => (
                        <li key={game}>
                            {game}
                        </li>
                    ))
                }</ul></div>
            </div>
            <div className={styles.cardListItem}>
                <div><h3>活動實況紀錄</h3></div>
                <div><ul>{
                    props.joinedStreamingHistory.map(history => (
                        <li key={history.name} className={styles[`cardList${history.name.slice(0, 4)}`]}>
                            <a href={history.link} target="_blank">
                                {history.name}
                            </a>
                        </li>
                    ))
                }</ul></div>
            </div>
            <div className={styles.cardListItem}>
                <div><h3>經典片段</h3></div>
                <div><ul>{
                    props.classicVideoSections.map(section => (
                        <li key={section.name}>
                            <a href={section.link} target="_blank">
                                {section.name}
                            </a>
                        </li>
                    ))
                }</ul></div>
            </div>
            {(<div className={styles.cardListItem} key="message">
                <div><h3>本人留言</h3></div>
                <div>{props.message.split("\n").map((paragraph, index) => (<p key={index}>{paragraph}</p>))}</div>
            </div>)}
        </div>
    </section>;
}