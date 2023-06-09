import { AnimationTypes } from "./AnimationTypes";
import style from "./RotatableSvg.module.css";
import { Component, ReactNode } from "react";

type Props = {
    svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
    top: number,
    left: number,
    width: number,
    animationName: AnimationTypes
}

class RotatableSvg extends Component<Props> {
    render(): ReactNode {
        const styles : React.CSSProperties = {
            top: this.props.top,
            left: this.props.left,
            width: this.props.width
        };        

        return (
            <div className={style.container} style={styles}>
                <div className={`${style.imageBox} ${style[AnimationTypes[this.props.animationName]]}`}>
                    <this.props.svg />
                </div>
            </div>
        );
    }
}

export default RotatableSvg;