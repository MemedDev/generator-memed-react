/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import HeaderMemed from '../../components/HeaderMemed';
import GlobalStyles from '../../styles';
import RoutersApp from '../../routes';

const mapStateToProps = ({ global: message }) => (message);
const App = ({ message }) => (
  <BrowserRouter>
    <>
      <GlobalStyles />
      <Helmet
        titleTemplate="Memed React/Redux Boilerplate"
        defaultTitle="Memed React/Redux Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <HeaderMemed text={message} />

      <main className="app-wraper">
        <RoutersApp />
      </main>
    </>
  </BrowserRouter>
);

App.propTypes = {
  message: PropTypes.string,
};

export default connect(mapStateToProps)(App);
