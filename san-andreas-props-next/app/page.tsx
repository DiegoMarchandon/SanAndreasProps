import Image from "next/image";
import Header from "../components/layout/Header";
import HomeSearch from "../components/home/HomeSearch";

export default function Home() {
  return (
    <div className="bg-orange-400 w-full h-screen flex flex-col items-center justify-center">
      <Header 
        headerClasses="mb-8"
      />
      <h1 className="text-white">San Andreas Properties (Home)</h1>
      <HomeSearch />
    </div>
  );
}
