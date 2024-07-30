import { useState } from "react";
import "./App.css";
import MonthSwitcher from "./MonthsSwitcher";

function App() {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  let [day, setDay] = useState(new Date().getDate());
  let [month, setMonth] = useState(new Date().getMonth());
  let [year, setYear] = useState(new Date().getFullYear());

  function handleMonthsSwitcher(operation) {
    if(operation == "add"){
      setMonth(++month);
      if(month > 11){
        setMonth(0);
        setYear(++year);
      }
    } else {
      setMonth(--month);
      if(month < 0){
        setMonth(11);
        setYear(--year);
      }
    }
  }

  let numOfDaysInMonth = daysInMonth(year, month+1); 

  let numOfRows = 5;

  function buildCalendarRows() {

    console.log(`todays date is: ${day}`)
    console.log(`todays month is: ${months[month]}`)
    console.log(`todays year is: ${year}`)
    console.log(`number of days in the month: ${numOfDaysInMonth}`)
    console.log(month)

    
  
    let firstDayOfTheMonth = new Date(`${year}-${month+1}-1`);

    console.log(`first day of the month: ${firstDayOfTheMonth}`)
    console.log(`firstDayOfTheMonth.getDay(): ${firstDayOfTheMonth.getDay()}`)

    if (firstDayOfTheMonth.getDay() == 4 &&  numOfDaysInMonth == 30) {
      numOfRows = 5;
    }

    if (firstDayOfTheMonth.getDay() == 5 &&  numOfDaysInMonth == 30) {
      numOfRows = 5;
    }

    if (firstDayOfTheMonth.getDay() == 5 &&  numOfDaysInMonth > 30) {
      numOfRows = 6;
    }

    if (firstDayOfTheMonth.getDay() == 0 && numOfDaysInMonth == 28) {
      numOfRows = 4;
    }

    if (firstDayOfTheMonth.getDay() == 6 ) {
      numOfRows = 6;
    }

    console.log(`numOfRows: ${numOfRows}`)
    let val=[];
    let dayCounter = 1;

    val.push(<div className="calendar-item"><span className="day">Sun</span></div>);
    val.push(<div className="calendar-item"><span className="day">Mon</span></div>);
    val.push(<div className="calendar-item"><span className="day">Tue</span></div>);
    val.push(<div className="calendar-item"><span className="day">Wed</span></div>);
    val.push(<div className="calendar-item"><span className="day">Thu</span></div>);
    val.push(<div className="calendar-item"><span className="day">Fri</span></div>);
    val.push(<div className="calendar-item"><span className="day">Sat</span></div>);

    for(let i = 1; i <= (numOfRows*7); i++){
      val.push(
        <div className="calendar-item" key={i}>
          <span className={i < firstDayOfTheMonth.getDay() || dayCounter > numOfDaysInMonth ? null : 'day-count'}>{i <= firstDayOfTheMonth.getDay() || dayCounter > numOfDaysInMonth ? null : dayCounter++}</span>
        </div>
        );
    }

    return val;
  }

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function handleYearUpdate (val){
    setYear(val);
  }

  function handleNumberOfRowsStyle(){
    if(numOfRows == 4){
      return {gridTemplateRows: "20% 20% 20% 20% 20%"};
    }

    if(numOfRows == 5){
      return {gridTemplateRows: "16.6% 16.6% 16.6% 16.6% 16.6% 16.6%"};
    }

    if(numOfRows == 6){
      return new {gridTemplateRows: "14.28% 14.28% 14.28% 14.28% 14.28% 14.28% 14.28%"};
    }
    
  }

  return (
    <div className="app-container">
      <div className="calendar-container">
        <div className="calendar-container-section calendar-img-container">
          <div className="calendar-img"></div>
        </div>

        <div className="calendar-container-section">
          <MonthSwitcher handleMonthsSwitcher={handleMonthsSwitcher} handleYearUpdate={handleYearUpdate} yearValue={year} monthValue={month}/>
          <div className="calendar-grid" style={{handleNumberOfRowsStyle}}>

            {
              buildCalendarRows()
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
