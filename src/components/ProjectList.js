import React from 'react';
import Project from '../components/Project'

function ProjectList(props) {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul className="projects-list">
                <Project />
            </ul>
        </section>
    );
}

export default ProjectList;