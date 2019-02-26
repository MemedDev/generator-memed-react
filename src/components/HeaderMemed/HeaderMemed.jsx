import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MemedLogo from '../../assets/images/header/logo.png';
import Header from './styles';

class HeaderMemed extends React.Component { // eslint-disable-line react/prefer-stateless-function
  currenPageIs(url) {
    const { location: { pathname } } = this.props;
    return pathname === url;
  }

  render() {
    const { text } = this.props;
    return (
      <Header>

        <Header.Logo href="https://memed.com.br/" target="_blank" rel="noopener noreferrer">
          <img src={MemedLogo} alt="Memed Logo" />
        </Header.Logo>

        <Header.Container>
          <Header.Text> {text} </Header.Text>
        </Header.Container>

        <div className="align-center">
          <Link to="/">
            <Header.MenuButton active={this.currenPageIs('/')}> Home </Header.MenuButton>
          </Link>
          <Link to="/redux">
            <Header.MenuButton active={this.currenPageIs('/redux')}> Redux Exemplo </Header.MenuButton>
          </Link>
          <a
            href="https://bookstack.memed.com.br/books/engenharia-de-software-na-memed/page/reuni%C3%A3o-20022019---arquitetura-front-end-e-processos-de-trabalho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Header.MenuButton active="true"> Documentação </Header.MenuButton>
          </a>
        </div>
      </Header>
    );
  }
}

HeaderMemed.propTypes = {
  text: PropTypes.string,
  location: PropTypes.any.isRequired,
};

export default HeaderMemed;
