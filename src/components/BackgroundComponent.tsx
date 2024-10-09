export default function BackgroundComponent() {
  return (
    <div>
      <div className="flex flex-row h-screen">
        <div className="bg-black w-1/6 h-screen flex flex-col items-center justify-center"></div>
        <div className="bg-black w-5/6 h-screen flex flex-col">
          <div className="bg-black w-2/3 h-screen pt-52 px-4">
            <p className="font-Jost text-white text-lg whitespace-normal break-words">
              I'm a senior year Computer Engineering student in Eastern
              Mediterranean University Famagusta, Cyprus. I started coding at
              the age of 13. I started with{" "}
              <span className="text-red-600 inline-flex">Python 2.7.11</span>{" "}
              since it was the only Turkish tutorial video I could find on
              YouTube. I was doing my research in many fields of computer
              science to find what I was comfortable with. I followed lots of
              tutorials and eventually fell into the{" "}
              <span className="text-red-600 inline-flex">tutorial hell</span> at
              some point. During high school, I enrolled in a robotics course
              and was introduced to{" "}
              <span className="text-red-600 inline-flex">
                Arduino and the C Language
              </span>
              . During the 2020 pandemic, I started researching Machine Learning
              and Data Science. I did a project based on my university exam
              score, using data I had collected from past exams. The model was{" "}
              <span className="text-red-600 inline-flex">underfitting</span> due
              to insufficient data, but my prediction was still close to my
              actual exam score. At university, I was introduced to more
              hardware-related concepts. I took courses like{" "}
              <span className="text-red-600 inline-flex">
                Digital Logic Systems,
              </span>{" "}
              <span className="text-red-600 inline-flex">
                Electronics for Computer Engineers,
              </span>{" "}
              and{" "}
              <span className="text-red-600 inline-flex">
                Signals and Systems
              </span>{" "}
              which greatly expanded my perspective.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row h-screen">
        <div className="bg-black w-1/6 h-screen flex flex-col items-center justify-center"></div>
        <div className="bg-black w-5/6 h-screen flex flex-col px-4">
          <div className="bg-black w-2/3 h-screen flex flex-col">
            <p className="text-white text-4xl underline">
              <a href="https://www.basarsoft.com.tr/">Basarsoft</a>
            </p>
            <p className="text-white text-5xl">
              Full Stack Developer <span className="text-red-600">Intern</span>
            </p>
            <p className="text-white text-2xl">
              July <span className="text-red-600">2024</span> - September{" "}
              <span className="text-red-600">2024</span> ---- [Ankara, Turkey]
            </p>
            <p className="text-white text-lg my-4">
              I designed and coded a Full Stack Web Application using{" "}
              <span className="text-red-600 italic">C#</span>{" "}
              <span className="text-red-600 italic">.NET Web Api</span> for
              Backend part of the application using{" "}
              <span className="text-red-600 italic">Unit of Work</span> Pattern.
              I designed the Frontend part of the project using{" "}
              <span className="text-red-600 italic">HTML</span>,
              <span className="text-red-600 italic">CSS</span> and{" "}
              <span className="text-red-600 italic">Javascript</span> then
              migrated the project to{" "}
              <span className="text-red-600 italic">React</span>,{" "}
              <span className="text-red-600 italic">TypeScript</span>, and{" "}
              <span className="text-red-600 italic">Tailwind CSS </span>with the
              use of{" "}
              <span className="text-red-600 italic">shadcn UI Library</span>.
            </p>
          </div>

          <div className="bg-black w-2/3 h-screen flex flex-col">
            <p className="text-white text-4xl underline">
              <a href="https://www.spp42.com/">Spp42</a>
            </p>
            <p className="text-white text-5xl">
              Backend Developer <span className="text-red-600">Intern</span>
            </p>
            <p className="text-white text-2xl">
              August <span className="text-red-600">2023</span> - September{" "}
              <span className="text-red-600">2023</span> ---- [Ankara, Turkey]
            </p>
            <p className="text-white text-lg mt-4 mb-6">
              Developed an admin console for assigning teachers to students,
              students to classes and homeworks to students for product{" "}
              <span className="text-red-600 underline">edu4mat</span>. Modified{" "}
              <span className="text-red-600 italic">HTML</span>,
              <span className="text-red-600 italic">CSS</span> and{" "}
              <span className="text-red-600 italic">Javascript</span> files for
              Responsive Design and used{" "}
              <span className="text-red-600 italic">Python</span> and{" "}
              <span className="text-red-600 italic">Flask</span> for the
              development of backend applications.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-screen">
        <div className="bg-black w-1/6 h-screen flex flex-col items-center justify-center"></div>
        <div className="bg-black w-5/6 h-screen flex flex-col px-4">
          <div className="bg-black w-2/3 h-screen flex flex-col">
            <p className="text-white text-4xl underline">
              Eastern Mediterranean University
            </p>
            <p className="text-white text-5xl">
              Teaching <span className="text-red-600">Assistant</span>
            </p>
            <p className="text-white text-2xl">
              April <span className="text-red-600">2023</span> -{" "}
              <span className="text-red-600">Now</span> ---- [Famagusta, Cyprus]
            </p>
            <p className="text-white text-lg mt-4 mb-6">
              Provided personalized tutoring for four students in Python, Data
              Structures (C), and Object-Oriented Programming (Java). Assisted
              with homework, offering clear explanations and practical examples
              to enhance problem-solving skills. Helped students prepare for
              exams by reviewing past questions, addressing doubts, and sharing
              study strategies to improve performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
