import React from 'react'
import PropTypes from 'prop-types'/*if you signify any protipy in the code for that you have to declare here*/


/* props are JS objects where data is passed from parent component 
to child component.Here app.js is the parent component */ 
export default function Header(props){
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        { props.searchBar? <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>:""}
        {/*this props.searchBar is adde to test boolean ...that 
        if it is true then show the form else dont show the form or show this:" " */}
      </div>
    </div>
  </nav>
  
  ) 
}
Header.defaultProps = {
  title: "Your title here"
}/* This basically will show by default if title is not given
....this is the work of defaultProps */

Header.propTypes = {
  title : PropTypes.string /* you are basically passing the type here*/
}