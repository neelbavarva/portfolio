import Image from 'next/image'
import styles from '../../styles/Projects/Content.module.css'
import Link from 'next/link';
import sample from '../../public/images/sample.png'

export default function Content() {

    return (
        <div className={styles.container}>
            
            <div className={styles.project_container}>
                <Image className={styles.project_img} src={sample} alt="project banner" />

                <div className={styles.project_content}>
                    <h4>Finance Tracker</h4>
                    <p>
                        An online booking system for in-person or online appointments, designed to work standalone or alongside BaseKit Sitebuilder.
                        <br/><br />
                        During this year-long project, I worked on every stage from conception, wireframing, IA mapping, prototyping, detailed mockups through development and launch.
                    </p>
                    <Link legacyBehavior href="/">
                        <a className={styles.project_button}>View Project<div></div></a>
                    </Link>
                </div>
            </div>

            <div className={styles.project_container}>
                <Image className={styles.project_img} src={sample} alt="project banner" />

                <div className={styles.project_content}>
                    <h4>Password Manager</h4>
                    <p>
                        An online booking system for in-person or online appointments, designed to work standalone or alongside BaseKit Sitebuilder.
                        <br/><br />
                        During this year-long project, I worked on every stage from conception, wireframing, IA mapping, prototyping, detailed mockups through development and launch.
                    </p>
                    <Link legacyBehavior href="/">
                        <a className={styles.project_button}>View Project<div></div></a>
                    </Link>
                </div>
            </div>

            <div className={styles.project_container}>
                <Image className={styles.project_img} src={sample} alt="project banner" />

                <div className={styles.project_content}>
                    <h4>Crypto Tracker</h4>
                    <p>
                        An online booking system for in-person or online appointments, designed to work standalone or alongside BaseKit Sitebuilder.
                        <br/><br />
                        During this year-long project, I worked on every stage from conception, wireframing, IA mapping, prototyping, detailed mockups through development and launch.
                    </p>
                    <Link legacyBehavior href="/">
                        <a className={styles.project_button}>View Project<div></div></a>
                    </Link>
                </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.archive_container}>
                <h4 className={styles.archive_header}>Archives</h4>
                <div className={styles.archive_content}>Some of the old projects that I worked on.</div>

                <div className={styles.archive_project}>
                    <a href="https://github.com/neelbavarva/Spring-Blog"><h4>Spring Blog<div /></h4></a>
                    <div>An android app for restaurant that display&apos;s menu on scanning the QR code.</div>
                </div>
                <div className={styles.archive_project}>
                    <a href="https://github.com/neelbavarva/Contactless-Menu"><h4>Contactless Menu<div /></h4></a>
                    <div>A full stack blog app made using Spring Boot for backend.</div>
                </div>
                <div className={styles.archive_project}>
                    <a href="https://github.com/neelbavarva/Spotify-Clone"><h4>Spotify Clone<div /></h4></a>
                    <div>A front-end clone of Spotify made using React.js and Spotify developers&apos;s API.</div>
                </div>
            </div>
        </div>
    )
}
