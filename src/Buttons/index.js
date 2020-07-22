import React, { Fragment } from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <Fragment>
                <button onClick={toggleHideDone} className="buttons__button ">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}

                >
                    Ukończ wszystkie
            </button>
            </Fragment>
        </div>
    )
);


export default Buttons;