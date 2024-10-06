import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function MainPageComponent() {
  return (
    <div className="relative w-full h-full pt-28">
      <div className="flex justify-center w-full h-96">
        {/* First Div */}
        <div className="flex h-96 w-1/2 flex-col justify-center items-center">
          <div className="h-96 w-96 rounded-full bg-black"></div>
        </div>

        {/* Second Div */}
        <div className="flex h-96 w-1/2 justify-center items-center pt-14">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2023 - Present
              </time>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                Teaching Assistant
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Assisted students for Foundations of Computer Engineering,
                Programming Fundamentals and Data Structures and Algorithms
                Courses.
              </p>
              <ul className="flex space-x-2 justify-center items-center">
                <li className="inline">
                  <Avatar>
                    <AvatarImage src="https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1" />
                    <AvatarFallback>Py</AvatarFallback>
                  </Avatar>
                </li>
                <li className="inline">
                  <Avatar>
                    <AvatarImage src="https://w7.pngwing.com/pngs/724/306/png-transparent-c-logo-c-programming-language-icon-letter-c-blue-logo-computer-program-thumbnail.png" />
                    <AvatarFallback>C Language</AvatarFallback>
                  </Avatar>
                </li>
                <li className="inline">
                  <Avatar>
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4a0wm9KUkYAbWsRUC337k_jG14SBVeUSSg&s" />
                    <AvatarFallback>Java</AvatarFallback>
                  </Avatar>
                </li>
              </ul>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jul 2023 - Aug 2023
              </time>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                Backend Developer Intern -{" "}
                <a href="https://www.spp42.com/" className="text-red-600">
                  SPP42
                </a>
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Developed the necessary functions for Admin, Student and Teacher
                Control Panels, Implemented the necessary APIs for the project.
              </p>
              <ul className="flex space-x-2 justify-center items-center">
                <li className="inline">
                  <Avatar>
                    <AvatarImage src="https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1" />
                    <AvatarFallback>Py</AvatarFallback>
                  </Avatar>
                </li>
                <li className="inline">
                  <Avatar>
                    <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
                    <AvatarFallback>Javascript</AvatarFallback>
                  </Avatar>
                </li>
                <li className="inline">
                  <Badge variant="outline">Flask</Badge>
                </li>
                <li className="inline">
                  <Badge variant="outline">MongoDb</Badge>
                </li>
                <li className="inline">
                  <Badge variant="outline">S3 Buckets</Badge>
                </li>
                <li className="inline">
                  <Badge variant="outline">REST Apis</Badge>
                </li>
                <li className="inline">
                  <Badge variant="outline">GitLab</Badge>
                </li>
              </ul>
            </li>
            <li className="ms-4 mt-7">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Jul 2024 - Sept 2024
              </time>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                FullStack Developer Intern -{" "}
                <a
                  href="https://www.basarsoft.com.tr/"
                  className="text-red-600"
                >
                  Basarsoft
                </a>
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Developed an interactive map application that allows users to
                place and edit points, create and modify polygons, and assign
                names and descriptions to them.
              </p>
              <ul className="flex space-x-2 justify-center items-center">
                <li className="inline">
                  <Avatar>
                    <AvatarImage src="https://www.jetbrains.com/guide/assets/csharp-logo-265a149e.svg" />
                    <AvatarFallback>C#</AvatarFallback>
                  </Avatar>
                </li>
                <li className="inline">
                  <Avatar>
                    <AvatarImage src="https://www.datocms-assets.com/48401/1628645197-learn-typescript.png" />
                    <AvatarFallback>TypeScript</AvatarFallback>
                  </Avatar>
                </li>
                <li className="inline">
                  <Avatar>
                    <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
                    <AvatarFallback>Javascript</AvatarFallback>
                  </Avatar>
                </li>
                <li className="inline">
                  <Badge variant="outline">ASP.NET Web API</Badge>
                </li>
                <li className="inline">
                  <Badge variant="outline">React</Badge>
                </li>
                <li className="inline">
                  <Badge variant="outline">PostgreSQL</Badge>
                </li>
                <li className="inline">
                  <Badge variant="outline">HTML</Badge>
                </li>
                <li className="inline">
                  <Badge variant="outline">CSS</Badge>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
