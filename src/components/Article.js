export function Article({ image, author, title, article, alt }) {
  return (
    <div className="w-full aspect-square mx-auto desktop:hover:scale-105 desktop:hover:shadow-xl transition-all duration-500 ease-out cursor-pointer">
      <img src={image} alt={alt} className="w-full aspect-square rounded-t-[1rem]" />

      <div className="flex flex-col justify-center items-start text-start bg-white p-7 gap-2">
        <p className="font-light text-[0.5rem] desktop:text-[0.7rem] text-gray-300">By {author}</p>
        <h2 className=" text-[0.9rem] desktop:text-[1rem] hover:text-green">{title}</h2>

        <p className="font-light text-[0.9rem] text-gray-300">{article}</p>
      </div>
    </div>
  );
}
