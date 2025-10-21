import PrintComponent from "@/sections/distributionMonthly/printDistr";
import { DistributionMonthlyContextProvider } from "@/contexes/distributionMonthlyContex";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <DistributionMonthlyContextProvider>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Link href="/pages/monthlyDistrubtion">1111</Link>
          <PrintComponent />
        </div>
      </DistributionMonthlyContextProvider>
    </div>
  );
}
