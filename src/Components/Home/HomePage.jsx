import "./home.css";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import $ from 'jquery';
import NavBar from "../NavBar/NavBar";
class HomePage extends Component 
{
  componentDidMount()
  {
    
  }
  render()
  {
    if (localStorage.getItem("token")) 
    return (
      <body class="welcome">
      <span id="splash-overlay" class="splash"></span>
      <span id="welcome" class="z-depth-4"></span>
      <header class="navbar-fixed">
        <nav class="row deep-purple darken-3">
          <div class="col s12">
            <ul class="right">
              <li class="right">
                <a href="" target="_blank" class="fa fa-facebook-square fa-2x waves-effect waves-light"><span class="icon-text"></span></a>
              </li>
              <li class="right">
                <a href="" target="_blank" class="fa fa-github-square fa-2x waves-effect waves-light"><span class="icon-text"></span></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    
      <main class="valign-wrapper">
        <span class="container grey-text text-lighten-1 ">
    
          <p class="flow-text">Welcome back</p>
          <h1 class="title grey-text text-lighten-3">{localStorage.getItem("username")}</h1>    
        </span>
      </main>
    
      
    
     
    </body>
    );
    else return window.location.href = "/login";
  }
};

export default HomePage;
