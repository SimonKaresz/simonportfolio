import Form from "@components/Form";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaGoogleDrive,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full mx-auto pt-[10px] md:py-12 px-2 md:px-12">
      <div className="w-full mb-12">
        <h1>Contact Me!</h1>
        <Form />
      </div>

      <div className="w-full mb-12">
        <h1>My Links</h1>
        <div className="mt-10 w-[800px] max-w-full flex flex-col justify-between items-center sm:flex-row">
          <Link
            className="flex justify-center items-center py-4 text-4xl duration-300 ease-in-out text-gray-300 border-2 border-transparent w-full hover:border-cyan-500 hover:bg-cyan-800"
            href="https://www.facebook.com/karesz.simon/"
            target="_blank"
          >
            <FaFacebook />
            <span className="text-lg mx-3 font-thin">Facebook</span>
          </Link>
          <Link
            className="flex justify-center items-center py-4 text-4xl duration-300 ease-in-out text-gray-300 border-2 border-transparent w-full hover:border-cyan-500 hover:bg-cyan-800"
            href="https://www.linkedin.com/in/k%C3%A1roly-simon-5419a8247/"
            target="_blank"
          >
            <FaLinkedin />
            <span className="text-lg mx-3 font-thin">Linkedin</span>
          </Link>
          <Link
            className="flex justify-center items-center py-4 text-4xl duration-300 ease-in-out text-gray-300 border-2 border-transparent w-full hover:border-cyan-500 hover:bg-cyan-800"
            href="https://github.com/SimonKaresz"
            target="_blank"
          >
            <FaGithub />
            <span className="text-lg mx-3 font-thin">Github</span>
          </Link>
        </div>
      </div>
      <div className="w-full mb-12">
        <h1>My Resume</h1>

        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1mPk-3SCt-hEMxOYyuV60fHmJWhxnKVNm/view?usp=sharing"
            className="flex justify-center items-center py-4 text-2xl duration-300 ease-in-out text-gray-300 border-2 border-cyan-500 w-[500px] max-w-full hover:bg-cyan-800"
            target="_blank"
          >
            Download
            <FaGoogleDrive className="mx-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
