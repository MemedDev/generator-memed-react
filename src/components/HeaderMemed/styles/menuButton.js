import styled from 'styled-components';

const MenuButton = styled.button`
  font-size: 14px;
  margin: 1em;
  padding: 12px;
  border: 2px solid #59C5D8;
  border-radius: 4px;
  color: white;
  outline: none;
  min-width: 120px;
  font-weight: 400;
  cursor: pointer;
  color: ${({ active }) => (active ? 'white' : '#59C5D8')}
  background: ${({ active }) => (active ? '#59C5D8' : 'transparent')}

  &:active {
    color: white;
  }
`;

export default MenuButton;
