import React from 'react';
import styles from './ProjectView.module.css';

const ProjectView = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.folderTab}>CASE FILES_</div>

            {data.map((project, index) => (
                <div key={project.id || index} className={styles.fileContainer}>
                    <div className={styles.fileHeader}>
                        <span className={styles.fileId}>CASE #{1000 + index}</span>
                        <span className={styles.fileTitle}>{project.company.toUpperCase()}</span>
                    </div>
                    <div className={styles.fileContent}>
                        <div className={styles.meta}>
                            <span>ROLE: {project.role}</span>
                            <span>DUR: {project.duration}</span>
                        </div>
                        <ul className={styles.details}>
                            {project.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectView;
