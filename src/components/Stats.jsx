import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className={`flex justify-start flex-col sm:justify-center sm:flex-row sm:mb-20 mb-6 mt-4 ss:mt-0 gap-3`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start sm:justify-around items-center flex-row`}
        >
          <div className="flex flex-row items-center gap-3">
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
              {stat.title}
            </p>
          </div>
          {index === stats.length - 1 ? (
            <div />
          ) : (
            <div className={`hidden md:block h-5 w-1 bg-black-gradient`} />
          )}
        </div>
      ))}
    </section>
  );
};

export default Stats;
