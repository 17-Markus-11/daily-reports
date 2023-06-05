import { connect } from "react-redux";
import Reports from "./Reports";
import { AppStore } from "../../store/redusers/redux-store";
import { ReportItem } from "./ReportItem";
import { editReport, getReports } from "../../store/actions/report-actions";

const mapState = (store: AppStore) => {
    return ({
        items: store.reportsData.reports
    });
}

export default connect(mapState, {getReports, editReport})(Reports);