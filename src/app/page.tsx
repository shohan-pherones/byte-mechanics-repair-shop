import Link from "next/link";

const App = () => {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            Byte Mechanics
            <br />
            Repair Shop
          </h1>
          <address>
            355 Olivia Lane
            <br />
            New York City, NY 11003
          </address>
          <p>Open Daily: 10am to 8pm</p>
          <Link href="tel:3556002312" className="hover:underline">
            355-600-2312
          </Link>
        </div>
      </main>
    </div>
  );
};

export default App;
