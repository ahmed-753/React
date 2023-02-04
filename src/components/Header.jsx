import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (

        <header className="nav">
            <div className="container">
                <div className="nav-row">
                    <Link to="/" className="logo"><strong>Freelancer</strong> portfolio</Link>
                    <button className="dark-mode-btn">
                        <img src="./img/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon"/>
                            <img src="./img/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon"/>
                    </button>

                    <ul className="nav-list">
                        <li className="nav-list__item"><Link to="/"
                                                          className="nav-list__link nav-list__link--active">Projects</Link>
                        </li>
                        <li className="nav-list__item"><Link to="/Skills" className="nav-list__link">Skills</Link>
                        </li>
                        <li className="nav-list__item"><Link to="/Contacts" className="nav-list__link">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;