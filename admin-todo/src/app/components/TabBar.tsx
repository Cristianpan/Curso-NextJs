"use client";

import { setCookie } from "cookies-next";
import { useState } from "react";

interface TabBarProps {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({ tabOptions = [1,2,3,4], currentTab = 1 }: TabBarProps) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie('selectedTab', tab.toString())
  };

  return (
    <div className="grid w-full grid-cols-4 aspace-x-2 rounded-xl bg-gray-200 p-2">
      {tabOptions.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option.toString()}
            className="peer hidden"
            checked={selected === option}
            onChange={()=>{}}
          />
          <label
            onClick={() => onTabSelected(option)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
