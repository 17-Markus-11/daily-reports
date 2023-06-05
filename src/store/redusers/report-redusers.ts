import { ReportItem } from "../../components/report/ReportItem";
import { ReportActions } from "../actions/report-actions";

export const UPDATE_REPORT_ACTION = "REGIONS/UPDATE_REPORT";
export const SET_REPORTS_ACTION = "REGIONS/SET_REPORTS";

let initialState = {
    reports: [] as Array<ReportItem>
};

const reportRedusers = (state = initialState, action: ReportActions): typeof initialState => {
    switch (action.type) {
        case SET_REPORTS_ACTION:
            return {...state, reports: action.payload};

        case UPDATE_REPORT_ACTION:
            if (state.reports.length === 0 || state.reports[0].date !== action.payload.date ) {
                return {...state, reports: [action.payload, ...state.reports]};
            } else {
                return {...state, reports: [action.payload, ...state.reports.filter(item => item.date !== action.payload.date)]};
            }

        default:
            return state;
    }
}

export default reportRedusers;