import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportExcel = (apiData, name) => {
  apiData = apiData.split("\n");

  let dataAoa = [];

  apiData.map((e) => {
    dataAoa.push(e.split(","));
  });

  const worksheet = XLSX.utils.aoa_to_sheet(dataAoa);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  const blob = new Blob([excelBuffer], {
    type: "application/octet-stream",
  });
  saveAs(blob, `${name}.xlsx`);
};
