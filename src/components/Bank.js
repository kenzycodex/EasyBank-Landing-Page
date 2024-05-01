export function Bank({ image, alt, title, text }) {
  return (
    <div className=" w-[20.4rem] flex gap-5 flex-col justify-center items-center desktop:items-start desktop:text-start cursor-default desktop:hover:-translate-y-5 transition-all duration-500 ease-out">
      <img src={image} alt={alt} className="" />
      <h2 className="text-[1.5rem]">{title}</h2>
      <p className="text-gray-300 text-[1.25rem]">{text}</p>
    </div>
  );
}
