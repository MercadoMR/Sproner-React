import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NavBar extends Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Spreact!
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/songs"} className="nav-link">
                  Songs
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add+
                </Link>
              </li>
            </div>
          </nav>
        )
    }
}

class Home extends Component{

    componentDidMount(){
        console.log("Cambiando el stylo del index")
        document.getElementById('root').className = 'bg-dark text-white';
    }

    componentWillUnmount(){
        document.getElementById('root').className = 'bg-white text-dark';
    }

    render(){
        return(
        <main>
            <section className="py-5 text-center container min-vh-100">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="display-3 p-4">Spreact</h1>
                        <p className="lead p-0 m-0">A karaoke like webapp done with React.js.
                        You can add your favorite song's lyrics and the video associated with it.</p>
                        <p className="lead p-4">So you can sing while you listen to it!</p>
                        <p className="lead p-0 m-0">
                            <Link to={"/add"} className="btn btn-outline-light text-center">
                            <i className="fas fa-plus d-flex align-self-center p-1"></i>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </main>
        )
    }
} 

export {NavBar, Home};