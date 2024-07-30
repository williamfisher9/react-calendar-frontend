import { useState } from "react";

function MonthSwitcher(props) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let date = new Date();
    let month = months[date.getMonth()-1];

    let handleChange = (event) => {
        props.handleYearUpdate(event.target.value);
    }

    let handleFieldExit = (event) => {
        props.handleYearUpdate(event.target.value);
    };

    let handleKeyDown = (event) => {
        console.log(event.key)
        if(event.key == 'Enter')
            props.handleYearUpdate(event.target.value);
    };

    let handleLeftChevronClick = () => {
        console.log("passedFunction left pressed");
        props.handleMonthsSwitcher("subtract");
    }
    
    let handleRightChevronClick = () => {
        console.log("passedFunction right pressed");
        props.handleMonthsSwitcher("add");
    }

    return <>
    <input style={{
            width: "100px", 
            height: "50px",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "24px"
        }} 
        type="text" 
        value={props.yearValue}
        onChange={handleChange} 
        onBlur={handleFieldExit}
        onKeyDown={handleKeyDown}
    />

    <div  style={{color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", textTransform: "uppercase"}}>
        <i className="fa-solid fa-chevron-left" onClick={handleLeftChevronClick} style={{cursor: "pointer"}}></i>
        <h1 style={{width: "200px", textAlign: "center"}}>{months[props.monthValue]}</h1>
        <i className="fa-solid fa-chevron-right" onClick={handleRightChevronClick} style={{cursor: "pointer"}}></i>
    </div>
    </>;
}

export default MonthSwitcher;