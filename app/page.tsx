import { ArrowDown, ArrowUp, Eye } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative h-[651px] flex items-center justify-center m-0 overflow-hidden">
      <div className="bg-[url('/banner.webp')] bg-center h-[100%] w-1/2 m-0"></div>
      <div className="h-full w-1/2 bg-black">
        <h1 className=" font-mono  py-5 text-green-400">
          {" "}
          === Build Process: Developer Career Compiler v1.0 === [INFO]
          Initializing Career Framework... Loading modules: education.h,
          motivation.h, coffee.h... Done. Setting up environment variables:
          $IMPOSTER_SYNDROME=OFF, $LEARNING_MODE=ON... Done. [INFO] Compiling
          Fundamentals... Compiling programming_basics.c... Done. Compiling
          data_structures.c... Done. Compiling algorithms.c... Done. Debugging
          recursive_function.c (stack overflow fixed)... Done. [INFO] Building
          Backend Knowledge Base... Compiling server_architecture.c... Done.
          Compiling database_management.c... Done. Compiling REST_API.c... Done.
          Compiling authentication_and_authorization.c... Done. Running test
          suite: basic_backend_tests... Passed. [INFO] Deploying to Job Market
          (Entry-Level)... Setting up profile on: LinkedIn, GitHub,
          StackOverflow... Done. Submitting resumes... Done. Handling
          HR_interview.c... Done. Debugging whiteboard_problem.c (null pointer
          fixed)... Done. [INFO] Upgrading Skills for Mid-Level Role... Learning
          Docker and Kubernetes... Done. Compiling microservices.c... Done.
          Optimizing queries in SQL... Done. Learning caching with Redis...
          Done. [INFO] Gaining Production Experience... Debugging legacy_code.c
          (nightmares logged)... Done. Writing unit_tests.c (coverage: 80%)...
          Deploying CI/CD pipeline... Done. Handling production_outage.c...
          Done. [INFO] Promoting to Senior Developer... Compiling
          leadership_skills.c... Done. Running mentoring_subordinates.c... Done.
          Designing system_architecture.c... Done. Implementing
          scale_infrastructure.c... Done. [INFO] Deploying to Management Track
          (Optional)... Debugging work_life_balance.c... Done. Compiling
          decision_making.c... Done. Submitting pull_request_to_retirement.c...
          Pending Review. === Build Completed Successfully === [INFO] Backend
          Developer Career has been built in ~20 years. [DEBUG] To run in Senior
          Developer mode: ./backend.exe --senior [WARNING] Be cautious with
          burnout() function; optimize regularly.
        </h1>
      </div>
      <Link
        href={"/blog"}
        className="dark:text-white dark:bg-black absolute top-0 px-3  left-1/2 -translate-x-1/2  bg-white h-full justify-center   bg-transparent flex flex-col text-center"
      >
        <span className="sr-only">Link to blog</span> <ArrowDown size={50} />
        <Eye size={50} />
        <span className="text-5xl font-terminal">F</span>
        <span className="text-5xl font-terminal">R</span>
        <span className="text-5xl font-terminal">E</span>
        <span className="text-5xl font-terminal">S</span>
        <span className="text-5xl font-terminal">H</span>
        <span className="text-5xl font-terminal">_</span>
        <span className="text-5xl font-terminal">D</span>
        <span className="text-5xl font-terminal">E</span>
        <span className="text-5xl font-terminal">V</span>
        <Eye size={50} />
        <ArrowUp size={50} />
      </Link>
    </section>
  );
}
