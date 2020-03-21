import Link from 'next/link';
import styled from 'styled-components';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <Container>
    <TopLight>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </TopLight>
  </Container>
);

const Container = styled.div`
  max-width: 800px;
`

const TopLight = styled.div`
  position: absolute;
  top: 40px;
  right: 8px;
  a {
    color: #1a1a1a;
  }

  @media (min-width: 768px) {
  }
`

export default Header;