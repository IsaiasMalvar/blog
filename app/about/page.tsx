import Image from "next/image";

const About = (): React.ReactElement => {
  return (
    <div className="container max-w-4xl p-6 lg:py-10 px-5 mx-auto text-center">
      <h1 className="text-5xl">About me</h1>
      <div className="flex flex-col justify-center items-center mt-5 gap-6">
        <div className="w-auto h-auto rounded-full">
          <Image
            src={"/profile-pic.jpg"}
            alt="profile"
            className="object-contain rounded-full"
            width={200}
            height={200}
          />
        </div>
        <div className=" flex flex-col">
          <p className="text-white text-2xl">
            Hey there! My name is Isaias Malvar. After graduating in hospitality
            management, the most euphoric moments I experienced in my line of
            work were all related to connecting the dots with the variety of
            apps I needed to use. This is when I realised my true interest was
            for coding. Specialized in backend development with strong fullstack
            foundations, I use this blog to offer my fresh and admittedly naive
            perspectives and intrigues from all branches of software!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
