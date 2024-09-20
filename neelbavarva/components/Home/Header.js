import Image from 'next/image'
import styles from '../../styles/Home/Header.module.css'
import Link from 'next/link';
import TwitterIcon from '../../public/icons/twitter.svg'
import GitHubIcon from '../../public/icons/github.svg'
import InstagramIcon from '../../public/icons/instagram.svg'
import DribbbleIcon from '../../public/icons/dribbble.svg'
import LinkedInIcon from '../../public/icons/linkedin.svg'

export default function Header() {

    return (
        <div className={`${styles.header} ${styles.container}`}>
            <div className={styles.header_title}>
                Web and Android Developer creating Thoughtful, Intuitive Interfaces.
            </div>
            <div className={styles.header_content}>
                <p>
                    Hello, I am Neel Bavarva, a Software Engineer based in the India.
                </p>
                
                <p>
                    I am a self taught programmer. Through constant learning and creation, 
                    I produce aesthetic software to the highest standard.
                    I enjoy competing in hackathons and working on software projects.
                    I also like to work on my problem solving skills on <a href="https://leetcode.com/neelbavarva/" target="_blank" rel="noreferrer">Leetcode</a>.

                    Here&apos;s my <a href="https://docs.google.com/document/d/1RU93frh_ecjFYVGSr0stFWRL9oivy9Az/edit?usp=sharing&ouid=103003234059526586972&rtpof=true&sd=true" target="_blank" rel="noreferrer">Resume</a>.
                </p>
            </div>

            <div className={styles.social_links}>
                <div>
                    <a href="https://twitter.com/neelbavarva">
                        <div className={styles.social_links_container}>
                            <Image className={styles.social_links_img} src={TwitterIcon} alt="twitter icon" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/neel-bavarva-61662a1a3/">
                        <div className={`${styles.social_links_container} ${styles.social_links_container_small}`}>
                            <Image className={styles.social_links_img} src={LinkedInIcon} alt="instagram icon" />
                        </div>
                    </a>
                    <a href="https://dribbble.com/neelbavarva">
                        <div className={styles.social_links_container}>
                            <Image className={styles.social_links_img} src={DribbbleIcon} alt="dribbble icon" />
                        </div>
                    </a>
                    <a href="https://github.com/neelbavarva">
                        <div className={styles.social_links_container}>
                            <Image className={styles.social_links_img} src={GitHubIcon} alt="github icon" />
                        </div>
                    </a>
                </div>
                <div>
                    <button>
                        <a href="mailto:bavarvaneel@gmail.com">Email&nbsp;me</a>
                    </button>
                </div>
            </div>

            <hr className={styles.divider} />

        </div>
    )
}
