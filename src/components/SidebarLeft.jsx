import React from 'react';
import '../styles/SidebarLeft.css';
import profilePic from '../assets/profile_pic.jpg';
import { cvData } from '../data/cv';

function SidebarLeft() {
    return (
        <div className="sidebar-left">
            <div className="profile-pic-container">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <div className="profile-name-overlay">{cvData.personal.name}</div>
            </div>

            <div className="nav-links">
                <div className="nav-item">
                    <span className="icon">📍</span>
                    <span className="nav-text">{cvData.personal.location}</span>
                </div>
                <div className="nav-item">
                    <span className="icon">📞</span>
                    <span className="nav-text">{cvData.personal.phone}</span>
                </div>
                <div className="nav-item">
                    <span className="icon">✉️</span>
                    <a href={`mailto:${cvData.personal.email}`} className="nav-text">{cvData.personal.email}</a>
                </div>
                <div className="nav-item">
                    <span className="icon">🔗</span>
                    <a href={`https://${cvData.personal.linkedin}`} target="_blank" className="nav-text">LinkedIn Profile</a>
                </div>
                <div className="nav-item">
                    <span className="icon">🔗</span>
                    <a href={`https://${cvData.personal.github}`} target="_blank" className="nav-text">GitHub Profile</a>
                </div>
            </div>
        </div>
    );
}

export default SidebarLeft;
