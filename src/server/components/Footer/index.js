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

const Icones = styled.div`
  width:40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 30px;
  margin-right: 15px;
`;

const Box_logo = styled.div`
  width:20%;
  height:100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Img = styled.img`
  width: 25%;
`;

const Box_store = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
`;

const Img_store = styled.img`
  width: 30%;
  margin-right: 25px;
`;

class Footer extends Component {

  render() {
    return (
      <Container>
        <Icones>
          <Image src={facebook} alt="Logotipo do Facebook" />
          <Image src={instagram} alt="Logotipo do Instagram" />
          <Image src={twitter} alt="Logotipo do Twitter" />
        </Icones>
        <Box_logo>
          <Img src = {logo} alt="" />
        </Box_logo>
        <Box_store>
          <Img_store src = {apple} alt="" />
          <Img_store src = {google} alt="" />
        </Box_store>  
      </Container>
    );
  }
}

export default Footer;