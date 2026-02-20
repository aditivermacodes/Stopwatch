import React, {useState, useRef, useEffect} from "react";

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdref = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=> {
        if(isRunning) {
            intervalIdref.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10)
        }
        return () => {
            clearInterval(intervalIdref.current);
        }
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000*60*60));
        let minutes = Math.floor(elapsedTime / (1000*60)%60 );
        let second = Math.floor(elapsedTime / (1000)%60);
        let milisecond = Math.floor((elapsedTime % 1000/10));

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        second = String(second).padStart(2,"0");
        milisecond = String(milisecond).padStart(2,"0");

        return `${hours}:${minutes}:${second}:${milisecond}`;
    }

    return(
        <div className="Stopwatch">
            <div className="Display">{formatTime()}</div>
            <div className="controls">
                <button onClick={reset} className="Reset-button">Reset</button>
                <button onClick={start} className="Start-button">Start</button>
                <button onClick={stop} className="Stop-button">Stop</button>
            </div>
        </div>
    )
 }
export default Stopwatch;