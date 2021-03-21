import DatePicker from "react-datepicker";
import './Date.css'

// import thirdparty styleSheet
import "react-datepicker/dist/react-datepicker.css";


const Date = (props) => {
  const [startDate, setStartDate] = props.dateState;
  return (
    <DatePicker className='datePicker' selected={startDate} onChange={date => setStartDate(date)} />
  );
};

export default Date;