// Banner.tsx
import { Movie } from "@/typings"; // Adjust the path as per your project structure
import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";

interface BannerProps {
  movies?: Movie[];
}

const Banner = ({ movies }: BannerProps) => {
  console.log("movies", movies);

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    }
  }, [movies]);

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className='banner-container'>
      <Image
        src={`${baseUrl}${movie?.backdrop_path}`}
        alt='Banner'
        layout='fill'
        objectFit='cover'
      />
      <div className='banner-content'>
        <h1 className='banner-title'>{movie?.title || movie?.name}</h1>
        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>
        <h1 className='banner-description'>{movie?.overview}</h1>
      </div>
      <div className='banner-fadeBottom' />
    </div>
  );
};

export default Banner;
