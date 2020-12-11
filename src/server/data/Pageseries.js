import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Header from './server/data/Header'

const Container = styled.div`
  width: 100%;
  background-color: #000000;
  `;

const Title_series = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 4rem;
  color: #FFFFFF;
`;

const Container_series = styled.div`
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #000000;
  `;

const Box_title_image = styled.div`
  width: 20vw;
  background-color: #FFFFFF;
  margin: 10px;
  flex-direction: column;
`;

const Box_image = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Box_title = styled.div``;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #000000;
  display: flex;
  justify-content: center;
`;

const Overview = styled.div`
  font-size: 1rem;
  color: #000000;
  overflow: hidden;
`;


class Series extends Component {

  state={
    seriesList: []
  }

  async componentDidMount() {
    const responseShows = await axios.get(`${process.env.REACT_APP_API}/shows`)
    console.log(responseShows.data)

    this.setState({
      seriesList: responseShows.data
    });

    const shows = responseShows.data.map((item) => {
      return {
      
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
      };
    });
    console.log("shows", shows)

    this.setState({
      seriesList: shows
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <Title_series>Séries</Title_series>
        <Container_series>
          {this.state.seriesList.map((item,index) => (
          <Box_title_image key= {index}>
            <Box_image>
              <Image src={item.poster_path} alt="" />
            </Box_image>
          <Box_title>
          <Title>{item.title}</Title>
            <Overview>{item.overview}</Overview > 
            </Box_title>
            <div>
              <Image src={item.backdrop_path} alt="" />
            </div> 
          </Box_title_image>        
          ))}
        </Container_series>
      </Container>
    );
  }
}

 export default Series;