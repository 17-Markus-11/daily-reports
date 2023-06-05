import style from "./Report.module.css";
import { Component, ReactNode } from "react";
import { ReportItem } from "./ReportItem";
import ValuePicker, { ValuePickerTypes } from "../value-picker/ValuePicker";
import { HiPencil, HiCheck, HiX } from "react-icons/hi";
import { getDayOfWeek, getLocaleDateString, getTodaysTimestamp, isThisDateToday } from "../../utils/time-utils";

type Props = {
    item: ReportItem,
    onEdit: (id: string, report: ReportItem) => void
}

class Report extends Component<Props> {
    state = {
        distance: this.props.item.distance,
        sports: this.props.item.sports,
        learning: this.props.item.learning,
        cooking: this.props.item.cooking,
        wakeUp: this.props.item.wakeUp,
        goToSleep: this.props.item.goToSleep,
        money: this.props.item.money,
        isEditMode: false
    }

    onDistanceActivityChange = (value: number) => this.setState({distance: value});
    onSportsActivityChange = (value: number) => this.setState({sports: value});
    onLearningActivityChange = (value: number) => this.setState({learning: value});
    onCookingActivityChange = (value: number) => this.setState({cooking: value});
    onWakeUpTimeChange = (value: number) => this.setState({wakeUp: value});
    onGoToSleepTimeChange = (value: number) => this.setState({goToSleep: value});
    
    getCalculatedMoney = (): number => {
        const currentDay = getDayOfWeek(this.props.item.date);
        console.log(currentDay);
        
        const isWeekend = currentDay === 6 || currentDay === 0;
        const isWakeUpInTime = this.state.wakeUp <= 9 * 60;
        const isGoToSleepInTime = (this.state.goToSleep >= 19 * 60 && this.state.goToSleep < 24 * 60) || this.state.goToSleep <= 1 * 60;

        let money = 0;
        money += Math.min(6, this.state.learning) * 10;
        money += Math.min(1, this.state.sports) * 60;
        money += Math.min(5, this.state.cooking) * 10;
        money += this.state.distance >= 4 ? 20 : 0;
        money += isWakeUpInTime ? 30 : 0;
        money += isGoToSleepInTime ? 30 : 0;

        if (!isWeekend) {
            money -= this.state.sports < 1 ? 30 : 0;
            money -= this.state.learning < 2 ? 30 : 0;

            if (!isWakeUpInTime) {
                money -= Math.floor((this.state.wakeUp - 9 * 60) / 30) * 5;
            }

            if (!isGoToSleepInTime) {
                money -= Math.floor((this.state.goToSleep - 1 * 60) / 30) * 5;
            }
        }

        return money;
    }

    getMoneyString = (money: number): string => {
        const sign = money > 0 ? "+" : "";
        return `${sign}${money} ₴`;
    }

    onCancel = (): void => {
        this.setState({
            distance: this.props.item.distance,
            sports: this.props.item.sports,
            learning: this.props.item.learning,
            cooking: this.props.item.cooking,
            wakeUp: this.props.item.wakeUp,
            goToSleep: this.props.item.goToSleep,
        });
        this.toggleEditMode();
    }

    toggleEditMode = (): void => {
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    }

    submitChanges = (): void => {
        const updatedReport: ReportItem = {
            id: this.props.item.id,
            distance: this.state.distance,
            sports: this.state.sports,
            learning: this.state.learning,
            cooking: this.state.cooking,
            wakeUp: this.state.wakeUp,
            goToSleep: this.state.goToSleep,
            money: this.props.item.money,
            date: getTodaysTimestamp()
        };

        this.props.onEdit(this.props.item.id, updatedReport);
        this.toggleEditMode();
    }

    render(): ReactNode {
        const isSameDate = isThisDateToday(this.props.item.date);
        const isEditable = isSameDate && this.state.isEditMode
        return (
            <div className={style.item}>
                <div className={style.money}>
                    <span>{this.getMoneyString(this.getCalculatedMoney())}</span>
                </div>
                {
                    isSameDate && !this.state.isEditMode &&
                        <div className={style.controlPanel}>
                            <HiPencil className={style.button} onClick={this.toggleEditMode} />
                        </div>
                }
                {
                    this.state.isEditMode &&
                        <div className={style.controlPanel}>
                            <HiX className={style.button} onClick={this.onCancel} />
                            <HiCheck className={style.button} onClick={this.submitChanges} />
                        </div>
                }
                <div className={style.borderTop}></div>
                <div className={style.content}>
                    <div className={style.date}>{getLocaleDateString(this.props.item.date)}</div>
                    <div className={style.timeTrack}>
                        <div className={style.activityTrack}> 
                            <ValuePicker isEditable={isEditable} value={this.state.wakeUp} step={30} type={ValuePickerTypes.Date} onChange={this.onWakeUpTimeChange} />
                            <span>Підйом</span>
                        </div>
                        <span>-</span>
                        <div className={style.activityTrack}>
                            <span>Відбій</span>
                            <ValuePicker isEditable={isEditable} value={this.state.goToSleep} step={30} type={ValuePickerTypes.Date} onChange={this.onGoToSleepTimeChange} />
                        </div>
                    </div>
                    <div className={style.activityTrack}>
                        <div className={style.activity}>
                            <span className={style.name}>Дистанція</span>
                            <ValuePicker isEditable={isEditable} value={this.state.distance} step={0.5} type={ValuePickerTypes.Number} onChange={this.onDistanceActivityChange} />
                        </div>
                        <div className={style.activity}>
                            <span className={style.name}>Спорт</span>
                            <ValuePicker isEditable={isEditable} value={this.state.sports} step={1} type={ValuePickerTypes.Number} onChange={this.onSportsActivityChange} />
                        </div>
                        <div className={style.activity}>
                            <span className={style.name}>Навчання</span>
                            <ValuePicker isEditable={isEditable} value={this.state.learning} step={1} type={ValuePickerTypes.Number} onChange={this.onLearningActivityChange} />
                        </div>
                        <div className={style.activity}>
                            <span className={style.name}>Кулінарія</span>
                            <ValuePicker isEditable={isEditable} value={this.state.cooking} step={1} type={ValuePickerTypes.Number} onChange={this.onCookingActivityChange} />
                        </div>
                    </div>
                </div>
                <div className={style.borderBottom}></div>
            </div>
        );
    }
}

export default Report;