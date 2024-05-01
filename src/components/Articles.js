import { latestArticles } from '../EB';
import { Article } from './Article';

export function Articles() {
  return (
    <aside className=" bg-gray-100 mobile:p-[1rem] desktop:p-[6.5rem] w-full ">
      <h1 className="mobile:text-[2rem] desktop:text-[2.85rem] font-light mb-10 desktop:text-start">
        Latest Articles
      </h1>
      <div className="flex flex-row justify-center items-center flex-wrap gap-[3rem]">
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
    </aside>
  );
}
