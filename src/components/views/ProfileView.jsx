import React from 'react';
import styles from './ProfileView.module.css';
import profilePic from '../../assets/profile_pic.jpg';

const ProfileView = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cornerTopLeft}></div>
                <div className={styles.cornerTopRight}></div>
                <div className={styles.cornerBottomLeft}></div>
                <div className={styles.cornerBottomRight}></div>

                <div className={styles.header}>
                    <span className={styles.label}>TARGET ID:</span>
                    <span className={styles.value}>{data.name.toUpperCase()}</span>
                </div>

                <div className={styles.content}>
                    <div className={styles.imageSection}>
                        <div className={styles.scanlineImg}></div>
                        <img src={profilePic} alt="Target" className={styles.profileImg} />
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.row}>
                            <span className={styles.label}>ROLE:</span>
                            <span className={styles.value}>SENIOR FRONTEND ENGINEER</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>LOC:</span>
                            <span className={styles.value}>{data.location}</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>STATUS:</span>
                            <span className={`${styles.value} ${styles.blink}`}>ACTIVE // OPEN</span>
                        </div>

                        <div className={styles.bio}>
                            <p>{data.summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
