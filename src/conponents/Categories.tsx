import { link } from 'fs';

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='p-4 text-center'>
      <h2 className='mb-2 border-b-4 border-blue-400 text-lg font-bold'>
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer duration-300 ease-in-out hover:text-blue-400 ${
              category === selected && 'text-blue-500'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
