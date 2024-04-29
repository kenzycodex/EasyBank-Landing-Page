import { latestArticles } from '../EB';
import { Article } from './Article';

export function Articles() {
  return (
    <aside className="bg-gray-100 mobile:p-[1rem] desktop:p-36 w-full ">
      <h1 className="mobile:text-[2rem] desktop:text-[2.85rem] font-light mb-10 desktop:text-start">
        Latest Articles
      </h1>
      <div className="flex basis-full mobile:flex-col desktop:flex-row gap-6 justify-center items-center">
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
