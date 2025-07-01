import React, { useState } from "react";
import * as ReactDom from "react-dom";




import {isCorrectAnswer} from "./questions";
import {randomQuestion} from "./questions";

function QuizApplication(){

    const [question, setQuestion] = useState(randomQuestion);
    const [answer, setAnswer] = useState();

    if (answer) {
        return <>
            <h1>{isCorrectAnswer(question, answer)? "Right" : "Wrong"}</h1>;
            <p>
                <button onClick={() => {
                    setQuestion(randomQuestion());
                    setAnswer(undefined);
                }}>Another question</button>
            </p>
        </>;
    }

    return <>
        <h1>question.question</h1>
        {Object.keys(question.answers).filter(a => question.answers[a]).map(a => <p key={a}>
            <button onClick={() => setAnswer(a)}>{question.answers[a]}</button></p>)}
        </>;
}


ReactDom.render(<h1>Take a Quiz</h1>, document.getElementById("root"));

