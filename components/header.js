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
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 24px;
  right: 12px;
  width: 60px;
  a {
    display: block;
    color: #1a1a1a;
    line-height: 1.8em;
  }

  @media (min-width: 768px) {
    width: 160px;
  }
`

export default Header;