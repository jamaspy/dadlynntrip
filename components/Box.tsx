import React from "react";
interface IProps {
  date: string;
  event: string;
  xmas?: boolean;
  location?: string;
}
const Box = ({ date, event, xmas, location }: IProps) => {
  return (
    <div
      className={`border rounded-md flex flex-col p-2 hover:bg-slate-100 cursor-pointer shadow-sm ${
        xmas ? "bg-gray-100 bg-opacity-80" : "bg-white bg-opacity-70"
      } `}
    >
      <p className="text-sm font-bold mb-1">{date}</p>
      <p className="text-lg">{event}</p>
      <p className="text-sm italic">{location}</p>
    </div>
  );
};

export default Box;
