"useclient"
import { IoMdCloseCircle } from "react-icons/io";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function CloseButton() {
   const { setShouldShowdevEditCell } = useDistributionMonthlyContext()
  return (
    <div>
      <button id="changeCell" className="w-4 ml-1" onClick={() => {
        setShouldShowdevEditCell(false);
        
      }}>
        <IoMdCloseCircle />
      </button>
    </div>
  );
}

export default CloseButton;
