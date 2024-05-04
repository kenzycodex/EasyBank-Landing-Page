import { latestArticles } from '../EB';
import { Article } from './Article';

export function Articles() {
  return (
    <section className=" bg-gray-100 p-[1rem] desktop:p-[6.5rem] w-full ">
      <h1 className="text-[2rem] desktop:text-[2.85rem] font-light mb-10 text-center desktop:text-start">
        Latest Articles
      </h1>
      <div className="grid place-items-center grid-flow-row md:grid-cols-2 desktop:grid-cols-4 gap-5">
        {latestArticles.map((article) => (
          <Article
            image={article.image}
            author={article.author}
            title={article.title}
            article={article.article}
            alt={article.alt}
            key={article.title}
          />
        ))}
      </div>
    </section>
  );
}
