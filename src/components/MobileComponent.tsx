import { useState } from 'react';

const LuxuryBusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="relative w-screen h-[90vw] max-h-[2000px]">
        <div className="absolute top-10 left-1/2 origin-center -translate-x-1/2 -translate-y-1/2 rotate-90 w-full h-full">
          <div
            className=" h-full relative cursor-pointer"
            style={{ perspective: "1200px" }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div
              className="w-[80vh] h-full absolute transition-transform duration-700 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <div
                className="w-full h-full absolute bg-white shadow-xl p-8"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div>
                  <h1 className="text-4xl font-serif text-gray-800">
                    Serhat Karaman
                  </h1>
                  <p className="text-2xl text-gray-600">
                    Computer Engineering Student
                  </p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <p className="text-3xl text-gray-300">Tap Here</p>
                </div>

                <div className="absolute bottom-8">
                  <p className="text-xl text-gray-600">
                    Famagusta, Cyprus / Ankara, Turkey
                  </p>
                  <p className="underline text-xl text-gray-600">
                    <a href="mailto:serhatkaramanworkmail@gmail.com">
                      serhatkaramanworkmail@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="w-full h-full absolute bg-gray-50 shadow-xl p-8"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-32 h-32 border-2 border-gray-300 flex items-center justify-center overflow-hidden">
                    <img
                      src="me.jpg"
                      alt="Centered Square"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-8 text-gray-500 text-2xl">
                    <ul className="flex space-x-4">
                      <li>
                        <a
                          className="underline"
                          href="https://www.linkedin.com/in/serhatkaraman/"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline"
                          href="https://github.com/SerhatKaraman0"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline"
                          href="https://www.kaggle.com/serhatkaraman"
                        >
                          Kaggle
                        </a>
                      </li>
                      <li>
                        <a
                          href="SerhatKaraman_Resume_February_2025.pdf"
                          download
                          className="text-red-600 underline"
                        >
                          Resume
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryBusinessCard;