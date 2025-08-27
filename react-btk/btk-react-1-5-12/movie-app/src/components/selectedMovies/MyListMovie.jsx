export default function MyListMovie({ movie, handleDeleteFromList }) {
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