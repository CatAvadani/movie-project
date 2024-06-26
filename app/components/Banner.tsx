import { Movie } from '@/typings';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtom';
import { baseUrl } from '../constants/movie';

interface BannerProps {
  movies?: Movie[];
}

const Banner = ({ movies }: BannerProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

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
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 '>
      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
        <Image
          src={`${baseUrl}${movie?.backdrop_path}`}
          alt='random-movie-image'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <h1 className=' text-2xl md:text-4xl lg:text-7xl font-bold'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className=' max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
        {movie?.overview}
      </p>

      <div className='flex space-x-3'>
        <button className='bannerButton bg-white text-black'>
          <FaPlay className=' h-4 w-4 text-black md:h7 md:w-7' />
          Play
        </button>
        <button
          className='bannerButton
          bg-[gray]/70'
          onClick={() => {
            setCurrentMovie(movie);
            setShowModal(true);
          }}
        >
          More Info
          <InformationCircleIcon className=' h-5 w-5 md:h-8 md:w-8' />
        </button>
      </div>
    </div>
  );
};

export default Banner;
