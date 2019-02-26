import { createGlobalStyle } from 'styled-components';

const Layout = createGlobalStyle`
  body {
    font-family: 'Usual', Helvetica, Arial, sans-serif;
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  .app-wraper {
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    padding-top: 30px;
  }

  .align-center {
    text-align: center;
  }

  li {
    list-style: initial;
    text-align: left;
    padding: 5px;
    line-height: 24px;
  }
`;

export default Layout;
