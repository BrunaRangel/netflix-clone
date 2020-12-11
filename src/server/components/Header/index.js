import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../img/logo2.png'
import icon from '../../img/icon-user.png'

const Header = styled.div`
  width: 100%;
  height: 15vh;
  border-bottom: 1px solid #FFFFFF;
  margin-bottom: 2rem;
  display: flex;
  background-color: #000000;
  `;

const Box_logo = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 20px;
`;

const Logo = styled.img`
  height: 45%;
`;

const Box_panel = styled.div`
  width: 70%;
  height:100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 25vw;
`;

const Title_panel = styled.a`
  color: #FFFFFF;
  font-size: 1.5rem;
  text-decoration: none;
`;

const Box_icon = styled.div`
width: 15%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

`;

const Icon = styled.img`
width: 25%;
`;

class Headerr extends Component {

  render() {
    return (
        <Header>
          <Box_logo>  
            <Logo  src={logo} alt="" />
          </Box_logo>   
          <Box_panel>
            <Title_panel href="" >Filmes</Title_panel>
            <Title_panel href="" >Séries</Title_panel>
            <Title_panel href="" >Minha lista</Title_panel>
          </Box_panel>  
          <Box_icon>
            <Icon src={icon} alt="" />
          </Box_icon>   
        </Header> 
    );
  }
}

export default Headerr; 
