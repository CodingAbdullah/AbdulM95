import React from 'react';
import HorizontalRule from '../HorizontalRule/HorizontalRule.jsx';
import '../../css/homeinformation.css';
import { Link } from 'react-router-dom';

const HomeInformation = () => {

    return (
            <section id="mid-section">
                <div className="mid-upper-row row">
                    <div className="resume-row col-lg-4">
                        <Link className="icon-address" to="/resume">
                            <i className="fas fa-file-alt fa-6x"></i>
                            <h2 className="mid-heading">Resume</h2>
                            <p className="mid-paragraph">A comprehensive overview about me just one click away!</p>
                        </Link>
                    </div>
                </div>
                <HorizontalRule />
                <div className="mid-row row">
                    <div className="mid-row-section border-r col-lg-4 col-md-4 col-sm-4">
                        <Link className="icon-address" to="/about">
                            <i className="fas fa-address-card fa-6x"></i> 
                            <h2 className="mid-heading">About</h2>
                            <p className="mid-paragraph">You can learn more about me and where/why/what I pursued as education.</p>
                        </Link>
                    </div>
                    <div className="mid-row-section border-r col-lg-4 col-md-4 col-sm-4">
                        <Link className="icon-address" to="/skills">
                            <i className="fas fa-laptop-code fa-6x"></i>  
                            <h2 className="mid-heading">Skills</h2>
                            <p className="mid-paragraph">Information pertaining to my skill set and technology stack.</p>
                        </Link>
                    </div>
                    <div className="mid-row-section col-lg-4 col-md-4 col-sm-4">
                        <Link className="icon-address" to="/leisure">
                            <i className="fas fa-chess-knight fa-6x"></i> 
                            <h2 className="mid-heading">Leisure</h2>
                            <p className="mid-paragraph">I love playing sports during free time. As a developer, it is important to relax and find time for yourself!</p>
                        </Link>
                    </div>
                </div>
            </section>
    )
}

export default HomeInformation;