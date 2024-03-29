"use client";

import { Movie } from "@/typings";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import requests from "./utils/requests";
interface MovieCategory {
  results: Movie[];
}

interface MovieData {
  fetchNetflixOriginals?: MovieCategory;
  fetchTrending?: MovieCategory;
  fetchTopRated?: MovieCategory;
  fetchActionMovies?: MovieCategory;
  fetchComedyMovies?: MovieCategory;
  fetchHorrorMovies?: MovieCategory;
  fetchRomanceMovies?: MovieCategory;
  fetchDocumentaries?: MovieCategory;
}

const Home = () => {
  const [movieData, setMovieData] = useState<MovieData>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.all(
          Object.values(requests).map((endpoint) =>
            fetch(endpoint).then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
          )
        );

        const dataByKey = Object.keys(requests).reduce<MovieData>(
          (acc, key, index) => {
            acc[key as keyof MovieData] = data[index].results;
            return acc;
          },
          {}
        );

        setMovieData(dataByKey);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Banner />
      <section>
        {movieData.fetchNetflixOriginals &&
          movieData.fetchNetflixOriginals.map((movie: any) => (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <p>{movie.release_date}</p>

              {/* <Image
                width={100}
                height={100}
                src={movie.poster_path}
                alt='img'
              ></Image> */}
            </div>
          ))}
      </section>
    </main>
    // modal
  );
};
export default Home;
//     netflixOriginals,
//     trendingNow,
//     topRated,
//     actionMovies,
//     comedyMovies,
//     horrorMovies,
//     romanceMovies,
//     documentaries,
//   ] = await Promise.all([
//     fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
//     fetch(requests.fetchTrending).then((res) => res.json()),
//     fetch(requests.fetchTopRated).then((res) => res.json()),
//     fetch(requests.fetchActionMovies).then((res) => res.json()),
//     fetch(requests.fetchComedyMovies).then((res) => res.json()),
//     fetch(requests.fetchHorrorMovies).then((res) => res.json()),
//     fetch(requests.fetchRomanceMovies).then((res) => res.json()),
//     fetch(requests.fetchDocumentaries).then((res) => res.json()),
//   ]);

//   return {
//     props: {
//       netflixOriginals: netflixOriginals.results,
//       trendingNow: trendingNow.results,
//       topRated: topRated.results,
//       actionMovies: actionMovies.results,
//       comedyMovies: comedyMovies.results,
//       horrorMovies: horrorMovies.results,
//       romanceMovies: romanceMovies.results,
//       documentaries: documentaries.results,
//     },
//   };
// };
