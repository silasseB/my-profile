import React from 'react';
import {Switch, Route,} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Home from 'components/home-page';
import PortfolioContainer from "./components/portfolio";
import SkillsContainer from './components/skills';
import ContactContainer from './components/contact';

export const history = createBrowserHistory();


function App() {
        
    return (
        <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/portfolio/" component={PortfolioContainer}/>
            <Route exact path="/skills/" component={SkillsContainer}/>
            <Route exact path="/contact/" component={ContactContainer}/>
        </Switch>
        </div>
    );
}

export default App;




