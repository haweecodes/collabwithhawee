import React from 'react';
import styles from './SkillsView.module.css';

const SkillsView = ({ data }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>// SYSTEM CAPABILITIES_</h3>
            <div className={styles.grid}>
                {data.map((skill, index) => (
                    <div key={index} className={styles.module}>
                        <div className={styles.moduleCorner}></div>
                        <span className={styles.skillName}>{skill}</span>
                        <div className={styles.barContainer}>
                            <div className={styles.bar} style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsView;
