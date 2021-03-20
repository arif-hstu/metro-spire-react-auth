import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './Date.css'

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Date = (props) => {
  const [startDate, setStartDate] = props.dateState;
  return (
    <DatePicker className='datePicker' selected={startDate} onChange={date => setStartDate(date)} />
  );
};

export default Date;