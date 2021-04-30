import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import AddSong from './components/AddSong-Component';
import SongsList from './components/SongsList-Component';
import Song from './components/Song-Component';
import {Home, NavBar} from './components/Home';

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
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path={["/","/home"]} >
              <Home />
          </Route>
          <Route exact path="/songs" component={SongsList} />
          <Route exact path="/add" component={AddSong} />
          <Route path="/songs/:id" component={Song} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
