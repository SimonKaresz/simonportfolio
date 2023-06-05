import Link from "next/link";
import Image from "next/image";

import { BsArrowReturnRight, BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <section className="w-full max-w-[95%] px-[20px] pt-[30px] md:pt-[120px] lg:px-[100px]">
      <div className="flex flex-col justify-center items-center xl:flex-row">
        <div className="basis-3/5 w-full flex justify-center items-start flex-col text-left mx-12">
          <h1 className="text-violet-900 drop-shadow-2xl mb-3 leading-tight">
            Welcome to my Portfolio Website!
          </h1>
          <h2 className="text-cyan-500 drop-shadow-2xl mb-3 leading-tight">
            My name is Károly Simon.
          </h2>
          <h3 className="text-sky-800 drop-shadow-2xl mb-3 leading-tight">
            I am a Frontend Developer.
          </h3>
          <div className="w-full mt-6 flex flex-col justify-center items-center sm:flex-row">
            <Link
              className="flex py-2 my-2 items-center justify-center w-[180px] text-lg mx-6 border-2 border-cyan-500 duration-300 ease-in-out shadow-xl shadow-neutral-900 hover:bg-cyan-500/30"
              href="/project"
            >
              <BsArrowReturnRight />
              <span className="ml-2">My Projects</span>
            </Link>
            <Link
              className="flex py-2 items-center justify-center w-[180px] text-lg mx-6 border-2 border-purple-500 duration-300 ease-in-out shadow-xl shadow-neutral-900 hover:bg-purple-500/30"
              target="_blank"
              href="https://github.com/SimonKaresz"
            >
              <BsGithub />
              <span className="ml-2">Github</span>
            </Link>
          </div>
        </div>
        <div className="my-12 basis-2/5 flex justify-center items-center">
          <Image
            className="rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg border-t border-l border-r-4 border-b-4 border-cyan-500 p-3 shadow-xl shadow-neutral-900 xl:rotate-6"
            src="/assets/images/profile.png"
            alt="profile_image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
