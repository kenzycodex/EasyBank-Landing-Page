export function Article({ image, author, title, article, alt }) {
  return (
    <div className="w-[20rem] bg-gray-100 desktop:hover:scale-105 desktop:hover:shadow-xl transition-all duration-500 ease-out cursor-pointer">
      <div className="w-full mx-auto">
        <img src={image} alt={alt} className="w-full aspect-square rounded-t-[0.9rem]" />

        <div className="flex basis-full flex-col justify-center items-start text-start bg-white p-7 gap-2">
          <p className="font-light text-[0.5rem] desktop:text-[0.9rem] text-gray-300">
            By {author}
          </p>
          <h2 className=" text-[0.9rem] desktop:text-[1.3rem] hover:text-green">{title}</h2>

          <p className="font-light text-[0.9rem] desktop:text-[1rem] text-gray-300">{article}</p>
        </div>
      </div>
    </div>
  );
}
