import { easyBank } from '../EB';
import { Bank } from './Bank';

export function EasyBank() {
  return (
    <main className="p-[1rem] bg-gray-200  desktop:p-[6.5rem] ">
      <div className="font-light mb-10 justify-center items-center desktop:text-justify desktop:w-1/2">
        <h1 className="mobile:text-[2.5rem] desktop:text-[2.85rem] mb-5">Why choose Easybank?</h1>
        <p className="text-gray-300 mobile:text-[1rem] desktop:text-[1.3rem]">
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>
      </div>
      <div className="grid place-items-center mobile:grid-flow-row md:grid-cols-2 desktop:grid-flow-col gap-10 ">
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
    </main>
  );
}
