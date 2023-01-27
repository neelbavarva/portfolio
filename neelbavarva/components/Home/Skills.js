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
                    <span>Web&nbsp;&&nbsp;App&nbsp;Development</span>
                    <span>React.js, Next.js, React Native, Node.js, MySQL</span>
                </div>
                <div className={styles.skills_container}>
                    <span>Development&nbsp;Tools&nbsp;&amp;&nbsp;Tech</span>
                    <span>mongoDB, Vercel, Linux, git, npm</span>
                </div>
                <div className={styles.skills_container}>
                    <span>Familiar&nbsp;With</span>
                    <span>Computer Networks, Spring Boot, Docker</span>
                </div>
                <div className={styles.skills_container}>
                    <span>CS&nbsp;Fundamentals</span>
                    <span>Complexity Analysis, Problem Solving, Database Management Systems(DBMS), Object-Oriented Design(OOPs), Operating Systems(OS)</span>
                </div>
            </div>
        </div>
    )
}
