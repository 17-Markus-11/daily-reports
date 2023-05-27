import style from "./RotatableSvg.module.css";
import { Component, ReactNode } from "react";

type Props = {
    svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
    top: number,
    left: number,
    width: number
}

class RotatableSvg extends Component<Props> {
    render(): ReactNode {
        return (
            <div className={style.container} style={{top: this.props.top, left: this.props.left, width: this.props.width}}>
                <div className={style.imageBox}>
                    <this.props.svg />
                </div>
            </div>
        );
    }
}

export default RotatableSvg;