import React, { Component } from 'react'
import { DatePicker } from '../../src'
import './style.scss'

const RangeCalendar = DatePicker.RangeCalendar

class DatePickerDemo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="demo-date-picker">
          <DatePicker
            style={{width: '300px'}}
            showTime={false}
            onChange={(value) => { console.log(value) }}
          />
        </div><br/>
        <div className="demo-date-picker">
          <DatePicker
            style={{width: '300px'}}
            showTime
          />
        </div><br/>
        <div className="demo-date-picker">
        <RangeCalendar
          // style={{width: '300px'}}
          // showTime
        />
      </div><br/>
      </div>
    )
  }
}

export default DatePickerDemo