import React, {Component} from 'react';
import { slide as Menu} from 'react-burger-menu';

class Sidebar extends Component {
		render() {

  	var styles = {
  		bmBurgerButton: {
		  	zIndex: "10000",
		    position: "fixed",
		    width: "26px",
		    height: "24px",
		    left: "13px",
		    top: "15px",
		},
  		bmBurgerBars: {
  			background: '#373a47'
  		},
  		bmCrossButton: {
  			height: '24px',
  			width: '24px'
  		},
  		bmCross: {
  			background: '#bdc3c7'
  		},
  		bmMenu: {
  			background: '#373a47',
  			padding: '2.5em 1.5em 0',
  			fontSize: '1.15em'
  		},
  		bmMorphShape: {
  			fill: '#373a47'
  		},
  		bmItemList: {
  			color: '#b8b7ad',
  			padding: '0.8em'
  		},
  		bmOverlay: {
  			background: 'rgba(0, 0, 0, 0.3)'
  		},
  		bmBurgerBars: {
			background: "rgb(255, 255, 255)",
		    height: "12%",
		}
  	}

    return (
    	<div>
    		<Menu isOpen={ false } alignment="left" styles={styles}>
        		<a id="home" className="menu-item" href="/">Home</a>
        		<a id="teams" className="menu-item" href="/about">Teams</a>
        		<a id="blog" className="menu-item" href="/posts">Blog</a>
        		<a onClick={ this.showSettings } className="menu-item--small">Settings</a>
        	</Menu>
       		<div id="outer-container">
			
        	</div>
        </div>
    );
  }
}

export default Sidebar;