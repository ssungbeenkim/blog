type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='p-4 text-center'>
      <h2 className='mb-2 hidden border-blue-400 text-lg font-bold sm:block sm:border-b-4'>
        Category
      </h2>
      <ul className='flex flex-wrap gap-4 text-sm sm:flex-col sm:gap-0 sm:text-base'>
        {categories.map((category) => (
          <li
            className={`cursor-pointer duration-300 ease-in-out hover:text-blue-400 ${
              category === selected && 'text-blue-500'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {`#${category}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
