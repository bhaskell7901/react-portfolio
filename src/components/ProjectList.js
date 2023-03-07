import React from 'react';
import Project from '../components/Project'

function ProjectList(props) {
    const projectData = [
        {
            id: 1,
            projectUrl: 'https://bhaskell7901.github.io/know-your-government/index.html',
            projectTitle: 'Know Your Government',
            img: {
                src: './images/pexels-photo-1181467.webp',
                altTxt: "close up of laptop being used"
            },
        },
        {
            id: 2,
            projectUrl: 'https://calm-tor-44072.herokuapp.com/',
            projectTitle: 'TaskIt',
            img: {
                src: './images/pexels-photo-2387532.webp',
                altTxt: "close up of keyboard"
            },
        },
        {
            id: 3,
            projectUrl: 'https://bhaskell7901.github.io/prework-study-guide/',
            projectTitle: 'Study Guide',
            img: {
                src: './images/pexels-photo-1194713.webp',
                altTxt: 'close up of keyboard'
            },
        },
        {
            id: 4,
            projectUrl: 'https://bhaskell7901.github.io/urban-octo-telegram-bhaskell/',
            projectTitle: 'Portability with Flexbox',
            img: {
                src: './images/pexels-photo-3861969.webp',
                altTxt: 'woman with projector display'
            }
        }
    ];

    const projectList = projectData.map(item => <Project key={item.id} projectUrl={item.projectUrl} projectTitle={item.projectTitle} img={item.img} />);

    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul className="projects-list">
                {projectList}
            </ul>
        </section>
    );
}

export default ProjectList;