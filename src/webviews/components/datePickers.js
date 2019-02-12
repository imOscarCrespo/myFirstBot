import React from 'react'
import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";


export default class MyWebview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (newDate) => {
    console.log("data", newDate);
    return this.setState({date: newDate});
  }

  render() {
    const {date, format, mode, inputFormat} = this.state;
    return <DatePicker
      defaultText="Please select a date"
      dateTime={date}
      format={format}
      viewMode={mode}
      inputFormat={inputFormat}
      onChange={this.handleChange}
    /> ;
    

    
  }
}