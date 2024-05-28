import Link from 'next/link';
import { IHeroe } from '@/types';

interface HeroListProps {
  heroes: IHeroe[];
}

const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  return (
    <>
      {heroes.map((el: IHeroe) => (
        <Link
          href={`hero/${el.id}`}
          key={el.id}
          className="transition flex text-center bg-sectionBackground rounded-lg p-4 my-2 cursor-pointer hover:bg-hoverBackground"
        >
          {el.name}
        </Link>
      ))}
    </>
  );
};

export default HeroList;
