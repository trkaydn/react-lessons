import { useState } from "react";
import Loading from "../Loading";
import StarRating from "../../StarRating";
import useMovieDetails from "../../hooks/useMovieDetails";

export default function MovieDetails({ selectedMovie, unSelectMovie, onAddToList, selectedMovies }) {
  const [userRating, setUserRating] = useState(null);
  const { movie, loading } = useMovieDetails(selectedMovie);

  function handleAddToList() {
    const newMovie = {
      ...movie,
      userRating
    };
    onAddToList(newMovie);
  }

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