import React, { useEffect, useRef } from 'react';
import styles from './UnifiedView.module.css';
import ProfileView from './ProfileView';
import SkillsView from './SkillsView';
import ProjectView from './ProjectView';

const UnifiedView = ({ data }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.section}>
                <div className={styles.sectionLabel}>// IDENTITY</div>
                <ProfileView data={data.personal} />
            </div>

            <div className={styles.separator}>
                <span className={styles.separatorLine}></span>
                <span className={styles.separatorIcon}>⎋</span>
                <span className={styles.separatorLine}></span>
            </div>

            <div className={styles.section}>
                <SkillsView data={data.skills} />
            </div>

            <div className={styles.separator}>
                <span className={styles.separatorLine}></span>
                <span className={styles.separatorIcon}>⎋</span>
                <span className={styles.separatorLine}></span>
            </div>

            <div className={styles.section}>
                <ProjectView data={data.experience} />
            </div>

            <div className={styles.footer}>
                END OF RECORD
                <br />
                AGENCY CORP. DATABASE
            </div>
        </div>
    );
};

export default UnifiedView;
