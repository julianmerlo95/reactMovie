import React from 'react'
import Content from '../components/content/Content';
import RenderContent from "../components/renderContent/RenderContent";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function Layout(){
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/content" component={RenderContent} />
          <Route exact path="/" component={Content} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Layout
