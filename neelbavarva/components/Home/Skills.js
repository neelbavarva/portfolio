import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home/Skills.module.css'

export default function Skills() {
    return (
        <div className={`${styles.skills} ${styles.container}`}>
            <h4 className={styles.skills_header}>Technical Skills</h4>
            <div>
                <div className={styles.skills_container}>
                    <span>Languages</span>
                    <span>Java, Javascript</span>
                </div>
                <div className={styles.skills_container}>
                    <span>Frameworks</span>
                    <span>React.js, Next.js, React Native, Node.js, Spring Boot</span>
                </div>
                <div className={styles.skills_container}>
                    <span>Development Tools &amp; Tech</span>
                    <span>mongoDB, Vercel, Linux, git, npm</span>
                </div>
                <div className={styles.skills_container}>
                    <span>CS Fundamentals</span>
                    <span>DBMS, Operating Systems, Object-Oriented Design</span>
                </div>
                <div className={styles.skills_container}>
                    <span>Familiar With</span>
                    <span>Computer Networks, MySQL, Docker</span>
                </div>
            </div>
        </div>
    )
}
