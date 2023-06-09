import { promises as fs } from 'fs';
import styles from './page.module.css'
import IntroductionCard from './introductionCard';

export default async function Home() {
  const playerData = JSON.parse(await fs.readFile("public/data/player.json", "utf-8"));

  return (
    <main className={styles.main}>
      <header className={styles.title}>
        <img src="/images/ssr_logo.png" alt="Super Sonic Revolution"/>
        <h1>Super Sonic Revolution 歷年跑者資料庫</h1>
      </header>
      <section className={styles.bodySection}>
        {playerData.map(player => <IntroductionCard props={player} key={player.name}/>)}
      </section>
    </main>
  )
}
