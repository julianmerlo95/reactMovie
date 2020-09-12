import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Loading } from '../components/util/loading/Loading';
const Footer = lazy(() => import("../components/footer/Footer"));
const Content = lazy(() => import("../components/content/Content"));
const RenderContent = lazy(() =>
import("../components/content/renderContent/RenderContent")
);

function App() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/content" component={RenderContent} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
