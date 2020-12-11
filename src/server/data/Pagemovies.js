import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'


const Container = styled.div`
  width: 100%;
  background-color: #000000;
  `;

const Title_movies = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 4rem;
  color: #FFFFFF;
`;

const Container_movies = styled.div`
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


class ComponentMovies extends Component {

  state={
    netflixList: []
  }

  async componentDidMount() {
    const responseMovies = await axios.get(`${process.env.REACT_APP_API}/movies`)
    console.log(responseMovies.data)

    this.setState({
      netflixList: responseMovies.data
    });

    const movies = responseMovies.data.map((item) => {
      return {
      
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
      };
    });
    console.log("movies", movies)

    this.setState({
      netflixList: movies
    });
  };

  render() {
    return (
      <Container>
        <Title_movies>Filmes</Title_movies>
            <Container_movies>
              {this.state.netflixList.map((item,index) => (
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
            </Container_movies>
            <Title_movies>Séries</Title_movies>
      </Container>
    );
  }
}

export default ComponentMovies;
