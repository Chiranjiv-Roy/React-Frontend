import React, { Component } from 'react';
import Navigationbar from './navbar'
import Sidebar from './sidebar'


export default class App extends Component {
	
  render() {
    return (
    	<div>
    		<Sidebar />
    		<Navigationbar />
    	</div>
    );
  }
}
