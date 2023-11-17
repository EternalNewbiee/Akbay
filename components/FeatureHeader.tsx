import React from "react";

const FeatureHeader: React.FC<{
  date: string;
  month: string;
  title: string;
  time: string;
  location: string;
}> = ({ date, month, title, time, location }) => {
  return (
    <div className="flex">
      <div className="bg-white self-start text-black text-center p-2 rounded-sm min-h-full">
        <p className="font-bold text-3xl text-orange-600">{date}</p>
        <p className="text-2xl ">{month}</p>
      </div>
      <div className="text-white ml-4 p-2">
        <p className="font-bold text-2xl">{title}</p>
        <div className="flex text-sm py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="rgb(234 88 12)"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="ml-2 mr-4 text-base">{time}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="rgb(234 88 12)"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="ml-2 text-base">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureHeader;
