import { bear } from "./assets";
import Navbar from "./navbar";

const Owner = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="h-screen bg-gray-200">
        <section className="flex justify-center">
          <div className="flex flex-col w-3/5 justify-center items-center">
            <h1 className="text-3xl font-bold my-5">Cheartsak - Group E</h1>
            <img
              src={bear}
              alt="Bear"
              className="object-cover w-full max-w-xl"
            />
            <h2 className="text-lg font-bold mt-5">Short Biography :</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              doloremque, quaerat quod debitis at qui saepe. Quae ratione ut
              quibusdam molestias, repellat asperiores iusto, ipsam, mollitia
              impedit assumenda quos? Voluptas.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
export default Owner;
