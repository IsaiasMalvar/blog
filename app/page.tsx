import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MousePointerClickIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-screen relative bg-gray-50 overflow-hidden z-0">
      {Array.from({ length: 550 }).map((_, index) => {
        const randomTop = Math.floor(Math.random() * 100);
        const randomLeft = Math.floor(Math.random() * 100);
        const randomRotate = Math.random() * 30 - 15;
        const zIndex = index + 1;

        const titles = [
          "React Best Practices",
          "Understanding APIs",
          "Clean Code Principles",
          "DevOps Essentials",
          "Intro to Microservices",
          "Frontend vs Backend",
          "Agile Development",
          "Unit Testing Guide",
          "Docker for Beginners",
          "REST vs GraphQL",
        ];
        const descriptions = [
          "Learn to write maintainable React code.",
          "Explore API integration techniques.",
          "Write code that stands the test of time.",
          "Streamline deployment with DevOps.",
          "Build scalable microservices.",
          "Key differences between frontend and backend.",
          "Improve workflows with Agile methodologies.",
          "Ensure reliability with thorough testing.",
          "Containerize apps using Docker.",
          "Choose the right API style for your project.",
        ];

        const randomTitle = titles[index % titles.length];
        const randomDescription = descriptions[index % descriptions.length];

        return (
          <Card
            key={index}
            className="absolute w-[200px] p-4  shadow-md"
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              transform: `rotate(${randomRotate}deg)`,
              zIndex: zIndex,
            }}
          >
            <CardHeader>
              <CardTitle>{randomTitle}</CardTitle>
              <CardDescription>{randomDescription}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        );
      })}
      <Link
        href={"/blog"}
        className=" text-black absolute top-72 left-1/2 w-[2000px] -translate-x-1/2 z-[999] font-terminal  text-center flex justify-center  "
      >
        <Badge className="bg-black hover:bg-black dark:bg-white  w-[%] text-xl text-center flex flex-col items-center justify-center border-2 border-black relative p-6 gap-3  -rotate-45 shadow-md">
          <h1 className="font-mono text-xl md:text-5xl">FRRRRESH DEV BLOG!</h1>
          <MousePointerClickIcon size={50} />
        </Badge>
      </Link>
    </section>
  );
}
