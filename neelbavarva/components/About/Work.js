import styles from "../../styles/About/Work.module.css";

export default function Work() {
    function calculateTimeDifference(month, year) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;

        let yearDiff = currentYear - year;
        let monthDiff = currentMonth - month;

        if (monthDiff < 0) {
            yearDiff -= 1;
            monthDiff += 12;
        }

        return `${yearDiff} years ${monthDiff} months`;
    }

    return (
        <div className={styles.container}>
            <div className={styles.work}>
                <h4 className={styles.work_header}>Work</h4>
                <div>
                    <div className={styles.work_container}>
                        <div className={styles.work_info}>
                            <div>Software Engineer - </div>
                            <a
                                href="https://visa.com"
                                target="_blank"
                                rel="noreferrer"
                            ></a>
                        </div>
                        <div>
                            <span>
                                Since June 2023 (
                                {calculateTimeDifference(6, 2023)})
                            </span>
                        </div>
                    </div>
                </div>
                <hr className={styles.divider} />
            </div>
        </div>
    );
}
