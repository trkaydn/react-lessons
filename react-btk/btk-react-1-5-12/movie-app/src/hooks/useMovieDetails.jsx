import { useEffect, useState } from "react";

const apiKey = "1382ce27ee4745ac3ddaef2cfa418452";

export default function useMovieDetails(id) {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(function () {
        async function getMovieDetails() {
            if (!id) return;

            try {
                setLoading(true);
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
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
    }, [id]);
    return { movie, loading };
}