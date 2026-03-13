// import React from "react";

const colors = ["bg-red-400", "bg-purple-500", "bg-yellow-300", "bg-blue-500"];

function Loader() {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {colors.map((color, i) => (
        <div
          key={i}
          className={`h-5 w-5 rounded-full ${color} animate-bounce`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}

export default Loader;
