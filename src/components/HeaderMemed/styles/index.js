import styled from 'styled-components';

import Logo from './logo';
import Text from './text';
import Container from './container';
import MenuButton from './menuButton';

const Header = styled.header`
  position: relative;
`;

Header.Logo = Logo;
Header.Text = Text;
Header.Container = Container;
Header.MenuButton = MenuButton;

export default Header;
