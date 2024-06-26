import { Movie } from '@/typings';
import { DocumentData } from 'firebase/firestore';
import { atom } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: false,
});

export const movieState = atom<Movie | DocumentData | null>({
  key: 'MovieState',
  default: null,
});
