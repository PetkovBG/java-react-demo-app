import './App.css';
import api from './api/axiosConfig';

import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';


function App() {

  const [movies, setMovies] = useState([]);

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
      </Route>
    </Routes>

    </div>
  );
}

export default App;
