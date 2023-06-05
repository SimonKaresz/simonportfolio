import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  image,
  title,
  description,
  technology,
  code_link,
  view_link,
}) => {
  return (
    <div className="w-full flex-col flex bg-neutral-100/10 rounded-md backdrop-blur-[2px] shadow-lg shadow-black/70">
      <div>
        <Image
          src={image}
          alt="project_image"
          className="w-full rounded-t-md"
          width={400}
          height={400}
        />
      </div>
      <div className="pb-4 w-full text-center">
        <div className="w-full bg-neutral-200/20">
          <span className="text-lg font-semibold text-cyan-500">
            {technology.toUpperCase()}
          </span>
        </div>
        <h3 className="py-4">{title.toUpperCase()}</h3>
        <span className="font-thin italic px-1">{description}</span>
        <div className="mt-4">
          <Link
            className="mx-4 text-lg font-normal hover:text-teal-400"
            href={view_link}
            target="_blank"
          >
            View
          </Link>
          <Link
            className="mx-4 text-lg font-normal hover:text-purple-400"
            href={code_link}
            target="_blank"
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
