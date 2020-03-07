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
  <div className="container">
    <main>
      <Title>
        T-Shirt Sun Tan
      </Title>
    </main>
  </div>
)

const Title = styled.h1`
  font-family: azo-sans-web, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.5em;
  text-align: center;
  color: #1a1a1a;
` 

export default Home
