import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import AddSong from './components/AddSong-Component';
import SongsList from './components/SongsList-Component';

/* https://www.freecodecamp.org/espanol/news/npm-vs-npx-cual-es-la-diferencia/ 
  
 https://spring.io/guides/tutorials/react-and-spring-data-rest/
 https://bezkoder.com/react-crud-web-api/
 
 Deployment: 
 https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom
*/

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link className="navbar-brand">
            Music!
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

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/songs"]} component={SongsList} />
            <Route exact path="/add" component={AddSong} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
