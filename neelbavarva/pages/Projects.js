import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Projects/Header";
import Content from "@/components/Projects/Content";

export default function Projects() {
    return (
        <div className={styles.projects}>
            <Head>
                <title>Neel Bavarva - Projects</title>
                <meta name="next-head-count" content="1" />
            </Head>

            <Navbar page={"Projects"} />
            <Header />
            <Content />
        </div>
    );
}
