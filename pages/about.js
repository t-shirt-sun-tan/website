import Layout from '../components/layout'
import styled from 'styled-components'

const About = () => (
<Layout>
  <Container>
    <H1>About</H1>
    <Main>
        <P>
            T Shirt Sun Tan 小林です。<br />
            この屋号はStereophonicsの曲名から付けました。
        </P>

        <H2>できること</H2>
        <P>
            
            ウェブアプリケーションの実装<br />
            PHP, Ruby, MySQL, Elasticsearch, Redis, memcache<br />
            HTML, CSS, Javascript(React)<br />
        </P>

        <H2>好きなこと</H2>
        <P>
            クラフトビール<br />
            穏やかな気持ちでいること<br />
            GTD<br />
            ランニング<br />
            瞑想
        </P>

        <H2>Contact</H2>
        <P>
            koji@t-shirt-sun-tan.co
        </P>
      </Main>
    </Container>
  </Layout>
)

const Container = styled.main`
  width: 640px;
  margin: 120px auto 0;
`
const Main = styled.div`
`

const H1 = styled.h1`
  font-family: azo-sans-web, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 2.4em;
  text-align: left;
  color: #1a1a1a;
`

const H2 = styled.h2`
  margin-top: 24px;
  font-family: azo-sans-web, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.6em;
  text-align: left;
  color: #1a1a1a;
`

const P = styled.p`
  margin-top: 12px;
  font-size: 1.2em;
  line-height: 1.6em;
`

export default About
