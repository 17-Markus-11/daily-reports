import { ReportItem } from "../components/report/ReportItem";
import Api from "./api-service";

const REPORT_SERVICE_ROUTE = "reports";

const reportService = {
    getReports(): Promise<Array<ReportItem>> {
        return Api.get<Array<ReportItem>>(`${REPORT_SERVICE_ROUTE}`).then(res => res.data.sort((a, b) => b.date - a.date));
    },

    editReport(id: string, report: ReportItem): Promise<ReportItem> {
        if (id === "0") {
            return Api.post<ReportItem>(`${REPORT_SERVICE_ROUTE}`, report).then(res => res.data);
        } else {
            return Api.put<ReportItem>(`${REPORT_SERVICE_ROUTE}/${id}`, report).then(res => res.data);
        }
    },
}

export default reportService;