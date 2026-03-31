import * as XLSX from "xlsx";

export const ReportBuilder = {
  buildHourlyReadingsWorkbook(rows: Record<string, unknown>[]) {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Hourly Readings");
    return XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
  }
};
