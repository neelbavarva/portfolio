import Image from 'next/image'
import styles from '../../styles/About/Content.module.css'
import Link from 'next/link';
import sample from '../../public/images/sample.png'
import Banner from '../../public/images/me_banner_small.png'

export default function Content() {

    return (
        <div className={styles.container}>
            <div className={styles.about_container}>
                <Image alt="about me" className={styles.about_img} src={Banner} />
                <div className={styles.about_content}>
                    <p>
                        A developer who loves to work on frontend designs 
                        and explore new design trends. I&apos;m promising at interface design for 
                        mobile and web-based applications with a focus on simplicity &amp; usability. 
                        I&apos;m passionate about design and technology and how the two can converge to create experiences for good.

                        <br /><br />
                        Now, don&apos;t mistake me for a UI/UX designer. I&apos;m a Full Stack developer with a strong interest in UI/UX design. 
                        You can verify my expertise by viewing <Link className={styles.links} href="/Projects">my projects</Link>.
                    </p>

                    <hr className={styles.divider} />
                </div>
            </div>
        </div>
    )
}
