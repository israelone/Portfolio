import Image from "next/image";
import Navbar from "./components/navbar";
import MainIntro from "./components/mainIntro";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main>
          <div className="flex justify-center items-center  text-white p-4">
            <Navbar />
          </div>
          <MainIntro />
        </main>
        <Footer />
      </div>
    </>
  );
}
