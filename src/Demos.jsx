import * as React from "react";

export default function Demos() {
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-secondary">
      <div className="flex flex-col items-center gap-6">
        <p className="text-4xl text-main">Coconut Chickpea Curry</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WBmgamIXfWI?si=QCTEMHjnyPK2qIeQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>
  );
}
