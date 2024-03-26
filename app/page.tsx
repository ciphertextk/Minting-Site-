import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen bg-red-500">

      {/**navbar div */}
      <div className="h-10 bg-blue-100">
        <h1>
          {"Kofi's Minting Site"}
        </h1>
      </div> 
      {/**center div */}
      <div>
        <p>
          The Minting Environment
        </p>
      </div>

      {/**footer div */}
      <div className="h-10 bg-blue-100">
        2002©️Kofi
      </div>
    </main>
  );
}
