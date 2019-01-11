import React from 'react'
import { NavLink } from 'react-router-dom'

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
          }}>
        <div className="navbar-brand">
        <NavLink
className="navbar-item"
to="/"
activeClassName="is-active"
>
            <img
              style={{
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                marginRight: 15
              }}
              src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAU3AAAAJGE1MzYxNzYzLTE1NTUtNDEyYi04MzRjLTgzZjNkOGU0MGIzNg.jpg"
              width="30px" alt="" />
            <span>bandaniel.com</span>
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
                <i className="fas fa-code"></i>
              </span>
              Blog
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
                <a className="navbar-item" href="http://mappingancienttexts.net/wp-content/uploads/2018/06/v6spw.html">
                  Mapping Ancient Texts
                </a>
                <a className="navbar-item" href="http://bandaniel.com/cyo.html">
                  Choose Your Own
                </a>
                <a className="navbar-item" href="http://bandaniel.com/projects/jabberwocky">
                  Jabberwocky
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
