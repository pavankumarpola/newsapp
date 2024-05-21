import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src='https://t4.ftcdn.net/jpg/00/23/48/31/360_F_23483174_R8zmSGNjZBeHko5NwwQmld2MZAxia1fr.jpg' width={'100'} height={'60'} class="d-inline-block align-top" alt=""></img>
    
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       <Link to="/general">Home</Link>
      </li>
      <li class="nav-item">
      <Link to="/business">Business</Link>
      </li>
      <li class="nav-item">
      <Link to="/entertainment">Entertainment</Link>
      </li>
      <li class="nav-item">
      <Link to="/general">General</Link>
      </li>
      <li class="nav-item">
      <Link to="/health">Health</Link>
      </li>
      <li class="nav-item">
      <Link to="/science">Science</Link>
      </li>
      <li class="nav-item">
      <Link to="/sports">Sports</Link>
      </li>
       <li class="nav-item">
       <Link to="/technology">Technology</Link>
      </li>
    </ul>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar;
