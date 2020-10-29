import React from 'react';
import { MatchMediaHOC } from 'react-match-media';

const tabs:object = {
    
}

type Props = {
    tabStyles?:object;
    className?:string;
    changeRouter?: (url:string, state?:object)=> void;
};

export const NavBarTemplate:React.FC<Props> = props => {
   
    return(
        <nav  className={`navbar-container ${props.className}`}>
            <div className="navbar-box">
                
                <div className="navbar-section-2 navigation-contents">
                    <ul className="navbar-logo-box">
                        <li>Silasi</li>
                        <li>Valoi</li>                        
                    </ul>
                
                    <NavBarMenu {...props}/>
                    <DropDownMenu {...props}/>
                </div>
                
            </div>
        </nav>
    )

};



const NavBarMenuItems: React.FC<Props> = (props) => {
    console.log(props) 
    let {tabStyles} = props;
      
    return (
        <div className="navigation-box">

            <ul className="navigation-btns-bo">
                <li style={tabStyles['homeTab']} className="text-highlight">
                    <button type="button"
                        onClick={() =>  props.changeRouter('/')}
                        className="btn-sm navbar-item">
                        Home
                    </button>
                </li>
            </ul>

            <ul className="navigation-btns-bo">
                <li  style={tabStyles['skillsTab']} className="text-highlight">
                <button type="button"
                        onClick={() => props.changeRouter('/skills/')}
                        className="btn-sm navbar-item">
                    Skills & Tools 
                </button>
                </li>
            </ul>

            <ul className="navigation-btns-bo">

                <li  style={tabStyles['portfolioTab']} className="text-highlight">
                    <button type="button"
                        onClick={() => props.changeRouter('/portfolio/')}
                        className="btn-sm navbar-item">
                        Portfolio
                    </button>
                </li>
            </ul>
            
            <ul className="navigation-btns-bo">
                <li  style={tabStyles['contactTab']} className="text-highlight">
                    <button type="button"
                        onClick={() => props.changeRouter('/contact/')}
                        className="btn-sm navbar-item">
                        Contact
                    </button>
                </li>
            </ul>
        </div>
    )
};



const BigScreenMenu:React.FC = props => {
 
    return(
        <div className="desktop-navigation">
            <NavBarMenuItems {...props}/>
        </div>
    )
};



const SmallScreenMenu:React.FC = props => {
 
    return(
        <div className="dropdown-box">
            <div className="hamburger-box" >
                
            <input type="checkbox" id="hamburger" name="hamburger" />
            <label htmlFor="hamburger" className="navTrigger">
                <span></span>
                <span></span>
                <span></span>
            </label>
                       
            <div className="navigation-dropdown-menu"
                 aria-labelledby="NavBarDropdown">
                <NavBarMenuItems {...props}/>
            </div>
            </div>
        </div>
    )
};

const NavBarMenu   = MatchMediaHOC(BigScreenMenu,'(min-width: 980px)');
const DropDownMenu = MatchMediaHOC(SmallScreenMenu,'(max-width: 980px)');




