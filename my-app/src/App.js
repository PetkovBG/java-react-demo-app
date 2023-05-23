import './App.css';
import api from './api/axiosConfig';

import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([])

  const getMovies = async () => {

    try {
      const response = await api.get('/api/v1/movies');

      console.log("Try", response.data);

      setMovies(response.data);
    } catch (err) {
      console.log("There is an error");
      console.log(err);
    }

  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`)

      const singleMovie = response.data;
      // console.log("singleMovie", singleMovie.reviewIds);
      setMovie(singleMovie);

      setReviews(singleMovie.reviewIds);

    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  console.log("Main", movies);

  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route path="/" element={<Home movies={movies} />} />
      <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
      <Route path="/Reviews/:movieId" element={<Reviews 
      getMovieData={getMovieData} 
      reviews={reviews}
      movie={movie}
      setReviews={setReviews}
      />}></Route>
      </Route>
    </Routes>

    </div>
  );
}

export default App;
