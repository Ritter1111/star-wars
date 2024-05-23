import { API_URL } from '@/constants';
import { IHeroesData } from '@/types';
import axios from 'axios';

const instance = axios.create({
  baseURL: API_URL,
});

export default async function getHeroes(page: number = 1): Promise<IHeroesData> {
  try {
    const res = await instance.get<IHeroesData>(`/people/?page=${page}`);
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
