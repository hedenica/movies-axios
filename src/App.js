import React, { useState, useEffect} from 'react';
import api from './api';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    api.get('batman').then(response => {
      setMovies(response.data)
    });
  },[])

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: 20, marginRight: 20}}>
      <h1 style={{width: '100%' }}>Listar os Filmes</h1>
      {movies.map(movie => (
        <li key={movie.show.id} style={{listStyle: 'none', width: 250}}>
          <h2 style={{textAlign: "left"}}>
            <strong>Título:</strong>
            {movie.show.name}
          </h2>
          <img src={movie.show.image.medium} alt="capa" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} />
        </li>
      ))}
    </div>
  )
}

export default App;
