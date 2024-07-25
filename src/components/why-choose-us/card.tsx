"use client";

import { FC } from "react";

interface CardProps {
  width?: string;
  height?: string;
  iconComp: FC<{ className?: string }>;
  numbering: string;
  cardTitle: string;
  cardContent: string;
  [key: string]: any;
}

export const Card: FC<CardProps> = ({
  width = "250px",
  height = "300px",
  iconComp: IconComp,
  numbering,
  cardTitle,
  cardContent,
  ...props
}) => {
  return (
    <div
      className="border border-gray-500 rounded-lg p-3 shadow-md hover:border-b-5 hover:border-b-[#A97C25]"
      style={{ width, height }}
      {...props}
    >
      <div className="flex items-center justify-between flex-row pt-4">
        <IconComp className="h-16 w-16 justify-self-center text-[#2F4688]" />
        <span className="text-6xl font-bold text-gray-200 pr-2">
          {numbering}
        </span>
      </div>
      <div className="mt-4">
        <span className="text-lg font-bold tracking-wide mb-2 inline-block text-[#2F4688]">
          {cardTitle}
        </span>
        <p className="text-sm leading-loose tracking-wide">{cardContent}</p>
      </div>
    </div>
  );
};
