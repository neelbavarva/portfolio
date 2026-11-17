import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Error.module.css";

export default function Error() {
    return (
        <div>
            <Head>
                <title>Neel Bavarva - 404</title>
                <meta name="next-head-count" content="1" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className={styles.nav_top}></div>
            <div className={styles.container}>
                <h1>404</h1>

                <div>
                    The page you&apos;re looking for doesn&apos;t exist. Perhaps
                    it never really did? Your best option from here is to head
                    to the homepage, which I (almost certainly) promise
                    won&apos;t 404.
                </div>

                <Link className={styles.home_link} href="/">
                    Return Home
                </Link>
            </div>
        </div>
    );
}
