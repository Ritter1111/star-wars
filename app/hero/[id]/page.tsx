import { getHero } from '@/app/api/heroes';
import GraphFlow from '@/components/graphFlow';

export default async function App({ params }: { params: { id: string } }) {
  const heroId = Number(params.id);
  const { heroFilms, name, id } = await getHero(heroId);
  return (
    <div>
      <div className="m-20">
        {' '}
        {name}
        {heroFilms.map((film) => film.title)}
        {/* {data.films.map((film) => {
          return <div key={film}>{film}</div>;
        })} */}
      </div>
      <GraphFlow name={name} heroFilms={heroFilms} heroId={id} />
    </div>
  );
}
