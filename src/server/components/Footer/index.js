import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../img/logoVNW1.png'
import apple from '../../img/apple1.png'
import google from '../../img/google1.png'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import twitter from '../../img/twitter.svg'



const Container = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #000000;
  border-top: 1px solid #FFFFFF;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: space-around;
`;

const Box_logo = styled.div`
  width:33%;
  height:100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
  align-items: center;
`;

const Img = styled.img`
  height: 50%;
`;

const Icones = styled.div`
  width:25%;
  height: 100%;
  display: flex;
flex-direction: row;
align-items: center;

`;

const Image = styled.img`
width: 30px;
margin-right: 10px;
`;

const Box_store = styled.div`
  width: %;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
`;

const Img_store = styled.img`
  height: 50%;
  margin-right: 30px;
`;

class Footer extends Component {

  render() {
    return (
      <Container>
        <Box_logo>
          <Img src = {logo} alt="" />
        </Box_logo>
        <Icones>
          <Image src={facebook} alt="Logotipo do Facebook" />
          <Image src={instagram} alt="Logotipo do Instagram" />
          <Image src={twitter} alt="Logotipo do Twitter" />
        </Icones>
        <Box_store>
          <Img_store src = {apple} alt="" />
          <Img_store src = {google} alt="" />
        </Box_store>  
      </Container>
    );
  }
}

export default Footer;