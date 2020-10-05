//import React, { Component } from 'react';
import * as React from 'react';
import { Link } from "react-router-dom";
import { MatchMediaHOC } from 'react-match-media';
import TextareaAutosize from 'react-autosize-textarea';
import * as Icon from 'react-feather';
import DevIcon from "devicon-react-svg";


const devIconStyle = {
    fill: "thistle",
    width: "50px",
}

const HomePageTemplate  = props => {
    let {home,
        form, 
        textAreaProps,
        handleChange,
        handleSubmit,
        submitting,
        profile} = props.children;

    let backgroundPic = home?.background_pic;
    let profilePic = profile?.profile_pic;
    let about = profile?.about;
    
    let submitBtnStyles = {}  
    return(
        <div className="home-page-contents" id="home-page-contents">
            <div className="page-placeholder-img-box">
                <img alt="" 
                     src={backgroundPic} 
                    className="page-placeholder-img"/> 
            </div>
             <div id="welcome-message-box" className="welcome-message-box">
                <ul className="welcome-message">
                    <li>
                        Hi there, I'm Silasi Valoi. Lets Discuss, Disign and Digitalize,
                        your thouths.
                    </li>
                </ul>
            </div>

            <div id="about-box" className="about-box">
                <div className="section-contents">
                <ul className="section-title-box">
                    <li className="section-title">About</li>
                    <li className="section-description">
                        Who's Silasi?
                    </li>
                </ul>
                <div id="about-contents" className="about-contents">
                    <div className="about-profile-pic-box">
                        <div className="profile-pic-box">
                            <img alt="" 
                                 src={profilePic} 
                                className="profile-pic"/> 
                        </div>
                    </div>
                    <div className="about-text-box">
                        <ul className="about-text">
                            <li>{about}</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>

            <div id="tools-and-skill-box" className="tools-and-skill-box">
                <div className="section-contents">
                <ul className="section-title-box">
                    <li className="section-title">Tools & Skills</li>
                    <li className="section-description">
                        My Toolbox & Things I Can Do
                    </li>
                </ul>

                <div className="tools-and-skills-icons">
                    <ul className="skill">
                        <DevIcon icon="python" style={devIconStyle}/>
                        <li className="icon-name">
                            Python
                        </li>
                    </ul>
                    <ul className="skill">
                        <DevIcon icon="mysql" style={devIconStyle}/>
                        <li className="icon-name">
                            Mysql
                        </li>
                    </ul>

                    <ul className="skill">
                        <DevIcon icon="linux" style={devIconStyle}/>
                        <li className="icon-name">
                            Linux
                        </li>
                    </ul>

                    <ul className="skill">
                        <DevIcon icon="javascript" style={devIconStyle}/>
                        <li className="icon-name">
                            JavaScript
                        </li>
                    </ul>
                     <ul className="skill">
                        <DevIcon icon="django" style={devIconStyle}/>
                        <li className="icon-name">
                            Django
                        </li>
                    </ul>

                    <ul className="skill">
                        <DevIcon icon="react" style={devIconStyle}/>
                        <li className="icon-name">
                            React
                        </li>
                    </ul>
                   

                    <ul className="skill">
                        <DevIcon icon="webpack" style={devIconStyle}/>
                        <li className="icon-name">
                            Webpack
                        </li>
                    </ul>

                     <ul className="skill">
                        <DevIcon icon="html5" style={devIconStyle}/>
                        <li className="icon-name">
                            HTML5
                        </li>
                    </ul>

                     <ul className="skill">
                        <DevIcon icon="css3" style={devIconStyle}/>
                        <li className="icon-name">
                            CSS3
                        </li>
                    </ul>

                     <ul className="skill">
                        <DevIcon icon="bootstrap" style={devIconStyle}/>
                        <li className="icon-name">
                            Bootstrap
                        </li>
                    </ul>

                    <ul className="skill">
                        <DevIcon icon="jquery" style={devIconStyle}/>
                        <li className="icon-name">
                            JQuery
                        </li>
                    </ul>
                    <ul className="skill">
                        <DevIcon icon="git" style={devIconStyle}/>
                        <li className="icon-name">
                            git
                        </li>
                    </ul>
                  
                    <ul className="skill">
                        <DevIcon icon="github" style={devIconStyle}/>
                        <li className="icon-name">
                            Github
                        </li>
                    </ul>
                </div>
                </div>
            </div>

            <div id="projects-box" className="projects-box">
                <div className="section-contents">
                    <ul className="section-title-box">
                        <li className="section-title">Projects</li>
                        <li className="section-description">
                            A Selection Of Stuff I've Built
                        </li>
                    </ul>
                </div>
            </div>


            <div id="contact-box" className="contact-box">
                <div className="section-contents contact-contents">
                    <div className="contact-form-box">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="section-title-box">
                                <ul className=''>
                                    <li className='section-title'>Contact</li>
                                    <li className='section-description'>
                                        Get In Toutch
                                    </li>
                                </ul>
                                <ul className='contact-form-description'>
                                    <li>
                                        Dropping a line to say g’day, ask for my resume
                                        or see if we can build something amazing together?
                                        I’d love to hear from you!
                                        Use the form below or directly at 
                                        silassibaloy(at)gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="name-box">
                                <label htmlFor="full_name" className="input-label">
                                    Name
                                    <span aria-hidden="true" className="required">*</span>
                                </label>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        placeholder="Name" 
                                        className="contact-input"
                                        name="name"
                                        value={form?.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="email-box">
                                <label htmlFor="email" className="input-label">
                                    Email
                                    <span aria-hidden="true" className="required">*</span>
                                </label>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        placeholder="Email" 
                                        className="contact-input"
                                        name="email"
                                        value={form?.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="description-box">
                                <label htmlFor="description" className="input-label">
                                    Message
                                    <span aria-hidden="true" className="required">*</span>
                                </label>
                                <div className="description-textarea-box">
                                    <TextareaAutosize {...textAreaProps} rows={6}/>
                                </div>
                            </div>

                            <div className="message-submit-box">
                                <button type="button"
                                    style={submitBtnStyles} 
                                    disabled={submitting}
                                    onClick={(e) => handleSubmit(e)}
                                    className="btn message-submit-btn">
                                    Send Mesage
                                </button>
                            </div>  
                        </form>
                    </div>
                    <div className="social-connect-box">
                        <div className="section-content">
                        <ul className="social-connect-title">
                            <li>
                                Feeling social? Find me on these online spaces too!
                            </li>
                        </ul>
                        <div className="social-connect-btn-box">
                            <ul className="social-connect-btns">
                                <li className="">                                 
                                    <button type="button" className="social-btn">
                                        <Icon.Twitter 
                                            className="social-icon" 
                                            size={30}
                                            color={'#C45E06'}
                                        />
                                    </button>
                                </li>

                                <li className="">                                
                                    <button type="button" className="social-btn">
                                        <Icon.GitHub 
                                            className="social-icon" 
                                            size={30}
                                            color={'#C45E06'}
                                        />
                                    </button>
                                </li>
                                <li className="">                                
                                    <button type="button" className="social-btn">
                                        <Icon.Linkedin 
                                            className="social-icon" 
                                            size={30}
                                            color={'#C45E06'}
                                        />
                                    </button>
                                </li>
                            </ul>

                        </div>
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className="copyright-box">
                <div className="section-contents">
                <ul className="copyright-text">
                    <span className='copyright-symbol'>&#169;</span>
                    <li>
                        2019 - 2020 | Designed & coded
                        by Silasi Valoi (aka Silasi Baloyi)
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )

}

export default HomePageTemplate; 


export const NavBarTemplate = props => {
        
    return(
        <nav  className="navbar-container fixed-top navbar-expand-lg navbar-light"
              id="navigation-mobile">
            <div className="navigation-items-box">
                <NavBarMenu {...props}/>
                <DropDownMenu {...props}/>
            </div>
        </nav>
    )

};


const NavBarMenuItems = (props) => {

    return (
        <ul className="navigation-items">
            <li className="text-highlight">
                <button type="button"
                        onClick={() => props.scroolToSection('about-box')}
                        className="btn-sm navbar-item">
                    About
                </button>
            </li>
            <li className="text-highlight">
                <button type="button"
                        onClick={() => props.scroolToSection('projects-box')}
                        className="btn-sm navbar-item">
                    Projects
                </button>
            </li>
            <li className="text-highlight">
                <button type="button"
                        onClick={() => props.scroolToSection('tools-and-skill-box')}
                        className="btn-sm navbar-item">
                    Skills & Tools 
                </button>
            </li>

            <li className="text-highlight">
                <button type="button"
                        onClick={() => props.scroolToSection('contact-box')}
                        className="btn-sm navbar-item">
                    Contact
                </button>
            </li>
        </ul>
    )
};



const BigScreenMenu = props => {
 
    return(
        <div className="">
            <NavBarMenuItems {...props}/>
        </div>
    )
};



const SmallScreenMenu = props => {
 
    return(
        <div className="dropdown-box">
            <div className="hamburger-box" >
                
            <input type="checkbox" id="hamburger" name="hamburger" />
            <label htmlFor="hamburger" className="navTrigger">
                <span></span>
                <span></span>
                <span></span>
            </label>
                       
            <div className="myprofile-dropdown-menu"
                 aria-labelledby="NavBarDropdown">
                <NavBarMenuItems {...props}/>
            </div>
            </div>
        </div>
    )
};

const NavBarMenu   = MatchMediaHOC(BigScreenMenu,'(min-width: 980px)');
const DropDownMenu = MatchMediaHOC(SmallScreenMenu,'(max-width: 980px)');