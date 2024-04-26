import { easyBank } from '../EB';
import { Bank } from './Bank';

export function EasyBank() {
  return (
    <main className="p-12 bg-gray-200  desktop:px-36 ">
      <div className="font-light mb-10 desktop:text-justify desktop:w-1/2">
        <h1 className="mobile:text-[2rem] desktop:text-[2.85rem] mb-5">Why choose Easybank?</h1>
        <p className="text-gray-300 mobile:text-[1rem] desktop:text-[1.2rem] ">
          We leverage Open Banking to turn your bank account into your financial hub. Control your
          finances like never before.
        </p>
      </div>
      <div className="flex basis-full flex-row justify-center items-center flex-wrap gap-6">
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
