import './App.css';
import {useEffect, useState} from "react";

function App() {
    let future = Date.parse("Dec 24, 2022 11:30:00")
    let now = new Date(); /*calling the now time with the entire format */
    let timeDifference = future - now; /*substraction needed to calculate the days/hours/min/second value that will be implemented in the html */
    // console.log(timeDifference) /* testing the date call */
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutes = Math.floor(timeDifference / (1000 * 60));
    var seconds = Math.floor(timeDifference / 1000);
    // console.log(days + "\n" + hours + "\n" + minutes + "\n" + seconds)

    let dayTime = days;
    let hourTime = hours - days * 24;
    let minuteTime = minutes - hours * 60;
    let secondsTime = seconds - minutes * 60;

    // update timer
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (<>
            <div className="App">
                <div className="timer" id="timer">
                    <div>{dayTime} Days</div>
                    <div>{hourTime} Hours</div>
                    <div>{minuteTime} Minutes</div>
                    <div>{secondsTime} Seconds</div>


                </div>
            </div>
        </>
    );
}

export default App;
