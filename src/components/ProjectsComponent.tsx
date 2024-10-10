import { useState } from "react";

export default function ProjectsComponent() {
  const [activeType, setActiveType] = useState("beginner");
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow"></div>
      <div className="flex flex-row">
        <div className="bg-black w-1/6"></div>
        <div className="bg-black w-5/6 flex flex-row justify-end">
          <div className="flex flex-row justify-end w-full">
            <div className="bg-black w-1/3">
              <ul className="flex flex-col pt-[230px] items-start pl-4 text-white font-SourceCodePro">
                <li>
                  <button
                    className={`inline-block rounded-t-lg ${
                      activeType === "beginner" ? "text-white" : "text-gray-400"
                    }`}
                    onClick={() => setActiveType("beginner")}
                    type="button"
                    role="tab"
                  >
                    Beginner
                  </button>
                </li>
                <li>
                  <button
                    className={`inline-block rounded-t-lg ${
                      activeType === "intermediate"
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                    onClick={() => setActiveType("intermediate")}
                    type="button"
                    role="tab"
                  >
                    Intermediate
                  </button>
                </li>
                <li>
                  <button
                    className={`inline-block rounded-t-lg ${
                      activeType === "advanced" ? "text-white" : "text-gray-400"
                    }`}
                    onClick={() => setActiveType("advanced")}
                    type="button"
                    role="tab"
                  >
                    Advanced
                  </button>
                </li>
              </ul>
            </div>
            <div className="bg-black w-2/3 flex flex-row">
              <div className="w-1/2 pl-4">
                <div className="flex flex-col space-y-8 py-64">
                  {activeType === "beginner" && (
                    <div className="mb-96">
                      <div className="bg-black font-Jost text-right my-4">
                        <p className="text-white text-4xl underline text-right">
                          <a href="https://github.com/SerhatKaraman0/online-lecture-automation">
                            Online Lecture Automation Tool
                          </a>
                        </p>
                        <p className="text-gray-300 text-2xl py-1 text-right">
                          2023
                        </p>
                        <p className="text-gray-500 text-right text-lg">
                          This is a automation tool built with Python's
                          PyAutoGui library. To automate joining online lectures
                          I had couple of years ago. It simply logins to the
                          student portal finds link to the lecture and joins.
                        </p>
                      </div>
                      <div className="bg-black font-Jost text-right my-4">
                        <p className="text-white text-4xl underline text-right">
                          <a href="https://github.com/SerhatKaraman0/Wordle-Solver-Turkish-English">
                            Wordle Solver For Turkish And English
                          </a>
                        </p>
                        <p className="text-gray-300 text-2xl py-1 text-right">
                          2022
                        </p>
                        <p className="text-gray-500 text-right text-lg">
                          This is a CLI tool built with Python. It suggest a
                          first word to start with then you enter the result of
                          the word you give. It keeps suggesting words until it
                          finds. But it always finds the word in less then 6
                          attempts.
                        </p>
                      </div>

                      <div className="bg-black font-Jost text-right my-4">
                        <p className="text-white text-4xl underline text-right">
                          <a href="https://github.com/SerhatKaraman0/noteFromScreenshot">
                            NoteFromScreenshot
                          </a>
                        </p>
                        <p className="text-gray-300 text-2xl py-1 text-right">
                          2022
                        </p>
                        <p className="text-gray-500 text-right text-lg">
                          This one is a tool i built using OpenCv, PyTesseract
                          libraries using Python specially for a open book
                          History Exam. I took the screenshots from the video
                          lectures. Then when i feed them into this tool it
                          gives as a .txt output. It wasn't working perfect but
                          enough for me.
                        </p>
                      </div>
                      <div className="bg-black font-Jost text-right my-4">
                        <p className="text-white text-4xl underline text-right">
                          <a href="https://github.com/SerhatKaraman0/boredApiWebApp">
                            BoredApiWebApp
                          </a>
                        </p>
                        <p className="text-gray-300 text-2xl py-1 text-right">
                          2022
                        </p>
                        <p className="text-gray-500 text-right text-lg">
                          This one is one of the first projects I deployed.
                          While doing that project I learned about CSS Grids and
                          HTML and Javascript.
                        </p>
                      </div>
                    </div>
                  )}
                  {activeType === "intermediate" && (
                    <div>
                      <div className="bg-black font-Jost text-right my-4">
                        <p className="text-white text-4xl underline text-right">
                          <a href="https://github.com/SerhatKaraman0/car-database">
                            Car Complaints REST Api
                          </a>
                        </p>
                        <p className="text-gray-300 text-2xl py-1 text-right">
                          2024
                        </p>
                        <p className="text-gray-500 text-right text-lg">
                          This is a web scraper i built which scrapes through
                          all available url possible in{" "}
                          <a
                            href="https://www.carcomplaints.com"
                            className="underline"
                          >
                            carcomplaints.com
                          </a>{" "}
                          used axios and cheerio alongside Javascript.
                        </p>
                      </div>
                      <div className="bg-black font-Jost text-right my-4">
                        <p className="text-white text-4xl underline text-right">
                          <a href="https://github.com/SerhatKaraman0/leet-api">
                            Leet Api
                          </a>{" "}
                          &&{" "}
                          <a href="https://github.com/SerhatKaraman0/leet-hub">
                            LeetHub
                          </a>
                        </p>
                        <p className="text-gray-300 text-2xl py-1 text-right">
                          2022
                        </p>
                        <p className="text-gray-500 text-right text-lg">
                          I built this tool to track my leetcode problems. It's
                          for tracking all the questions you attempted and
                          additional info for each problem. Like the time you
                          wasted for the problem, how hard it was, which
                          techniques you used for the question etc. Then I built
                          Leethub for the same purpose. It's a web app where you
                          sign in and see the things you did visually with
                          leet-api. I used Flask for LeetHub and click for CLI
                          and MongoDb as Database.
                        </p>
                      </div>
                    </div>
                  )}
                  {activeType === "advanced" && (
                    <div>
                      <div className="bg-black font-Jost text-right my-4">
                        <p className="text-white text-4xl underline text-right">
                          <a href="https://github.com/SerhatKaraman0/MapApplication">
                            MapApp
                          </a>
                        </p>
                        <p className="text-gray-300 text-2xl py-1 text-right">
                          2024
                        </p>
                        <p className="text-gray-500 text-right text-lg">
                          This is the project i did in my internship in
                          Basarsoft. I started this project using Html, Css and
                          Javascript then I migrated this application to React
                          with Tailwind Css. I used PostgreSql for Database and
                          C# and .Net Web Api for backend. I used Entity
                          Framework and used Unit of Work pattern.
                        </p>
                      </div>

                      <div className="bg-black font-Jost text-right my-4">
                        <p className="text-white text-4xl underline text-right">
                          <a href="https://github.com/SerhatKaraman0/CMPE312-PROJECT">
                            Meowie
                          </a>
                        </p>
                        <p className="text-gray-300 text-2xl py-1 text-right">
                          2024
                        </p>
                        <p className="text-gray-500 text-right text-lg mb-24">
                          This is a project which we did as a team of five. I
                          led my teammates in Backend and Frontend development
                          of the application. We used bunch of Api's and created
                          a Rest Api for our application. All the work is done
                          with Html, Css, Javascript and MySql for database.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-1/2 pl-4">
                {activeType == "beginner" && (
                  <div className="flex flex-col space-y-8 py-[275px]">
                    <p className="text-white text-3xl">Python, PyAutoGui</p>
                    <p className="text-white text-3xl pt-[210px]">Python</p>
                    <p className="text-white text-3xl pt-[235px]">
                      Python, PyTesseract, OpenCV
                    </p>
                    <p className="text-white text-3xl pt-[190px]">
                      HTML, CSS, Javascript
                    </p>
                    <p className="text-white text-3xl">
                      <a
                        href="https://remarkable-gumption-28d9f6.netlify.app/"
                        className="underline"
                      >
                        website link
                      </a>
                    </p>
                  </div>
                )}
                {activeType == "intermediate" && (
                  <div className="flex flex-col space-y-8 py-[275px]">
                    <p className="text-white text-3xl">
                      Javascript, Rest Api, Cheerio, Axios,{" "}
                      <span className="block">
                        <a
                          href="https://car-database-api.up.railway.app/"
                          className="underline"
                        >
                          Api Link
                        </a>
                      </span>
                    </p>
                    <p className="text-white text-3xl pt-[108px]">
                      Python, Flask, click, MongoDb
                    </p>
                  </div>
                )}
                {activeType == "advanced" && (
                  <div className="flex flex-col space-y-8 py-[275px]">
                    <p className="text-white text-3xl">
                      React, Tailwind Css, C#, .Net Web Api, PostgreSql{" "}
                      <span className="block">
                        <a
                          href="https://github.com/SerhatKaraman0/MapApplication"
                          className="underline"
                        >
                          Backend Code
                        </a>
                      </span>
                      <span className="block">
                        <a
                          href="https://github.com/SerhatKaraman0/MapAppReact"
                          className="underline"
                        >
                          Frontend Code
                        </a>
                      </span>
                    </p>
                    <iframe
                      width="200"
                      height="100"
                      src="https://www.youtube.com/embed/PQBo1M7sRv0"
                      title="basarsoft staj sunum"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    <p className="text-white text-3xl pt-[12px] mb-96">
                      Html, Css, Javascript, Mysql
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
