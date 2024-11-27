import React from "react";

type BackBlurProps = {
  count?: number;
};

const generateBlurElements = (count: number) => {
  return Array.from({ length: count }).map((_, index) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = Math.random() * 200 + 100;
    const opacity = Math.random() * 0.3 + 0.2;

    return (
      <div
        key={index}
        style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "rgba(255, 223, 0, 0.5)",
          borderRadius: "50%",
          filter: "blur(100px)",
          opacity,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    );
  });
};

const BackBlur: React.FC<BackBlurProps> = ({ count = 2 }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {generateBlurElements(count)}
    </div>
  );
};

export default BackBlur;
