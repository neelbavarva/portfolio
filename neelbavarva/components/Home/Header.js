import Image from "next/image";
import styles from "../../styles/Home/Header.module.css";
import GitHubIcon from "../../public/icons/github.svg";

export default function Header() {
    return (
        <div className={`${styles.header} ${styles.container}`}>
            <div className={styles.header_title}>
                Web and Android Developer creating Thoughtful, Intuitive
                Interfaces.
            </div>
            <div className={styles.header_content}>
                <p>
                    Hello, I am Neel Bavarva, a Software Engineer based in the
                    India.
                </p>

                <p>
                    I am a self taught programmer. Through constant learning and
                    creation, I produce aesthetic software to the highest
                    standard. I enjoy competing in hackathons and working on
                    software projects. I also like to work on my problem solving
                    skills on Leetcode.
                </p>
            </div>

            <div className={styles.social_links}>
                <div>
                    <a href="https://github.com/neelbavarva">
                        <div className={styles.social_links_container}>
                            <Image
                                className={styles.social_links_img}
                                src={GitHubIcon}
                                alt="github icon"
                            />
                        </div>
                    </a>
                </div>
            </div>

            <hr className={styles.divider} />
        </div>
    );
}
