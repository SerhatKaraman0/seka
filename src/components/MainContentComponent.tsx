import { useState } from "react";

export default function MainContentComponent() {
  const [activeTab, setActiveTab] = useState("for-anyone");

  return (
    <div className="flex flex-row h-screen">
      {/* Red Sidebar */}
      <div className="bg-black w-1/6 h-screen flex items-center justify-start">
        <ul className="flex flex-col pl-4 fixed h-1/2 mt-4">
          <li className="font-SourceCodePro text-white">Intro</li>
          <li className="font-SourceCodePro text-white">Background</li>
          <li className="font-SourceCodePro text-white">Projects</li>
        </ul>
        <ul className="flex flex-col pl-4 fixed mt-4 bottom-4">
          <li className="font-SourceCodePro text-white">
            <a
              href="mailto:serhatkaramanworkmail@gmail.com"
              className="underline"
            >
              Mail me
            </a>
          </li>
          <li className="font-SourceCodePro text-white">
            <a
              href="https://www.linkedin.com/in/serhatkaraman/"
              className="underline"
            >
              Linkedin
            </a>
          </li>
          <li className="font-SourceCodePro text-white">
            <a href="https://github.com/SerhatKaraman0" className="underline">
              Github
            </a>
          </li>
          <li className="font-SourceCodePro text-white">
            <a
              href="https://www.kaggle.com/serhatkaraman"
              className="underline"
            >
              Kaggle
            </a>
          </li>
          <li className="font-SourceCodePro text-white">
            <a
              href="https://www.instagram.com/serhat___krmn/"
              className="underline"
            >
              Intagram
            </a>
          </li>
        </ul>
      </div>

      {/* Green Section with Centered Image and Text */}
      <div className="bg-black w-2/6 h-screen flex flex-col items-center justify-center">
        <img
          src="me.jpg"
          alt="Centered Square"
          className="w-64 h-64 border-2 border-white object-cover mb-1"
        />
        <p className="text-white text-m">
          <span className="block text-center font-Jost">Based in</span>
          <span className="text-center font-Jost">
            <span className="text-red-600">Ankara</span>, Turkey &&{" "}
            <span className="text-red-600">Famagusta</span>, Cyprus
          </span>
        </p>
      </div>

      {/* Blue Section for Tabs and Content */}
      <div className="bg-black w-3/6 h-screen flex flex-col items-center">
        {/* Tab Buttons */}
        <div className="mb-4 w-full mt-40 ">
          {" "}
          {/* Added mt-12 */}
          <ul
            className="flex flex-wrap justify-center items-center -mb-px text-sm font-medium text-center h-1/2"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === "for-anyone" ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("for-anyone")}
                type="button"
                role="tab"
              >
                For Anyone
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === "recruiters" ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("recruiters")}
                type="button"
                role="tab"
              >
                Recruiters
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === "developers" ? "text-white" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("developers")}
                type="button"
                role="tab"
              >
                Developers
              </button>
            </li>
          </ul>
        </div>

        {/* Content Sections */}
        <div className="p-4 rounded-lg bg-black dark:bg-gray-800 w-full">
          {activeTab === "for-anyone" && (
            <p className="font-Inter text-5xl text-white items-center justify-center text-center">
              Hey, I'm a computer engineering student who likes to build{" "}
              <span className="text-red-600">useful</span> things and values{" "}
              <span className="italic"> excellence</span> and{" "}
              <span className="italic">hard-work</span>
            </p>
          )}
          {activeTab === "recruiters" && (
            <p className="font-Inter text-5xl text-white items-center justify-center text-center">
              <span className="text-red-600"></span>
              <span className="italic"></span>I have completed two internships
              as <span className="text-red-600">Backend</span> and{" "}
              <span className="text-red-600">Full Stack</span> Developer. I am
              comfortable working with various areas as{" "}
              <span className="italic">Backend, Frontend</span> and also{" "}
              <span className="italic">Machine Learning</span> and here is my{" "}
              <a
                href="SerhatKaraman_Resume_February_2025.pdf"
                download
                className="text-red-600 underline"
              >
                resume
              </a>
            </p>
          )}
          {activeTab === "developers" && (
            <p className="font-Inter text-5xl text-white items-center justify-center text-center">
              I'd like to <span className="italic">collaborate</span> in any
              type of project. I am a{" "}
              <span className="italic">fast-learner</span> and I like to work
              with a group of people. Feel free to reach me from{" "}
              <span className="text-red-600 underline">
                <a href="mailto:serhatkaramanworkmail@gmail.com">here</a>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
