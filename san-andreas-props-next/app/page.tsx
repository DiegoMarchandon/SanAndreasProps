import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-orange-400">
      <Header 
        mBottom="mb-8"
      />
      <h1>San Andreas Properties</h1>
    </div>
  );
}
