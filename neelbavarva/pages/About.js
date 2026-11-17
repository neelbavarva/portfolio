import Head from "next/head";
import styles from "../styles/About.module.css";
import Navbar from "@/components/Navbar";
import Content from "@/components/About/Content";
import Work from "@/components/About/Work";
import Site from "@/components/About/Site";

export default function About() {
    return (
        <div className={styles.home}>
            <Head>
                <title>Neel Bavarva - About</title>
                <meta name="next-head-count" content="1" />
            </Head>

            <Navbar page={"About"} />

            <div className={styles.about_continer}>
                <Content />
                <Work />
                <Site />
            </div>
        </div>
    );
}
