import React, { Component } from 'react'
import { DatePicker, Button } from '../../src'
import './style.scss'
import moment from 'moment'

const RangeCalendar = DatePicker.RangeCalendar

class DatePickerDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      range: '今天'
    }
  }
  handleClear = () => {
    console.log('handleClear')
  }
  handleClick = () => {
    let random = Math.round(Math.random())
    console.log(random,'random')
    this.setState({range: random === 0 ? '今天' :'本月'})
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
          range={'本月'}
          ranges={{ '今天': [moment(), moment()], '本月': [moment(), moment().endOf('month')] }}
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
          range={this.state.range}
          onChange={(value, str) => {
            console.log(value, '8888888', str)
          }}
          onOk={(value) => {
            console.log(value, 'ok')
          }}
        />
      </div><br/>
      <Button onClick={this.handleClick}>改变range</Button>
      </div>
    )
  }
}

export default DatePickerDemo
