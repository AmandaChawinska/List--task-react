import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import Button from "../Button";
import {
    selectTasks,
    toggleHideDone,
    setAllDone,
    removeAllTasks,
    fetchExampleTasks, selectHideDone
} from "../../tasksSlice";


const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
        </Button>
            {tasks.length > 0 && (
                <>

                    <Button onClick={() => dispatch(toggleHideDone())} >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
            </Button>
                    <Button
                        onClick={() => dispatch(removeAllTasks())}
                        removeAll>
                        Usuń wszystko

            </Button>
                </>
            )}
        </Wrapper>
    );
};


export default Buttons;