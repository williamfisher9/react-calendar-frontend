import { useState } from "react";
import './Calendar.css';

import MonthSelectionControl from '../MonthSelectionControl/MonthSelectionControl'

import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import image7 from '../../assets/7.jpg';
import image8 from '../../assets/8.jpg';
import image9 from '../../assets/9.jpg';
import image10 from '../../assets/10.jpg';
import image11 from '../../assets/11.jpg';
import image12 from '../../assets/12.jpg';

function Calendar() {
  let [month, setMonth] = useState(new Date().getMonth());
  let [year, setYear] = useState(new Date().getFullYear());

  let images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  function handleMonthsSwitcher(operation) {
    if (operation == "add") {
      setMonth(++month);
      if (month > 11) {
        setMonth(0);
        setYear(++year);
      }
    } else {
      setMonth(--month);
      if (month < 0) {
        setMonth(11);
        setYear(--year);
      }
    }
  }

  let numOfDaysInMonth = daysInMonth(year, month + 1);

  let numOfRows;

  function buildCalendarRows() {
    //console.log(`todays date is: ${day}`)
    //console.log(`todays month is: ${months[month]}`)
    //console.log(`todays year is: ${year}`)
    //console.log(`number of days in the month: ${numOfDaysInMonth}`)
    //console.log(month)

    let firstDayOfTheMonth = new Date(`${year}-${month + 1}-1`);

    numOfRows = Math.ceil((numOfDaysInMonth + firstDayOfTheMonth.getDay()) / 7);

    //console.log(`first day of the month: ${firstDayOfTheMonth}`)
    //console.log(`firstDayOfTheMonth.getDay(): ${firstDayOfTheMonth.getDay()}`)
    //console.log(`numOfRows: ${numOfRows}`)

    let val = [];
    let dayCounter = 1;

    val.push(
      <div className="calendar-item" key="day-label-1">
        <span className="day">Sun</span>
      </div>
    );
    val.push(
      <div className="calendar-item" key="day-label-2">
        <span className="day">Tue</span>
      </div>
    );
    val.push(
      <div className="calendar-item" key="day-label-3">
        <span className="day">Mon</span>
      </div>
    );
    val.push(
      <div className="calendar-item" key="day-label-4">
        <span className="day">Wed</span>
      </div>
    );
    val.push(
      <div className="calendar-item" key="day-label-5">
        <span className="day">Thu</span>
      </div>
    );
    val.push(
      <div className="calendar-item" key="day-label-6">
        <span className="day">Fri</span>
      </div>
    );
    val.push(
      <div className="calendar-item" key="day-label-7">
        <span className="day">Sat</span>
      </div>
    );

    for (let i = 1; i <= numOfRows * 7; i++) {
      val.push(
        <div className="calendar-item" key={i}>
          <span
            className={
              i < firstDayOfTheMonth.getDay() + 1 ||
              dayCounter > numOfDaysInMonth
                ? null
                : "day-count"
            }
          >
            {i <= firstDayOfTheMonth.getDay() || dayCounter > numOfDaysInMonth
              ? null
              : dayCounter++}
          </span>
        </div>
      );
    }

    return val;
  }

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function handleYearUpdate(val) {
    setYear(val);
  }

  let handleSetMonthValue = (val) => {
    setMonth(val);
  };

  return (
    
      <div className="calendar-container">
        <div className="calendar-container-section calendar-img-container">
          <div
            className="calendar-img"
            style={{
              background: `url(${images[month]}) center/cover no-repeat`,
              width: "100%",
              height: "100%",
              transition: "0.3s",
            }}
          ></div>
        </div>

        <div className="calendar-container-section">
          <MonthSelectionControl
            handleMonthsSwitcher={handleMonthsSwitcher}
            handleYearUpdate={handleYearUpdate}
            handleSetMonthValue={handleSetMonthValue}
            yearValue={year}
            monthValue={month}
          />
          <div
            className="calendar-grid"
            style={{ gridTemplateRows: "20% auto auto auto auto auto auto" }}
          >
            {buildCalendarRows()}
          </div>
        </div>
      </div>
  );
}

export default Calendar;
