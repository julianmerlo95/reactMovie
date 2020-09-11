import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Loading } from "../components/loading/Loading";
const Content = lazy(() => import("../components/content/Content"));
const RenderContent = lazy(() =>
  import("../components/content/renderContent/RenderContent")
);

function Layout() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/content" component={RenderContent} />
            <Route exact path="/" component={Content} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default Layout;
