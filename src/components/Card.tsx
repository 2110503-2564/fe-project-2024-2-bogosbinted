'use client'
import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card ({ venueName, imgSrc }:{ venueName:string, imgSrc:string }) {

  return (
    <InteractiveCard contentName={venueName}>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image src={imgSrc}
          alt='Product Picture'
          fill={true}
          objectFit='object-cover rounded-t-lg'/>
      </div>
      <div className="w-full h-[30%] p-[10px]">
        <h2>{venueName}</h2>
      </div>
    </InteractiveCard>
  );
};