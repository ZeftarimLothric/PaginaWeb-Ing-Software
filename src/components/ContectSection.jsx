import React from "react";

export function ContentSection({
  title,
  content,
  subtitles,
  leftImage,
  rightImage,
}) {
  return (
    <section className="bg-gray-800 rounded-lg p-6 mb-8">
      <h2 className="text-[30px] font-bold text-white">{title}</h2>
      <div className="flex items-center space-x-4">
        {leftImage && (
          <div className="flex-shrink-0">
            <img
              src={leftImage}
              alt=""
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        )}
        <div className="flex-grow">
          <div className="text-gray-300">{content}</div>{" "}
          {/* Cambiar <p> a <div> */}
        </div>
        <div className="flex-grow">
          <div className="text-gray-300 font-bold">{subtitles}</div>{" "}
          {/* Cambiar <p> a <div> */}
        </div>
        {rightImage && (
          <div className="flex-shrink-0">
            <img
              src={rightImage}
              alt=""
              className="w-24 h-24 object-cover rounded"
            />
          </div>
        )}
      </div>
    </section>
  );
}
