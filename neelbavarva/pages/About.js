import Head from 'next/head'
import styles from '../styles/About.module.css'
import Navbar from '@/components/Navbar'
import Content from '@/components/About/Content'

export default function About() {
    return (
        <div className={styles.home}>
            <Head>
                <title>Neel Bavarva - About</title>
            </Head>
            
            <Navbar page={"About"} />
            
            <div className={styles.about_continer}>
                <Content />
            </div>

        </div>
    )
}
