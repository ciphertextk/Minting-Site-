'use client'

import Image from "next/image";
import { Login } from '@/components/login';

export default function Home() {

  

  return (
    <main className="flex flex-col justify-between h-screen bg-white-400">

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
      <div className="mt-6 flex justify-center text-center">
             <Login/>

              </div>

      {/**footer div */}
      <div className="h-10 bg-blue-100">
        2002©️Kofi
      </div>
    </main>
  );
}
