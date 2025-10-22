import React from 'react'
import HeaderBar from '@/sections/distributionMonthly/headerBar'
import AngleLeft from '@/sections/distributionMonthly/angleLeft'
import InfoForm from '@/sections/distributionMonthly/infoForm'
import DataTable from '@/sections/distributionMonthly/dataTable'
import EditCell from '@/sections/distributionMonthly/editCell'
import TableFooter from '@/sections/distributionMonthly/tableFooter'
import {DistributionMonthlyContextProvider} from '@/contexes/distributionMonthlyContex'
import PrintComponent from "@/sections/distributionMonthly/printDistr";
import { PrintContextContext } from "@/components/distrubtionMonthlyComp/printDistrubtion/printContext";

function distrubtionMonthly() {
  return (
    <div>
      <DistributionMonthlyContextProvider>
        <PrintContextContext>
          <EditCell />
          
          <HeaderBar />
          <AngleLeft />
          <InfoForm />
          <DataTable />
          <TableFooter />
          <div className="ml-7 flex flex-row items-center justify-center mt-4 text-xl"><p>
            <strong>ملاحظة: </strong>بالنسبة للإدماج تم إنجاز التوزيعات ببرمجة أسبوع بعد محورين يتم تناول كل محور في نصف أسبوع
            </p></div>
          <PrintComponent />
          {/* <Test_Section /> for testing purpose */}
        </PrintContextContext>
      </DistributionMonthlyContextProvider>
    </div>
  )
}

export default distrubtionMonthly