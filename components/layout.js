import Header from './header';

import styled from 'styled-components'
import { Reset } from 'styled-reset'

const Layout = (props) => (
  <Container>
    <Reset />
    <Header />
    {props.children}
  </Container>
)

const Container = styled.div`
  max-width: 800px;
  margin: auto;
`

export default Layout