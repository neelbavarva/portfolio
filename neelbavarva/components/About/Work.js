import Image from 'next/image'
import Link from 'next/link';
import styles from '../../styles/About/Work.module.css'

export default function Work() {

    return (
        <div className={styles.container}>
            <div className={styles.work}>
                <h4 className={styles.work_header}>Work</h4>
                <div>
                    <div className={styles.work_container}>
                        <a href="https://www.visa.com/">VISA</a>
                        <div>
                            <span>Software Engineer</span>
                            <span>2023-<a className={styles.current}>2023</a></span>
                        </div>
                    </div>
                    <div className={styles.work_container}>
                        <a href="https://uiprocorp.com/">UIPRO</a>
                        <div>
                            <span>React Native Developer Intern</span>
                            <span>May - Aug 2021</span>
                        </div>
                    </div>
                </div>
                <hr className={styles.divider} />
            </div>
        </div>
    )
}
