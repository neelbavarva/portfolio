import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Index.module.css'
import Navbar from '@/components/Navbar'
import Header from '@/components/Home/Header'
import Skills from '@/components/Home/Skills'

export default function Index() {
    return (
        <div className={styles.home}>
            <Head>
                <title>Neel Bavarva - Home</title>
                {/* <html>
                    <Script id="analytics" async src="https://www.googletagmanager.com/gtag/js?id=G-ET7HRLD2NT" />
                    <Script
                        id="window"
                        dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-ET7HRLD2NT', { page_path: window.location.pathname });
                        `,
                    }}
                    />
                </html> */}
            </Head>
            
            <Navbar page={"Home"} />
            <Header />
            <Skills />
        </div>
    )
}
