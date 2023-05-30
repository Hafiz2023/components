import Card from "./components/card";
import Link from "next/link";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <>
      <Image 
          src={"/pic.png"}
          width={300}
          height={100}
          alt="pic.png"
          />
          </>

      <h1>Hafiz Muhammad Adil</h1>
    </div>
  );
}
