
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router}  from "react-router-dom";


const _App =()=> (
	<p>Hello</p>
) 

ReactDOM.render(<_App/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.register();



