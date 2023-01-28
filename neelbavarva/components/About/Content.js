import Image from 'next/image'
import styles from '../../styles/About/Content.module.css'
import Link from 'next/link';
import sample from '../../public/images/sample.png'

export default function Content() {

    return (
        <div className={styles.container}>
            <div className={styles.about_container}>
                <Image alt="about me" className={styles.about_img} src={sample} />

                <div className={styles.about_content}>
                    <p>
                        I&apos;m Dale a UK based product designer with over ten years of experience. I specialise in interface design for mobile and web-based applications with a focus on simplicity & usability. I&apos;m passionate about design and technology and how the two can converge to create experiences for good. <br /> <br />

                        I&apos;m currently working at WP Engine where I design some of the worlds best WordPress products including Advanced Custom Fields, WP Migrate and
                        WP Offload Media. <br /> <br />

                        Before WP Engine I worked at BaseKit where I designed web applications like the worlds first fully functional mobile website builder, a commerce platform, dashboard, mobile application, and an online booking system. <br /> <br />

                        Before BaseKit I spent some time working for web agencies designing everything from one-page websites to native mobile applications. Over the years I&apos;ve been lucky enough to work with companies like Nationwide, BP, Telefónica, Apple & Amazon. <br /> <br />
                    </p>

                    <hr className={styles.divider} />
                </div>
            </div>
        </div>
    )
}
