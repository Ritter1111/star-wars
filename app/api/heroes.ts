import { API_URL } from '@/constants';
import { IFilmData, IHeroe, IHeroesData, IStarshipData } from '@/types';
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

export async function getHero(heroId: number) {
  try {
    const heroData = await instance.get<IHeroe>(`/people/${heroId}`);
    const hero = heroData.data;

    return hero;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
}

export async function getHeroFilms(heroId: number): Promise<IFilmData> {
  try {
    const heroFilms = await instance.get<IFilmData>(`/films/?characters__contains=${heroId}`);
    const films = heroFilms.data;

    return films;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
}

export async function getHeroStarships(heroId: number): Promise<IStarshipData> {
  try {
    const starships = await instance.get<IStarshipData>(`/starships/?pilots__contains=${heroId}`);

    return starships.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
}
