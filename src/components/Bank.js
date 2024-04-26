export function Bank({ image, alt, title, text }) {
  return (
    <div className="w-[20rem] desktop:text-start space-y-5 cursor-default desktop:hover:-translate-y-5 transition-all duration-500 ease-out">
      <img src={image} alt={alt} className="mx-auto desktop:mx-0" />
      <h2 className="text-[1.5rem]">{title}</h2>
      <p className="text-gray-300 text-base">{text}</p>
    </div>
  );
}
