import styles from "../../styles/About/Site.module.css";

export default function Site() {
    return (
        <div className={styles.container}>
            <div className={styles.site}>
                <h4 className={styles.site_header}>About this site</h4>
                <p className={styles.site_content}>
                    In case you were wondering this site is:
                </p>
                <ul className={styles.site_list}>
                    <li>
                        Designed and built on a Mac using{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://figma.com/"
                        >
                            Figma
                        </a>{" "}
                        and{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://code.visualstudio.com/"
                        >
                            Visual Studio Code
                        </a>
                    </li>
                    <li>
                        Built using{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://nextjs.org/"
                        >
                            Next.js 13
                        </a>
                        , a React.js framework
                    </li>
                    <li>
                        Tracking data using{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://analytics.google.com/"
                        >
                            Google Analytics
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
