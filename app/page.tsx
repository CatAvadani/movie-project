"use client";
import { MovieCategory } from "@/typings"; // Adjust the path as per your project structure
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./utils/requests";

const Home = () => {
  const [movieData, setMovieData] = useState<MovieCategory | undefined>(
    undefined
  );

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

        const dataByKey: MovieCategory = Object.keys(
          requests
        ).reduce<MovieCategory>((acc, key, index) => {
          acc[key as keyof MovieCategory] = data[index].results;
          return acc;
        }, {} as MovieCategory);

        setMovieData(dataByKey);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16 '>
        <Banner movies={movieData?.fetchNetflixOriginals} />
        <section>
          <Row title='Trending Now' movies={movieData?.fetchTrending} />
          <Row title='Top Rated' movies={movieData?.fetchTopRated} />
          <Row title='Action Thrillers' movies={movieData?.fetchActionMovies} />
          <Row title='Comedies' movies={movieData?.fetchComedyMovies} />
          <Row title='Scary Movies' movies={movieData?.fetchHorrorMovies} />
          <Row title='Romance Movies' movies={movieData?.fetchRomanceMovies} />
          <Row title='Documentaries' movies={movieData?.fetchDocumentaries} />
        </section>
      </main>
    </div>
  );
};

export default Home;
