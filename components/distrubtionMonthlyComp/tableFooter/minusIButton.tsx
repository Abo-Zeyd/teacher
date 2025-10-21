'use client'
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";
import { FaMinus } from 'react-icons/fa'

function MinusButton() {
  const { setEndtWeek, distMonthly, setdistMonthly } = useDistributionMonthlyContext();
  return (
    <div>
        <FaMinus
            className="cursor-pointer text-1xl "
            onClick={() =>{
                distMonthly.pop();
                setEndtWeek(prevEndtWeek => prevEndtWeek - 1);
                setdistMonthly([...distMonthly]);
              
            }}
          />
    </div>
  )
}

export default MinusButton