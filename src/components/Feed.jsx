import React from 'react';
import Post from './Post';
import '../styles/Feed.css';
import { cvData } from '../data/cv';

function Feed() {
    return (
        <div className="feed">
            <div className="feed-header">
                <span className="feed-title">News Feed</span>
            </div>
            <div className="status-update-box">
                <span className="status-label">What's on your mind?</span>
                <div className="status-content">
                    {cvData.personal.summary}
                </div>
            </div>
            <div className="feed-content">
                {cvData.experience.map(job => (
                    <Post key={job.id} job={job} userName={cvData.personal.name} />
                ))}
            </div>
        </div>
    );
}

export default Feed;
