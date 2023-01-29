import {useReducer} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar({page}) {
    const[currentPage, setCurrentPage] = useReducer(false, page);

    return (
        <nav className={styles.navbar}> 

            <div className={styles.nav_top} />

            <div className={styles.nav_content}>
                <div className={styles.nav_logo}>
                    <div className={styles.nav_logo_container}>
                        Neel
                    </div>
                </div>

                <div className={styles.nav_links}>
                    <div className={styles.nav_logo_container}>
                        Neel
                    </div>
                    <Link legacyBehavior href="/">
                        <a className={currentPage == "Home" ? styles.nav_selected : null}>Home</a>
                    </Link>

                    <Link legacyBehavior href="Projects">
                        <a className={currentPage == "Projects" ? styles.nav_selected : null}>Projects</a>
                    </Link>

                    <Link legacyBehavior href="About">
                        <a className={currentPage == "About" ? styles.nav_selected : null}>About</a>
                    </Link>
                </div>
            </div>
            
        </nav>
    )
}
