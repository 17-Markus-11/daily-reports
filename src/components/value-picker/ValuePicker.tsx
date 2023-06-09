import { Component, ReactNode } from "react";
import style from "./ValuePicker.module.css";

export enum ValuePickerTypes {
    Number,
    Date
}

type Props = {
    isEditable: boolean,
    type: ValuePickerTypes,
    value: number,
    step: number,
    unit: string | null,
    onChange: (value: number) => void
}

class ValuePicker extends Component<Props> {
    getDisplayValueByType = (): string =>  {
        if (this.props.type === ValuePickerTypes.Number) {
            return this.props.value.toString();
        } else if (this.props.type === ValuePickerTypes.Date) {
            const hours = Math.floor(this.props.value / 60);
            const displayHours = hours < 10 ? `0${hours}` : hours
            const minutes = this.props.value % 60;
            const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
            return `${displayHours}:${displayMinutes}`;
        } else {
            throw new Error(`${ValuePickerTypes[this.props.type]} type is not implemented`);
        }
    }

    incrementValue = () => {
        if (this.props.type === ValuePickerTypes.Number) {
            if (this.props.value < 24) {
                this.props.onChange(this.props.value + this.props.step);
            }
        } else if (this.props.type === ValuePickerTypes.Date) {
            if (this.props.value < (24 * 60 - this.props.step)) {
                this.props.onChange(this.props.value + this.props.step);
            } else {                
                this.props.onChange(0);
            }
        }
    }

    decrementValue = () => {
        if (this.props.type === ValuePickerTypes.Number) {
            if (this.props.value > 0) {
                this.props.onChange(this.props.value - this.props.step);
            }
        } else if (this.props.type === ValuePickerTypes.Date) {
            if (this.props.value > 0) {
                this.props.onChange(this.props.value - this.props.step);
            } else {
                this.props.onChange(24 * 60 - this.props.step);
            }
        }
    }

    render(): ReactNode {
        return (
            <div className={style.container}>
                {
                    this.props.isEditable &&
                        <div className={style.pickerTop} onClick={this.incrementValue} />
                }
                
                <div className={style.data}>
                    <span>{this.getDisplayValueByType()}</span>
                    {
                        this.props.unit &&
                            <span className={style.unit}>{this.props.unit}</span>
                    }
                </div>

                {
                    this.props.isEditable &&
                        <div className={style.pickerBottom} onClick={this.decrementValue} />
                }
            </div>
        );
    }
}

export default ValuePicker;