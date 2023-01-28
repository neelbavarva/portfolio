import Image from 'next/image'
import styles from '../../styles/About/Site.module.css'
import Link from 'next/link';
import sample from '../../public/images/sample.png'

export default function Site() {

    return (
        <div className={styles.container}>
            <div className={styles.site}>
                <h4 className={styles.site_header}>About this site</h4>
                <p className={styles.site_content}>In case you were wondering this site is:</p>
                <ul className={styles.site_list}>
                    <li>Designed and built on a Mac using <a href="https://figma.com/">Figma</a> and <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                    <li>Hosted by <a href="https://www.godaddy.com/">GoDaddy</a> with deployment via <a href="https://vercel.com/">Vercel</a></li>
                    <li>Tracking data using <a>Plausible</a>, privacy focussed analytics</li>
                    <li>Set in the beautiful <a>Monolisa</a> typeface</li>
                </ul>
            </div>
        </div>
    )
}
