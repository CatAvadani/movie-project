import { Movie } from "@/typings";
import Image from "next/image";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <div className='relative h-28 min-w-[250px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-260px] md:hover:scale-105'>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
        alt='movie-image'
        className='rounded-sm object-cover md:rounded'
        layout='fill'
      />
    </div>
  );
}
