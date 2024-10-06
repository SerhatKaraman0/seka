import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ProjectsPageComponent() {
  return (
    <div className="relative w-full h-screen">
      {/* Header */}
      <div className="flex justify-center w-full pt-32">
        <h1 className="font-RockSalt text-4xl mt-8 mb-8">Projects</h1>
      </div>

      {/* Filters */}
      <div className="flex justify-center w-full h-16">
        <Select>
          <SelectTrigger className="w-[180px] mx-5">
            <SelectValue placeholder="Project Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="level_all">All</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Programming Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="project_all">All</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="react">React</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center w-full h-full">
        {/* First Card */}
        <div className="max-w-sm mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[500px]">
          {" "}
          {/* Added height */}
          <a href="#">
            <img
              className="rounded-t-lg h-[50%] w-full object-cover"
              src="https://motionarray.imgix.net/1744549-ylSMD9P1kd-high_0013.jpg?w=660&q=60&fit=max&auto=format"
              alt=""
            />
          </a>
          <div className="p-5 h-[50%]">
            {" "}
            {/* Adjust content height */}
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button variant="outline">See More</Button>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-sm mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[500px]">
          {" "}
          {/* Added height */}
          <a href="#">
            <img
              className="rounded-t-lg h-[50%] w-full object-cover"
              src="https://motionarray.imgix.net/1744549-ylSMD9P1kd-high_0013.jpg?w=660&q=60&fit=max&auto=format"
              alt=""
            />
          </a>
          <div className="p-5 h-[50%]">
            {" "}
            {/* Adjust content height */}
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button variant="outline">See More</Button>
          </div>
        </div>

        {/* Third Card */}
        <div className="max-w-sm mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[500px]">
          {" "}
          {/* Added height */}
          <a href="#">
            <img
              className="rounded-t-lg h-[50%] w-full object-cover"
              src="https://motionarray.imgix.net/1744549-ylSMD9P1kd-high_0013.jpg?w=660&q=60&fit=max&auto=format"
              alt=""
            />
          </a>
          <div className="p-5 h-[50%]">
            {" "}
            {/* Adjust content height */}
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Button variant="outline">See More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
