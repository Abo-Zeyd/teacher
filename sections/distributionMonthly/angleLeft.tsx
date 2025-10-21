'use client'
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function AngleLeft() {
  const { setShoweInfoSection } = useDistributionMonthlyContext();
  const { showeInfoSection } = useDistributionMonthlyContext();

  return (
    <div>
      <div className="mr-7 mt-5 border-solid border-2 border-accent bg-secondary w-min rounded-md">
        <FaAngleLeft
          className="cursor-pointer  "
          onClick={() => {
            setShoweInfoSection(!showeInfoSection);
          }}
          size={40}
          color="white"
        />
      </div>
    </div>
  );
}

export default AngleLeft;
