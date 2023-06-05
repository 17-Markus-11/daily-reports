import style from "./Report.module.css";
import { Component, ReactNode } from "react";
import { ReportItem } from "./ReportItem";
import Report from "./Report";
import { getLocaleDateString, getTodaysLocaleDateString, getTodaysTimestamp } from "../../utils/time-utils";

type Props = {
    items: Array<ReportItem>
    getReports: () => void,
    editReport: (id: string, report: ReportItem) => void
}

class Reports extends Component<Props> {
    defaultItem : ReportItem =  {
        id: "0",
        distance: 0,
        sports: 0,
        learning: 0,
        cooking: 0,
        wakeUp: 9*60,
        goToSleep: 0,
        money: 0,
        date: getTodaysTimestamp()
    }

    componentDidMount() {
        this.props.getReports();
    }

    isNeedToInsertTodaysReport = () => {
        if (this.props.items.length === 0) {
            return true;
        } else if (getLocaleDateString(this.props.items[0].date) !== getTodaysLocaleDateString()) {
            return true;
        }
        return false;
    }

    render(): ReactNode {
        return (
            <div className={style.container}>
                <h1>Daily Reports</h1>
                {
                    this.isNeedToInsertTodaysReport() &&
                        <Report key={getTodaysLocaleDateString()} item={this.defaultItem} onEdit={this.props.editReport} />
                }
                {
                    this.props.items.map(item => <Report key={item.date} item={item} onEdit={this.props.editReport} />)
                }
            </div>            
        );
    }
}

export default Reports;