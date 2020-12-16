import React, { Component } from 'react';
import axios from 'axios'
import './style.css'



class App extends Component {

  state={
    netflixList: [],
    seriesList: [],
  }

  async componentDidMount() {
    const responseMovies = await axios.get(`${process.env.REACT_APP_API}/movies`);
    const responseShows = await axios.get(`${process.env.REACT_APP_API}/shows`);
    

    this.setState({
      netflixList: responseMovies.data
    });

    this.setState({
      seriesList: responseShows.data
    });

    const movies = responseMovies.data.map((item) => {
      return {
      
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
      };
    });

    this.setState({
      netflixList: movies
    });

    const shows = responseShows.data.map((item) => {
      return {
      
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
      };
    });

    this.setState({
      seriesList: shows
    });
  };

  render() {
    return (
      <section className="container">
        <h2 className="title">Filmes</h2>
            <section className="container_movies">
              {this.state.netflixList.map((item,index) => (
                <div className="box_title_image" key= {index}>
                  <div className="box_image">
                    <img className="poster" src={item.poster_path} alt="item.original_title" />
                  </div>
                  <div className="wrap">
                    <div className="box_title">
                      <h2 className="titles">{item.title}</h2>
                      <p className="overview">{item.overview}</p> 
                      <p className="popularity">Popularidade: {item.popularity}</p>
                    </div>
                    <div className="box_info">
                      <p className="average">Nota: {item.vote_average}</p>
                      <p className="date">{item.release_date}</p>
                    </div>
                    <div className="btn">
                      <button>Assistir</button>
                    </div>
                  </div>
                </div>        
              ))}
            </section>
            <h2 className="title">Séries</h2>
            <section className="container_series">
              {this.state.seriesList.map((item,index) => (
                <div className="box_title_image" key= {index}>
                  <div className="box_image">
                    <img className="poster" src={item.poster_path} alt="item.original_name" />
                  </div>
                  <div className="wrap">
                    <div className="box_title">
                      <h2 className="titles">{item.name}</h2>
                      <p className="overview">{item.overview}</p> 
                      <p className="popularity">Popularidade: {item.popularity}</p>
                    </div>
                    <div className="box_info">
                      <p className="average">Nota: {item.vote_average}</p>
                      <p className="date">{item.first_air_date}</p>
                    </div>
                    <div className="btn">
                      <button>Assistir</button>
                    </div>  
                  </div>
                </div>        
              ))}
            </section>
      </section>
    );
  }
}

export default App;




  
