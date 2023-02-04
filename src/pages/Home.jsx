import React from 'react';

const Home = () => {
    return (
        <>
            <div className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Hi, my name is <em>Yurii</em></strong><br/>
                        a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                    <a href="#!" className="btn">Download CV</a>
                </div>
            </div>

        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="./project-page.html">
                            <img src="./img/projects/01.jpg" alt="Project img" className="project__img"/>
                                <h3 className="project__title">Gaming streaming portal</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src="./img/projects/02.jpg" alt="Project img" className="project__img"/>
                                <h3 className="project__title">Video service</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="./project-page.html">
                            <img src="./img/projects/03.jpg" alt="Project img" className="project__img"/>
                                <h3 className="project__title">Video portal</h3>
                        </a>
                    </li>

                    <li className="project">
                        <img src="./img/projects/04.jpg" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Dating app</h3>
                    </li>
                    <li className="project">
                        <img src="./img/projects/05.jpg" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Landing</h3>
                    </li>
                    <li className="project">
                        <img src="./img/projects/06.jpg" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Gaming community</h3>
                    </li>

                </ul>
            </div>
        </main>
        </>

);
};

export default Home;

