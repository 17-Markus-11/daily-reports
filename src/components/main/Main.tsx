import style from "./Main.module.css";
import { Component, ReactNode } from "react";

class Main extends Component {
    render(): ReactNode {
        return (
            <div className={style.container}>                
                <div className={style.main}>
                    <h1>Perijok</h1>
                </div>
            </div>
        );
    }
}

export default Main;