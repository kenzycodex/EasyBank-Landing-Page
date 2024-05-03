export function Bank({ image, alt, title, text }) {
  return (
    <div className="flex gap-5 flex-col justify-center items-center desktop:items-start desktop:text-start cursor-default  desktop:hover:-translate-y-5 transition-all duration-500 ease-in-out">
      <img src={image} alt={alt} className="" />
      <h2 className="text-[1.5rem]">{title}</h2>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}
