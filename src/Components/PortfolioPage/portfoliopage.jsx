import React from 'react';
import HorizontalRule from '../HorizontalRule/HorizontalRule'

const PortfolioPage = () => {

    return (
        <div className="programming-section">
                <h1 className="programming-heading">Portfolio</h1>
                <p className="programming-paragraph">Here, on this page, you will find a link to a portfolio page which contains a list of the present/past projects I have been working on, their brief descriptions and a link to their actual place on the interwebs. </p>
                <p className="programming-paragraph">Some of these are static, others have a full fledged back end working behind the scenes. Nevertheless, they're all deployed to the cloud via AWS.</p>
                <br />
                <p className="programming-paragraph">The link to my Github profile is: <b><i><u><a style={{ color: 'green' }} href="https://github.com/CodingAbdullah" target="_blank" rel="noreferrer">Github Profile</a></u></i></b></p>
                <p className="programming-paragraph">Portfolio link: <b><i><u><a style={{ color: 'green' }} href="https://codingAbdullah.github.io/Portfolio-Page/" target="_blank" rel="noreferrer">Portfolio Link</a></u></i></b></p>
                <HorizontalRule />
        </div>
    )
}


export default PortfolioPage;