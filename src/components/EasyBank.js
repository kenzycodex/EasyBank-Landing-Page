import { easyBank } from '../EB';
import { Bank } from './Bank';

export function EasyBank() {
  return (
    <section className="p-[1rem] bg-gray-200 desktop:p-[6.5rem] text-center">
      <div className="font-light mb-10 justify-center items-center desktop:text-justify desktop:w-1/2">
        <h1 className="text-[3rem] mobile:text-[4rem] desktop:text-[2.85rem] mb-5">
          Why choose Easybank?
        </h1>
        <p className="text-gray-300 text-[1rem] mobile:text-[1.5rem] md:text-[1.8rem] desktop:text-[1.3rem]">
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>
      </div>
      <div className="grid place-items-center grid-flow-row md:grid-cols-2 desktop:grid-cols-4 gap-5">
        {easyBank.map((bank) => (
          <Bank
            image={bank.image}
            title={bank.title}
            text={bank.text}
            alt={bank.alt}
            key={bank.title}
          />
        ))}
      </div>
    </section>
  );
}
