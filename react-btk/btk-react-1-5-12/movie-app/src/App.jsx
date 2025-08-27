import { useState } from "react";
import useMovies from "./hooks/useMovies";
import useLocalStorage from "./hooks/useLocalStorage";
import Pagination from "./components/Pagination";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import Nav from "./components/navbar/Nav";
import Logo from "./components/navbar/Logo";
import Search from "./components/navbar/Search";
import NavSearchResults from "./components/navbar/NavSearchResults";
import Main from "./components/Main";
import ListContainer from "./components/ListContainer";
import MovieList from "./components/movies/MovieList";
import MovieDetails from "./components/movies/MovieDetails";
import MyListSummary from "./components/selectedMovies/MyListSummary";
import MyMovieList from "./components/selectedMovies/MyMovieList";

export default function App() {
  const [query, setQuery] = useState("father");
  const [selectedMovies, setSelectedMovies] = useLocalStorage([], "selectedMovies");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies, loading, error, currentPage, totalPages, total_results, nextPage, previousPage } = useMovies(query);

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

  return (
    <>
      <Nav>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NavSearchResults totalResults={total_results} />
      </Nav>
      <Main>
        <div className="row mt-2">
          <div className="col-md-9">
            <ListContainer>
              {loading && <Loading />}
              {!loading && !error &&
                <>
                  {movies.length > 0 &&
                    <>
                      <MovieList movies={movies} onSelectMovie={handleSelectMovie} selectedMovie={selectedMovie} />
                      <Pagination nextPage={nextPage} previousPage={previousPage} currentPage={currentPage} totalPages={totalPages} />
                    </>
                  }
                </>
              }
              {error && <ErrorMessage message={error} />}
            </ListContainer>
          </div>
          <div className="col-md-3">
            <ListContainer>

              {selectedMovie ?
                <MovieDetails selectedMovie={selectedMovie} unSelectMovie={handleUnselectMovie} onAddToList={handleAddToList} selectedMovies={selectedMovies} /> :
                (<>
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
