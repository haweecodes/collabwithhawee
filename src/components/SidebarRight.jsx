import React from 'react';
import '../styles/SidebarRight.css';
import { cvData } from '../data/cv';

function SidebarRight() {
    return (
        <div className="sidebar-right">
            <div className="section">
                <div className="section-header">Skills</div>
                <div className="skills-container">
                    {cvData.skills.slice(0, 10).map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                    {cvData.skills.length > 10 && <span className="skill-more">...and more</span>}
                </div>
            </div>
            <div className="section">
                <div className="section-header">Education</div>
                {cvData.education.map((edu, index) => (
                    <div key={index} className="edu-item">
                        <div className="edu-school">{edu.school}</div>
                        <div className="edu-degree">{edu.degree}</div>
                        <div className="edu-year">{edu.year}</div>
                    </div>
                ))}
            </div>
            <div className="section">
                <div className="section-header">Pokes</div>
                <div className="poke-item">
                    You have 0 pokes.
                </div>
            </div>
        </div>
    );
}

export default SidebarRight;
