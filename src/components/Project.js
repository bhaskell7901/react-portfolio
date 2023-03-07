import React from 'react';

function Project(props) {
    return (
        <li className="pj-card">
            <a href={props.projectUrl}><img src={props.img.src} alt={props.img.altText}/></a>
            <div className="card-text">
                <h3>{props.projectTitle}</h3>
            </div>
        </li>
    );
}

export default Project;
