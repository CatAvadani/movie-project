"use client";
import { MovieCategory } from "@/typings"; // Adjust the path as per your project structure
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Banner movies={movieData?.fetchNetflixOriginals} />
      {/* Row */}
      {/* Row */}
      {/* Row */}
    </main>
  );
};

export default Home;
