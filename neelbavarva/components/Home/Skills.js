import styles from "../../styles/Home/Skills.module.css";

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
                    <span>Backend&nbsp;Development</span>
                    <span>Spring Boot, MySQL, Oracle DB, MongoDB</span>
                </div>
                <div className={styles.skills_container}>
                    <span>Web&nbsp;&amp;&nbsp;App&nbsp;Development</span>
                    <span>React.js, Next.js, React Native, Node.js</span>
                </div>
                <div className={styles.skills_container}>
                    <span>CS&nbsp;Fundamentals</span>
                    <span>
                        Computer Networks, Database Management Systems(DBMS),
                        Object-Oriented Design(OOPs), Operating Systems(OS),
                        Complexity Analysis
                    </span>
                </div>
            </div>
        </div>
    );
}
