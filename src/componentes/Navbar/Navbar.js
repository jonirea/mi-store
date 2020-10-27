import React, { Component } from 'react';
import{ MenuItems } from './MenuItems'
import './Navbar.css'
import CartWidget from './CartWidget'

class Navbar extends Component {    
    state = { clicked: false }

    render() {  
        return( 
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Mi Store<i className="fas fa-mobile"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (    
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.tittle}
                                </a>
                            </li>
                        )
                    })}    

                </ul>
                <CartWidget />
                
            </nav>
        )
    }
}

export default Navbar