import { getHero, getHeroFilms, getHeroStarships } from '@/app/api/heroes';
import GraphFlow from '@/components/graphFlow';

export default async function App({ params }: { params: { id: string } }) {
  const heroId = Number(params.id);
  const { name, id } = await getHero(heroId);
  const heroFilms = await getHeroFilms(heroId);
  const heroStarships = await getHeroStarships(heroId);

  return <GraphFlow name={name} heroFilms={heroFilms.results} heroStarships={heroStarships.results} heroId={id} />;
}
