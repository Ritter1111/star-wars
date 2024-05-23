import Image from 'next/image';
import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-sectionBackground flex flex-col my-10 py-10 pr-24 pl-10 relative rounded-xl">
      <div className="bg-logo absolute top-[-20px] w-24 h-20 left-[40%] bg-no-repeat bg-contain"></div>
      <h1 className="text-9xl font-extrabold uppercase flex flex-col leading-[54%] mt-10 mb-10  ">
        <span className="text-yellow">star</span>
        <span className="text-white ml-8">wars</span>
      </h1>
      <div>
        Welcome to the swapi, the <span className="text-yellow">Star Wars API!</span>
        <p>
          For more information just click on any <span className="text-yellow">Hero</span> below
        </p>
      </div>
      <Image src={'/img/yoda.png'} width={170} height={170} alt="Yoda" className="absolute bottom-0 right-0" />
    </div>
  );
}
