import Image from 'next/image'
import styles from '../../styles/Projects/Content.module.css'
import Link from 'next/link';
import sample from '../../public/images/sample.png'

export default function Content() {

    return (
        <div className={styles.container}>
            
            <div className={styles.project_container}>
                <Image className={styles.project_img} src={sample} />

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
                <Image className={styles.project_img} src={sample} />

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
                <Image className={styles.project_img} src={sample} />

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

            {/* <hr className={styles.divider} />

            <h4 className={styles.skills_header}>Archives</h4>
            <p></p> */}
        </div>
    )
}
