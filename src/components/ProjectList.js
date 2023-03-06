import React from 'react';
import Project from '../components/Project'

function ProjectList(props) {
    const projectData = [
        {
            id: 1,
            projectUrl: 'https://bhaskell7901.github.io/know-your-government/index.html',
            projectTitle: 'Know Your Government',
            img: {
                src: "filename",
                altTxt: "close up of laptop being used"
            }
        }
    ];

    const projectList = projectData.map(item => <Project key={item.id} name={item.name} />);

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