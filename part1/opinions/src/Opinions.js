import { useState } from "react";
import Statics from "./Statics.js";

const Opinions = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const showStatics = good !== 0 || neutral !== 0 || bad !== 0 ? true : false;

    return(
        <div>
            <h1>Give feedback</h1>
            <button onClick={() => {setGood(good + 1)}}>good</button>
            <button onClick={() => {setNeutral(prevContador => {
                return prevContador + 1;
            })}}>neutral</button>
            <button onClick={() => {setBad(bad + 1)}}>bad</button>
            
            {showStatics
                ? <Statics good={good} neutral={neutral} bad={bad}/>
                : <p> No feedback</p>
            }
        </div>
    )
}


export default Opinions;