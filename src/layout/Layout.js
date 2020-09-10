import React from 'react'
import Movies from '../components/movies/Movies';
import Movie from "../components/movies/movie/Movie";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Layout(){
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/" component={Movies} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Layout
