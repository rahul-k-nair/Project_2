import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink className="nav-link" exact to="/" activeClassName=""></NavLink>
    <a className="navbar-brand" href="#">Logo</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto ">
        <li className="nav-item">
        <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" exact to="/aboutus" activeClassName="active">About us</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" exact to="/signin" activeClassName="active">Signin</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
    )
}

export default Header
