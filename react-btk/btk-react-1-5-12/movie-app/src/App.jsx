import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const getAverage = (array) =>
  array.reduce((sum, value) => sum + value / array.length, 0);

const apiKey = "1382ce27ee4745ac3ddaef2cfa418452";

export default function App() {
  const [query, setQuery] = useState("fast");
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleSelectMovie(id) {
    setSelectedMovie(selectedMovie => id == selectedMovie ? null : id);
  }

  function handleUnselectMovie() {
    setSelectedMovie(null);
  }

  function handleAddToList(movie) {
    setSelectedMovies(selectedMovies => [...selectedMovies, movie]);
    handleUnselectMovie();
  }

  function handleDeleteFromList(id) {
    setSelectedMovies(selectedMovies => selectedMovies.filter(m => m.id !== id));
    handleUnselectMovie();
  }

  //useEffect runs at first render
  //useEffect runs when query changes
  useEffect(function () {
    async function getMovies() {
      try {

        if (query.length < 4) {
          setMovies([]);
          setError("");
          return;
        }

        setLoading(true);
        setError("");
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);

        if (!response.ok) {

        }

        const data = await response.json();

        if (data.results.length === 0) {
          setError("No movies found");
        }

        setMovies(data.results);
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [query]);

  return (
    <>
      <Nav>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NavSearchResults movies={movies} />
      </Nav>
      <Main>
        <div className="row mt-2">
          <div className="col-md-9">
            <ListContainer>
              {loading && <Loading />}
              {!loading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} selectedMovie={selectedMovie} />}
              {error && <ErrorMessage message={error} />}
            </ListContainer>
          </div>
          <div className="col-md-3">
            <ListContainer>

              {selectedMovie ?  
              <MovieDetails selectedMovie={selectedMovie} unSelectMovie={handleUnselectMovie} onAddToList={handleAddToList} selectedMovies={selectedMovies} /> : 
              ( <>
                <MyListSummary selectedMovies={selectedMovies} />
                <MyMovieList selectedMovies={selectedMovies} handleDeleteFromList={handleDeleteFromList} />
                </>
              )
              }
            </ListContainer>
          </div>
        </div>
      </Main>
    </>
  );
}

function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
}

function Loading() {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only"></span>
    </div>
  );
}

function Nav({ children }) {
  return (
    <nav className="bg-primary text-white p-2">
      <div className="container">
        <div className="row align-items-center">{children}</div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div className="col-4">
      <i className="bi bi-camera-reels me-2"></i>
      Movie App
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <div className="col-4">
      <input type="text" className="form-control" placeholder="Film ara..." value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
}

function NavSearchResults({ movies }) {
  return (
    <div className="col-4 text-end">
      <strong>{movies.length}</strong> kayıt bulundu.
    </div>
  );
}

function Main({ children }) {
  return <main className="container">{children}</main>;
}

function ListContainer({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="movie-list">
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setIsOpen((val) => !val)}
      >
        {isOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies, onSelectMovie, selectedMovie }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} onSelectMovie={onSelectMovie} selectedMovie={selectedMovie} />
      ))}
    </div>
  );
}

function MovieDetails({ selectedMovie, unSelectMovie, onAddToList, selectedMovies }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState(null);

  function handleAddToList() {
    const newMovie = {
      ...movie,
      userRating
    };
    onAddToList(newMovie);
  }

  useEffect(function () {
    async function getMovieDetails() {
      if (!selectedMovie) return;

      try {
        setLoading(true);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${apiKey}`);
        setMovie(await response.json());
      }
      catch (error) {
        console.error(error);
      }
      finally {
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [selectedMovie]);

  return (
    <>
      {loading ? <Loading /> :
        <div className="border p-2 mb-3">
          <div className="row">
            <div className="col-4">
              <img width="222" height="333" src={movie.poster_path ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}` : '/img/no-image.jpg'} alt={movie.Title} className="img-fluid rounded" />
            </div>
            <div className="col-8">
              <h5>{movie.title}</h5>
              <p>
                <i className="bi bi-calendar2-date me-1"></i>
                <span>{movie.release_date}</span>
              </p>
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.vote_average?.toFixed(2)}</span>
              </p>
            </div>
            <div className="col-12 border-top p-3 mt-3">
              <p>{movie.overview}</p>
              <p>{movie.genres?.map((genre) => (
                <span className="badge text-bg-primary me-1" key={genre.id}>{genre.name}</span>
              ))}</p>
            </div>
          </div>
          {(!selectedMovies.find(m => m.id === movie.id)) ? (
            <>
              <div className="mb-4">
                <StarRating maxRating={10} size={20} onRating={setUserRating} />
              </div>
              <button className="btn btn-sm btn-primary me-1" onClick={() => handleAddToList(movie)}>
                Listeye Ekle
              </button>
            </>
          ) : <p>Listeye Eklendi. Verilen Puan: {selectedMovies.find(m => m.id === movie.id)?.userRating ?? "-"} <i className="bi bi-stars text-warning me-1"></i></p>}
          <button className="btn btn-sm btn-outline-secondary" onClick={unSelectMovie}>
            Kapat
          </button>
        </div>
      }
    </>
  );
}

function Movie({ movie, onSelectMovie, selectedMovie }) {
  return (
    <div className="col mb-2">
      <div className={`card movie ${selectedMovie === movie.id && 'selected-movie'}`} onClick={() => onSelectMovie(movie.id)}>
        <img width="222" height="333" src={movie.poster_path ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}` : '/img/no-image.jpg'} alt={movie.title} className="card-img-top" />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div>
            <i className="bi bi-calendar2-date me-1"></i>
            <span>{movie.release_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyListSummary({ selectedMovies }) {
  const avgRating = getAverage(selectedMovies.map((m) => m.vote_average));
  const avgUserRating = getAverage(selectedMovies.map((m) => m.userRating || 0));
  const avgDuration = getAverage(selectedMovies.map((m) => m.runtime));
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>Listeye [{selectedMovies.length}] film eklendi.</h5>
        <div className="d-flex justify-content-between">
          <p>
            <i className="bi bi-star-fill text-warning me-1"></i>
            <span>{avgRating.toFixed(2)}</span>
          </p>
          <p>
            <i className="bi bi-stars text-warning me-1"></i>
            <span>{avgUserRating.toFixed(2)}</span>
          </p>
          <p>
            <i className="bi bi-hourglass-split text-warning me-1"></i>
            <span>{avgDuration.toFixed(2)} dk</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MyMovieList({ selectedMovies, handleDeleteFromList }) {
  return selectedMovies.map((movie) => (
    <MyListMovie movie={movie} key={movie.id} handleDeleteFromList={handleDeleteFromList} />
  ));
}

function MyListMovie({ movie, handleDeleteFromList }) {
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-4">
            <img width="222" height="333" src={movie.poster_path ? `https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}` : '/img/no-image.jpg'} alt={movie.Title} className="img-fluid rounded-start" />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.vote_average?.toFixed(2)}</span>
              </p>
              <p>
                <i className="bi bi-hourglass text-warning me-1"></i>
                <span>{movie.runtime} dk</span>
              </p>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => handleDeleteFromList(movie.id)}>
              Listeden Kaldır
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
