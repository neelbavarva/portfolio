import styles from "../../styles/Projects/Header.module.css";

export default function Header() {
    return (
        <div className={`${styles.header} ${styles.container}`}>
            <div className={styles.header_title}>Projects</div>
            <div className={styles.header_content}>
                <p>
                    I enjoy competing in hackathons and working on software
                    projects. I&apos;m largely framework agnostic but
                    technologies I love right now are Next.js, React Native and
                    Node.
                </p>
            </div>

            <hr className={styles.divider} />
        </div>
    );
}
