import  {useDistributionMonthlyContext} from "@/contexes/distributionMonthlyContex"

function TxtArea() {
  const {cellValue} = useDistributionMonthlyContext()
  const {setNewCellValue} = useDistributionMonthlyContext()
  const {setCellValue} = useDistributionMonthlyContext()

  return (
    <div>
         <textarea
                 value={cellValue}
                onChange={(e) => {
                  setCellValue(e.target.value)
                  setNewCellValue(e.target.value)
                 
                }}
                onBlur={() => {
                  // Update the cell content and hide the textarea
                  // Example: updateData(rowIndex, key, valueParagraph);
                  //setShouldShowParagraph(false);
                }}
                rows={3} // Adjust for multi-line support
                autoFocus
                className="w-full bg-gray-100 border-solid border-2 border-secondary rounded-sm"
              />
    </div>
  )
}

export default TxtArea