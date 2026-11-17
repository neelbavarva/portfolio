import Head from "next/head";
import styles from "../styles/Index.module.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Home/Header";
import Skills from "@/components/Home/Skills";

export default function Index() {
    return (
        <div className={styles.home}>
            <Head>
                <title>Neel Bavarva - Home</title>
                <meta name="next-head-count" content="1" />
            </Head>
            <Navbar page={"Home"} />
            <Header />
            <Skills />
        </div>
    );
}
