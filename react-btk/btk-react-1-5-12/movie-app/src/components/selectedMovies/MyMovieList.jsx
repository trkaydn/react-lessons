import MyListMovie from "./MyListMovie";

export default function MyMovieList({ selectedMovies, handleDeleteFromList }) {
  return selectedMovies.map((movie) => (
    <MyListMovie movie={movie} key={movie.id} handleDeleteFromList={handleDeleteFromList} />
  ));
}