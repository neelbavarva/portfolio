import Image from 'next/image'
import styles from '../../styles/Projects/Content.module.css'
import Link from 'next/link';
import sample from '../../public/images/sample.png'
import finance_tracker from '../../public/images/finance_tracker.png'
import crypto_tracker from '../../public/images/crypto_tracker.png'
import password_manager from '../../public/images/password_manager.png'

export default function Content() {

    return (
        <div className={styles.container}>
            
            <div className={styles.project_container}>
                <Image className={styles.project_img} src={finance_tracker} alt="project banner" />

                <div className={styles.project_content}>
                    <h4>Finance Tracker</h4>
                    <p>
                        Designed a System (Android Application) that saves user’s 90% of time when adding monthly expenses by accelerating the process of scanning bills using OCR.
                    </p>
                    <Link legacyBehavior href="https://github.com/MyAnalystApp/AnalystApp-Native">
                        <a className={styles.project_button}>View Project<div></div></a>
                    </Link>
                </div>
            </div>

            <div className={styles.project_container}>
                <Image className={styles.project_img} src={crypto_tracker} alt="project banner" />

                <div className={styles.project_content}>
                    <h4>Crypto Tracker</h4>
                    <p>
                        Launched an android application that renders Top 200 cryptocurrencies and their data along with 1 day - 1 year chart info.
                    </p>
                    <Link legacyBehavior href="https://github.com/MyAnalystApp/CryptoTracker">
                        <a className={styles.project_button}>View Project<div></div></a>
                    </Link>
                </div>
            </div>

            <div className={styles.project_container}>
                <Image className={styles.project_img} src={password_manager} alt="project banner" />

                <div className={styles.project_content}>
                    <h4>Password Manager</h4>
                    <p>
                        An ultimate application that manages all your passwords, banking details, and credit/debit card information. <br /><br />
                        Every piece of information is encrypted and decryted using a key. This process reduces the user&apos;s headache of having to remember every login credential.
                    </p>
                    <Link legacyBehavior href="/Projects">
                        <a className={`${styles.project_button} ${styles.disabled}`}>Private Project</a>
                    </Link>
                </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.archive_container}>
                <h4 className={styles.archive_header}>Archives</h4>
                <div className={styles.archive_content}>Some of the old projects that I worked on.</div>

                <div className={styles.archive_project}>
                    <a href="https://github.com/neelbavarva/Spring-Blog"><h4>Spring Blog<div /></h4></a>
                    <div>A full stack blog app made using React.js and Spring Boot.</div>
                </div>
                <div className={styles.archive_project}>
                    <a href="https://github.com/neelbavarva/Contactless-Menu"><h4>Contactless Menu<div /></h4></a>
                    <div>An Android application for restaurants that displays menu cards after scanning a QR code.</div>
                </div>
                <div className={styles.archive_project}>
                    <a href="https://github.com/neelbavarva/Spotify-Clone"><h4>Spotify Clone<div /></h4></a>
                    <div>A front-end clone of Spotify made using React.js and Spotify developers&apos;s API.</div>
                </div>
            </div>
        </div>
    )
}
