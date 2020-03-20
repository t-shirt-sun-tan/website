import Link from 'next/link';
import styled from 'styled-components';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <TopLight>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </TopLight>
);

const TopLight = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  width: 200px;
  height: 0;
`

export default Header;