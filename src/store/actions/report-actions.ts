import { Dispatch } from "@reduxjs/toolkit";
import { ReportItem } from "../../components/report/ReportItem";
import { AppActions, AppThunk } from "../redusers/redux-store";
import { SET_REPORTS_ACTION, UPDATE_REPORT_ACTION } from "../redusers/report-redusers";
import reportService from "../../services/report-service";

const actions = {
    updateReport: (report: ReportItem) => ({type: UPDATE_REPORT_ACTION, payload: report} as const),
    setReports: (reports: Array<ReportItem>) => ({type: SET_REPORTS_ACTION, payload: reports} as const),
}

export const getReports = (): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await reportService.getReports();
        dispatch(actions.setReports(data));
    }
}

export const editReport = (id: string, report: ReportItem): Thunk => {
    return async (dispatch: Dispatch) => {
        const data = await reportService.editReport(id, report);
        dispatch(actions.updateReport(data));
    }
}

export type ReportActions = AppActions<typeof actions>
type Thunk = AppThunk<ReportActions>