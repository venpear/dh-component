import React, { Component } from 'react'
import { DatePicker } from '../../src'
import './style.scss'
import moment from 'moment'

const RangeCalendar = DatePicker.RangeCalendar

class DatePickerDemo extends Component {
  constructor(props) {
    super(props)
  }
  handleClear = () => {
    console.log('handleClear')
  }
  render() {
    return (
      <div>
        <div className="demo-date-picker">
          <DatePicker
            style={{width: '300px'}}
            showTime={false}
            format= 'YYYY-MM-DD'
            onChange={(value) => { console.log(value) }}
          />
        </div><br/>
        <div className="demo-date-picker">
          <DatePicker
            style={{width: '300px'}}
            format= 'YYYY-MM-DD HH:mm:ss'
            showTime
          />
        </div><br/>
        <div className="demo-date-picker">
        <RangeCalendar
          // showTime
          //  style={{width: '300px'}}
           format= 'YYYY-MM-DD'
           onChange={(value, str) => {
            console.log(value, '22222', str)
          }}
          showClear
          showDateInput
          onClear={this.handleClear}
        />
      </div><br/>
      <div className="demo-date-picker">
      <RangeCalendar
          showTime
          format= 'YYYY-MM-DD HH:mm:ss'
          ranges={{ '今天': [moment(), moment()], '本月': [moment(), moment().endOf('month')] }}          
          onChange={(value, str) => {
            console.log(value, '8888888', str)
          }}
          onOk={(value) => {
            console.log(value, 'ok')
          }}
        />
      </div><br/>
      </div>
    )
  }
}

export default DatePickerDemo