"use client"
import React from 'react'
import DataTable from '@/components/distrubtionMonthlyComp/table/d_table'
import Title from '@/components/ui/title'
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";

function DataTableComponent() {
  const {  distTitle } = useDistributionMonthlyContext();
  return (
    <div className=" px-7 relative overflow-auto ">
      <div className='text-3xl text-white font-bold -top-10 '>
        <Title>{distTitle}</Title>
      </div>
        
        <DataTable  />
        
    </div>
  )
}

export default DataTableComponent