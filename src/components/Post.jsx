import React from 'react';
import '../styles/Post.css';

function Post({ job, userName }) {
    return (
        <div className="post">
            <div className="post-header">
                <span className="post-author-name">{userName}</span>
                <span className="post-action"> started a new job at </span>
                <span className="post-target">{job.company}</span>
            </div>
            <div className="post-content">
                <div className="job-details">
                    <div className="job-role">{job.role}</div>
                    <div className="job-meta">{job.location} · {job.duration}</div>
                    <div className="job-description">
                        <ul>
                            {job.description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="post-footer">
                <span className="action-link">Comment</span> · <span className="action-link">Like</span> · <span className="action-link">Share</span>
            </div>
        </div>
    );
}

export default Post;
