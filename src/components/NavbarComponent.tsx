import { useState, useEffect } from "react";

export default function NavbarComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTransform = () => {
    const startScroll = 100; // When to start transforming
    const endScroll = 300; // When to complete transformation
    const startPosition = 50; // Initial center position (%)
    const endPosition = 1; // Final left position (%)

    if (scrollPosition < startScroll)
      return {
        left: "50%",
        transform: "translateX(-50%)",
        text: "Serhat Karaman",
      };
    if (scrollPosition > endScroll)
      return {
        left: `${endPosition}%`,
        transform: "translateX(0)",
        text: "SeKa",
      };

    const progress = (scrollPosition - startScroll) / (endScroll - startScroll);
    const left = startPosition - (startPosition - endPosition) * progress;

    return {
      left: `${left}%`,
      transform: `translateX(${-50 + 50 * progress}%)`,
      text: progress > 0.5 ? "SeKa" : "Serhat Karaman",
    };
  };

  const { left, transform, text } = calculateTransform();

  return (
    <div>
      <div className="w-screen h-20 fixed justify-center text-center align-middle items-center">
        <h1
          className="font-RockSalt text-white text-5xl pt-16 underline transition-all duration-300 ease-out absolute"
          style={{
            left,
            transform,
          }}
        >
          {text}
        </h1>
      </div>
      <div className="bottom-0 right-0 fixed inline">
        <span className="font-Jost text-white underline font-sm">
          seka. 2024
        </span>
      </div>
    </div>
  );
}
