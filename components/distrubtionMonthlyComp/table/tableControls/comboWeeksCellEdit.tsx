import ComWeeks from "@/components/ui/comboWeeks";
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function CmboWeeks({ condition }: { condition: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {/*  distributionMonthly, */ data } = useDistributionMonthlyContext();
  
  return (
    <div>
      {condition && (
        <div>
          <div
            className="absolute p-0 -left-1 top-2  bg-slate-400 border-2 border-gray-600 rounded-md hidden  group-hover:block 
                                  transition-opacity duration-200"
          >
            <ComWeeks compoTitle="" handleChange={() => {
            

            }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CmboWeeks;
