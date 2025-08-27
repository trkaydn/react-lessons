import { useEffect, useState } from "react";

const apiKey = "1382ce27ee4745ac3ddaef2cfa418452";

export default function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [total_results, setTotalResults] = useState(0);

    function nextPage() {
        setCurrentPage(currentPage => currentPage + 1);
    }

    function previousPage() {
        setCurrentPage(currentPage => currentPage - 1);
    }

    //useEffect runs at first render
    //useEffect runs when query changes
    useEffect(function () {

        const controller = new AbortController();
        const signal = controller.signal;

        async function getMovies(page) {
            try {

                if (query.length < 4) {
                    setMovies([]);
                    setError("");
                    return;
                }

                setLoading(true);
                setError("");
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`, { signal: signal });

                if (!response.ok) {

                }

                const data = await response.json();

                if (data.results.length === 0) {
                    setError("No movies found");
                }

                setMovies(data.results);
                setTotalPages(data.total_pages);
                setTotalResults(data.total_results);
            }
            catch (error) {
                if (error.name === "AbortError")
                    console.log("Fetch aborted");
                else
                    setError(error);
            }
            finally {
                setLoading(false);
            }
        }

        getMovies(currentPage);

        return () => {
            controller.abort();
        };

    }, [query, currentPage]);

    return { movies, loading, error, currentPage, totalPages, total_results, nextPage, previousPage };
}