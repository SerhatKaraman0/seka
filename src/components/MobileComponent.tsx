import React, { useState } from 'react';

const LuxuryBusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
      {/* Portrait mode container - centered */}
      <div className="relative w-[120vh] h-[40vh] max-w-[900px] max-h-[1000px]">
        {/* Rotation container for landscape orientation */}
        <div className="absolute top-1/2 left-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 w-full h-full">
          {/* Perspective wrapper */}
          <div 
            className="w-full h-full relative cursor-pointer"
            style={{ perspective: "1200px" }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Card Container */}
            <div 
              className="w-full h-full absolute transition-transform duration-700 ease-in-out"
              style={{ 
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front Side */}
              <div 
                className="w-full h-full absolute bg-white shadow-xl rounded-xl p-8"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div>
                  <h1 className="text-3xl font-serif text-gray-800">Patrick Bateman</h1>
                  <p className="text-xl text-gray-600">Vice President</p>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <p className="text-2xl text-gray-300">PIERCE & PIERCE</p>
                </div>
                
                <div className="absolute bottom-8">
                  <p className="text-lg text-gray-600">358 Exchange Place, New York</p>
                  <p className="text-lg text-gray-600">212 555 6342</p>
                </div>
              </div>

              {/* Back Side */}
              <div 
                className="w-full h-full absolute bg-gray-50 shadow-xl rounded-xl p-8"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-24 h-24 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-xl">P&P</span>
                  </div>
                  <p className="mt-6 text-gray-500 text-lg">MERGERS AND ACQUISITIONS</p>
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
