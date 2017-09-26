import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DatePicker from 'rc-calendar/lib/Picker'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar'
import TimePickerPanel from 'rc-time-picker/lib/Panel'
// import { Icon } from '../index'
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import 'rc-calendar/assets/index.css'

const prefixCls = 'dh-calendar'
class RangeDateCalendar extends Component {
  static defaultProps = {
    prefixCls: 'dh-calendar',
    placeholder: '请选择日期',
    locale: zhCN,
    showToday: false
    // format: 'YYYY-MM-DD HH:mm:ss'
  }
  static propTypes = {
    defaultValue: PropTypes.object,
    style: PropTypes.object,
    showTime: PropTypes.bool,
    showToday: PropTypes.bool,
    disabled: PropTypes.bool
  }
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.defaultValue 
      // selectedValue: this.props.defaultValue || [ moment(), moment().add(1, 'month') ]
    }
  }
  getShowDateFromValue = () => {
    // const [start, end] = value;
    const start = moment()

    // value could be an empty array, then we should not reset showDate
    if (!start && !end) {
      return;
    }
    const newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
    return [start, newEnd];
  }
  format = (v) => {
    return v ? v.format(this.props.format) : '';
  }
  
  isValidRange = (v) => {
    return v && v[0] && v[1];
  }
  getDatestring = (value) => {
    if (Array.isArray(value) && value.length > 1)
    return [ this.format(value[0]), this.format(value[1]) ]
  }
  onChange = (value) => {
    this.setState({ value });
  }
  handleChange = (value) => {
    if (this.props.onChange && Array.isArray(value) && value.length > 1) {
      const datestring = this.getDatestring(value)
      this.props.onChange(value, datestring)
    }
  }
  handleVaueChange = (value) => {
    this.setState({selectedValue: value})
  }
  handleOk = (value) => {
    if (this.props.onOk) {
      this.props.onOk(value)
    }
  }
  handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({value: []})
  }
  setValue = (value) => {
    this.handleChange(value);
    this.setState({ value, selectedValue: value });
  }
  clearHoverValue = () => this.setState({ hoverValue: [] });
  renderFooter = () => {
    const { ranges } = this.props
    if (!ranges) {
      return null
    }
    const operations = Object.keys(ranges || {}).map(range => {
      const value  = ranges[range]
      return (
        <a
          key={range}
          onClick={() => this.setValue(value)}
          onMouseEnter={() => this.setState({ hoverValue: value })}
          onMouseLeave={this.clearHoverValue}
        >
          {range}
        </a>
      )
    })
    const rangeNode = (
      <div className={`${prefixCls}-footer-extra ${prefixCls}-range-quick-selector`} key="range">
        {operations}
      </div>
    )
    return [ rangeNode ]
  }
  renderCalendar = () => {
    const { prefixCls, locale, showTime, showToday, ranges, ...restProps } = this.props
    // const { hoverValue, value, selectedValue } = this.state
    const timePickerElement =  <TimePickerPanel  prefixCls="dh-calendar-time-picker" defaultValue={moment('00:00:00', 'HH:mm:ss')} />;
    return (
      <RangeCalendar
        prefixCls={prefixCls}
        className={classnames({'dh-calendar-time': showTime, [`${prefixCls}-range-with-ranges`]: ranges})}
        showToday={showToday}
        locale={locale}
        style={{ zIndex: 1000 }}
        dateInputPlaceholder={['start', 'end']}
        timePicker={showTime ? timePickerElement : null}
        renderFooter={this.renderFooter}
        onValueChange={this.handleValueChange}
        onChange={this.handleChange}
        onOk={this.handleOk}
      />
    )
  }
  render() {
    const { value } = this.state
    const { disabled, locale } = this.props
    return (
      <DatePicker
        animation="slide-up"
        locale={locale}
        disabled={disabled}
        onChange={this.onChange}
        calendar={this.renderCalendar()}
        value={value}
      >
        {
          ({value}) => {
            return (
              <div className="dh-calendar-picker">
                <span className="dh-calendar-picker-input">
                  <input
                    placeholder="开始日期"
                    style={{...this.props.style}}
                    disabled={disabled} 
                    readOnly
                    className="dh-calendar-range-picker-input"
                    value={this.isValidRange(value) && `${this.format(value[0])}` || ''}                
                  />
                  <span className="ant-calendar-range-picker-separator" >~</span>
                  <input
                    placeholder="结束日期"
                    style={{...this.props.style}}
                    disabled={disabled} 
                    readOnly
                    className="dh-calendar-range-picker-input"
                    value={this.isValidRange(value) && `${this.format(value[1])}` || ''}                
                  />
                  { this.isValidRange(value) &&<span onClick={this.handleClear} className="dh-calendar-picker-clear" /> } 
                  <span className="dh-calendar-picker-icon"></span>
                </span>
              </div>
            )
          }
        }
      </DatePicker>
    )
  }
}
export default RangeDateCalendar
