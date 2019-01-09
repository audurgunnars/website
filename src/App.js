import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './components/Button'

const StyledApp = styled.div``
const Head = styled.header`
  padding-top: 50px;
  text-align: center;
`
const Title = styled.h1`
  font-size: 28px;
  font-weight: normal;
  @media (min-width: 700px) {
    font-size: 40px;
  }
`
const Tagline = styled.h2`
  margin-top:10px;
  font-size: 20px;
  font-weight: normal;
  @media (min-width: 700px) {
    font-size: 24px;
  }
`
const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
`
const StyledText = styled.p`
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 10px;
  @media (min-width: 700px) {
    font-size: 20px;
  }
`
const Main = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`
const Item = styled.div`
  display: flex;
  max-width: 400px;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
`
const Action = styled.div`
  display: flex;
  @media (max-width:800px) {  
    justify-content: center;
  }
`
class App extends Component {
  render () {
    return (
      <StyledApp>
        <Head>
          <Title>Auður Gunnarsdóttir</Title>
          <Tagline>
            Javascript/React.js developer
          </Tagline>
        </Head>
        <Main>
          <Item>
            <StyledText>Berlin-based Mechanical Engineer that recently turned JavaScript/React.js developer. <br />
            Looking for my first position in the field.
            </StyledText>
            <StyledText>
            Send me an email audgunnars@gmail.com or find me on:
            </StyledText>
            <Action>
              <Button href='https://www.linkedin.com/in/au%C3%B0ur-gunnarsd%C3%B3ttir-5310a7164/'>LinkedIn</Button>
              <Button href='https://github.com/audurgunnars'>GitHub</Button>
            </Action>
          </Item>
          <Item>
            <StyledImage src='girlonatrain.png' />
          </Item>
        </Main>
      </StyledApp>
    )
  }
}

export default App
