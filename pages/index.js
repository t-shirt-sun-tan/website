import Layout from '../components/layout'
import styled from "styled-components";

if (typeof window !== `undefined`) {
  const WebFont = require('webfontloader');

  WebFont.load({
    typekit: {
      id: 'bgi2beu'
    }
  });
}

const Home = () => (
  <Layout>
    <Main>
      <Title>
        T-Shirt Sun Tan
      </Title>
    </Main>
  </Layout>
)

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: azo-sans-web, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3em;
  text-align: center;
  color: #1a1a1a;
` 

export default Home

