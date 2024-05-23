import { API_URL } from '@/constants';
import { IHeroe, IHeroesData } from '@/types';
import axios from 'axios';

const instance = axios.create({
  baseURL: API_URL,
});

export async function getHeroes(page: number = 1): Promise<IHeroesData> {
  try {
    const res = await instance.get(`/people/?page=${page}`);
    return res.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
}

export async function getHero(id: number) {
  try {
    const heroData = await instance.get<IHeroe>(`/people/${id}`);
    const hero = heroData.data;

    const heroFilms = await Promise.all(
      hero.films.flatMap((filmId: number) => instance.get(`/films/${filmId}`).then((res) => res.data)),
    );
    return { ...hero, heroFilms };
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
}
