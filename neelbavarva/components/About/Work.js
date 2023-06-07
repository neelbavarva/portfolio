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
                        <div className={styles.work_info}>
                            <div>Software Engineer - </div>
                            <a href="https://visa.com" target="_blank" rel="noreferrer"></a>
                        </div>
                        <div>
                            <span>Since June 2023</span>
                        </div>
                    </div>
                </div>
                <hr className={styles.divider} />
            </div>
        </div>
    )
}
