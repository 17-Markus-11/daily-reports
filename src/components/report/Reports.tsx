import style from "./Report.module.css";
import { Component, ReactNode } from "react";
import { ReportItem } from "./ReportItem";
import Report from "./Report";
import { ReactComponent as Flower } from '../../svg/flower.svg';
import { ReactComponent as Star } from '../../svg/star.svg';
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
        date: getTodaysTimestamp(),
        arePenaltiesApply: true
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
                <Star className={style.icon} style={{top: 17, left: 35}}/>
                <Star className={style.icon} style={{top: 37, left: 176}}/>
                <Star className={style.icon} style={{top: 92, left: 91}}/>
                <Star className={style.icon} style={{top: 34, left: 675}}/>
                <Star className={style.icon} style={{top: 98, left: 615}}/>
                <Star className={style.icon} style={{top: 88, left: 745}}/>
                <Flower className={style.icon} style={{top: 70, left: 24}}/>
                <Flower className={style.icon} style={{top: 28, left: 105}}/>
                <Flower className={style.icon} style={{top: 101, left: 149}}/>
                <Flower className={style.icon} style={{top: 22, left: 740}}/>
                <Flower className={style.icon} style={{top: 25, left: 620}}/>
                <Flower className={style.icon} style={{top: 91, left: 675}}/>
                <h1>Daily Reports</h1>
                <div className={style.data}>
                    {
                        this.isNeedToInsertTodaysReport() &&
                            <Report key={getTodaysLocaleDateString()} item={this.defaultItem} onEdit={this.props.editReport} />
                    }
                    {
                        this.props.items.map(item => <Report key={item.date} item={item} onEdit={this.props.editReport} />)
                    }
                </div>
                <Flower className={style.icon} style={{top: 893, left: 741}}/>
                <Flower className={style.icon} style={{top: 893, left: 28}}/>
            </div>            
        );
    }
}

export default Reports;