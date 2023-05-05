import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../layout/Footer/Footer';
import Home from '../Pages/Home';
import Main from '../layout/Main/Main';
import ApartementsPage from '../Pages/ApartementsPage';
import About from '../Pages/About';
import PageNotFound from '../Pages/PageNotFound';

const HeaderFooterLayout = () => {
  return (
    <Main>
      <Navbar />
      <Switch>
        <Route exact path="/kasa" component={Home} />
        <Route path="/kasa/:id" component={ApartementsPage} />
        <Route path="/kasa/about" component={About} />
        <Route path="*" /> // fallback route
      </Switch>
      <Footer />
    </Main>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HeaderFooterLayout} />
        <Route path="/kasa" component={HeaderFooterLayout} />
        <Route component={PageNotFound} /> // error route
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
