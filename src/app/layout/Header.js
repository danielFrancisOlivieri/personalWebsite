import React from 'react'
import { NavLink } from 'react-router-dom'
import { render } from 'react-dom'
import MdFlame from 'react-ionicons/lib/MdFlame'
import 'semantic-ui-css/semantic.min.css'
import {Icon} from 'semantic-ui-react'
import "../css/header.css"


class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
            height: 70,
            fontSize: 20,
         
          }}>
        <div className="navbar-brand">
        <NavLink
className="navbar-item"
to="/"
activeClassName="is-active"
>


            <span> <Icon name='home' color="red" /> danielFrancisOlivieri.com</span>
        </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
          <NavLink
className="navbar-item"
to="/blog"
activeClassName="is-active"
>
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
              <i className="fas fa-pencil-alt blogIcon" ></i>
              </span>
              
              
              Blog
            </NavLink>


            <NavLink
className="navbar-item"
to="/work"
activeClassName="is-active"
>
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Work
            </NavLink>


            <a className="navbar-item" href="https://medium.com/@dfolivieri" target="_blank" >
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fab fa-lg fa-medium"></i>
              </span>
              Medium
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" >
                Projects
              </a>
              <div className="navbar-dropdown">                
                <a className="navbar-item" href="http://mappingancienttexts.net/wp-content/uploads/2018/06/v7spw.html">
                  Mapping Hannibal
                </a>
                <a className="navbar-item" href="http://mappingancienttexts.net">
                  Mapping Ancient Texts
                </a>
                <a className="navbar-item" href="http://bandaniel.com/cyo.html">
                  Choose Your Own
                </a>
                <a className="navbar-item" href="http://bandaniel.com/projects/jabberwocky">
                  Jabberwocky
                </a>
                <a className="navbar-item" href="https://danielfrancisolivieri.github.io/WhatWeMayBecome/#section-1">
                  What We May Become
                </a>
                <a className="navbar-item" href="https://twitter.com/simplyTooLitBot/status/1074492830062661632">
                  Literature Bot
                </a>


                
                
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/danielFrancisOlivieri">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>

            <a className="navbar-item" href="https://www.linkedin.com/in/daniel-olivieri-206141106/">
              
              <span className="icon" style={{ color: '#0077B5', marginLeft: 5 }}>
                <i className="fab fa-lg fa-linkedin" href="https://www.linkedin.com/in/daniel-olivieri-206141106/"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
