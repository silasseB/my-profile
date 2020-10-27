import React, {Component, ReactEventHandler} from 'react';
import axios from 'axios';
import { MatchMediaHOC } from 'react-match-media';
import {history} from '../App';

export const TabStyles = {
    borderBottom:'2px solid #F505C6',
    opacity:0.60,
};

const SlideFromRight:object = {
        transition : {
            property : 'all',
            duration : 300,
            timingfunction : 'cubic-bezier(0.25, 0.5, 0.5, 0.9)'
        },
        begin : {
           'transform': 'translateX(-35%)',
           'opacity': 0
        },
        end : {
           'transform': 'translateX(0)',
           'opacity': 1
        },
        hidden : {
            diplay:'block'
        }
};
let transition:object = SlideFromRight['transition'];

let transition_style:object = {
        'transition': transition['property']+' '
        +(transition['duration'] / 1000) + 's'+' '+transition['timingfunction']
    };

interface State {
    home?:object;
    profile?:object;
    className?:string;
    pageContents?:object;
    Contents?:any;
    effect:object;
    changing?:boolean;
    tabStyles?:object;
}

export function IndexHoc(Component) {
	return class Index extends Component<State> {
    	private isFullyMounted: boolean = false;

    	static defaultProps: object = {
       
    	};

    	readonly state: State = {
            effect:SlideFromRight,
            changing:false,
        };

    public get isMounted() {
        return this.isFullyMounted;
    } 

    public set isMounted(value:boolean) {
        this.isFullyMounted = value;
    }

    constructor(props) {
        super(props);
       
    };
  

    // static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    //  return  dispatch => action.handleError(error);
    // }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error, info);
    }
   

    matchMediaSize(mediaSize:string): boolean{
        let size = `(${mediaSize})`;
        return window.matchMedia(size).matches;
    }

    componentWillUnmount() {
        this.isMounted = false;
        document.removeEventListener('scroll', this.handlePageScroll) 
       
    };
    
    componentDidMount() {
        this.isMounted = true;
        console.log(this.props)
        document.addEventListener('scroll', this.handlePageScroll)
        window.onpopstate = (event) => {
            console.log(this.props, 'is poping')
        }

        this.setTabStyles()
        this.getProfileContents()
             
        if (this.matchMediaSize("max-width : 980px")) {
            this.setState({className:'fixed-top'})   
        }

    };

    setTabStyles(){
        let pathName = this.props.location.pathname 
    
        switch (pathName) {
            case '/':
                this.UpdateStyleTab('homeTab')
                break;
            
            case '/skills/':
                // code...
                this.UpdateStyleTab('skillsTab')
                break;

            case '/portfolio/':
                // code...
                this.UpdateStyleTab('portfolioTab')
                break;

            case '/contact/':
                // code...
                this.UpdateStyleTab('contactTab')
                break;
            default:
                break
        }
    }

    UpdateStyleTab(key:string){
        let tabStyles:object = {};
        tabStyles[key] = TabStyles
        this.setState({tabStyles})
    }
   
    toggleMenu():void {
        let hamburger = document.getElementById("hamburger")
        if (hamburger) hamburger['checked'] = false;
    }
   

    changeRouter(url:string, state?:object):void {
        this.toggleMenu()
        let currentUrl:string = this.props.match.url;
      
        if (currentUrl === url) {
            return;
        }

        setTimeout(()=>  this.setState({changing:true}), 100);
        setTimeout(()=>{ history.push(url, state) }, 1000);
    }


    handlePageScroll =(e)=>{
        if (this.matchMediaSize("max-width:980px")) {
           return this.setState({className:'fixed-top'})
        }

        let documentBody = document.body;
        let clientBody = documentBody.getBoundingClientRect()
        let Elem    = document.getElementById('app-container');
        let client = Elem?.getBoundingClientRect()
     
        if (window.scrollY  !== 0) {
            if (!this.state.className) {
                this.setState({className:'fixed-top on-scroll'})
            }

        }else {
            this.setState({className:''})
        }
    }   

    getProfileContents(){
        
        axios.get('/index/')
        .then(response => {
            //console.log(response) 
            let data = response.data
            if (data) {
                let home = data.home[0]
                let profile = data.profile[0]
                
                this.setState({profile, home})  
            }
            
        })
        .catch(error => {
            console.log(error)  
        })
    }


    
    getProps(){
        let {effect, changing} = this.state;

        let styles =  Object.assign({},
                         effect['transition'],
                         changing? effect['begin']:effect['end']);
        return {
            styles,
            scroolToSection : this.scroolToSection.bind(this),
            changeRouter    : this.changeRouter.bind(this),
            ...this.props,
            ...this.state,
    
        };
    };

    scroolToSection(sectionId){
        if (!sectionId) return
      
        let hamburger = document.getElementById("hamburger")
        if (hamburger) hamburger['checked'] = false;
 
        let element = document.getElementById(sectionId);
        element?.scrollIntoView();
        element?.scrollIntoView(true);
        element?.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }
      
    render() {
        let props = this.getProps();
        let {effect} = props;
        let styles =  Object.assign({}, effect?.transition,effect?.end);
        
        return (
            <div id="app-container" className="app-container">
                <NavBarTemplate {...props}/>
                <Component {...props}/>
                <FooterTemplate/>
            </div>
        );
    };
};
};

export default IndexHoc;



export const NavBarTemplate = props => {
   
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


const NavBarMenuItems = (props) => {
    console.log(props) 
    let {tabStyles} = props;
      
    return (
        <div className="navigation-box">

            <ul className="navigation-btns-bo">
                <li style={tabStyles?.homeTab} className="text-highlight">
                    <button type="button"
                        onClick={() =>  props.changeRouter('/')}
                        className="btn-sm navbar-item">
                        Home
                    </button>
                </li>
            </ul>

            <ul className="navigation-btns-bo">
                <li  style={tabStyles?.skillsTab} className="text-highlight">
                <button type="button"
                        onClick={() => props.changeRouter('/skills/')}
                        className="btn-sm navbar-item">
                    Skills & Tools 
                </button>
                </li>
            </ul>

            <ul className="navigation-btns-bo">

                <li  style={tabStyles?.portfolioTab} className="text-highlight">
                    <button type="button"
                        onClick={() => props.changeRouter('/portfolio/')}
                        className="btn-sm navbar-item">
                        Portfolio
                    </button>
                </li>
            </ul>
            
            <ul className="navigation-btns-bo">
                <li  style={tabStyles?.contactTab} className="text-highlight">
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


const FooterTemplate = props =>{
    return(
        <div className="copyright-box">
            <ul className="copyright-text">
                <span className='copyright-symbol'>&#169;</span>
                <li>
                    2020 | Designed & coded by Silasi Valoi
                </li>
            </ul>
        </div>
    )
}

const BigScreenMenu = props => {
 
    return(
        <div className="desktop-navigation">
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




