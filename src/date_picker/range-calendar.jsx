import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DatePicker from 'rc-calendar/lib/Picker'
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';
import 'rc-calendar/assets/index.css'

const formatStr = 'YYYY-MM-DD HH:mm:ss';
// const format = 'YYYY-MM-DD HH:mm:ss';
class RangeDateCalendar extends Component {
  static defaultProps = {
    prefixCls: 'dh-calendar',
    placeholder: '请选择日期',
    locale: zhCN,
    format: 'YYYY-MM-DD'
  }
  static propTypes = {
    defaultValue: PropTypes.object,
    style: PropTypes.object,
    showTime: PropTypes.bool
  }
  constructor(props) {
    super(props)
    this.state = {
      showDateInput: true,
      disabled: false,
      value: this.props.defaultValue
    }
  }
  format = (v) => {
    return v ? v.format(formatStr) : '';
  }
  
  isValidRange = (v) => {
    return v && v[0] && v[1];
  }
  getFormat = () => {
    if (this.props.showTime) {
      return  'YYYY-MM-DD HH:mm:ss'
    } else if (this.props.format) {
      return 'YYYY-MM-DD'
    }
  }
  onChange = (value) => {
    // console.log('DatePicker change: ', (value && value.format(this.getFormat(this.props.format))));
    this.setState({ value });
  }
  onHoverChange = (hoverValue) => {
    this.setState({ hoverValue });
  }
  renderCalendar() {
    const { prefixCls, locale, showTime, ...restProps } = this.props
    const timePickerElement =  <TimePickerPanel prefixCls="dh-calendar-time-picker" defaultValue={moment('00:00:00', 'HH:mm:ss')} />;
    return (
      <RangeCalendar
        prefixCls={prefixCls}
        // className={classnames({'dh-calendar-time': showTime})}
        hoverValue={this.state.hoverValue}
        onHoverChange={this.onHoverChange}
        locale={locale}
        style={{ zIndex: 1000 }}
        dateInputPlaceholder={['start', 'end']}
        // defaultValue={[now, now.clone().add(1, 'months')]}
        timePicker={showTime ? timePickerElement : null}
        {...restProps}
      />
    )
  }
  render() {
    const { disabled, value } = this.state
    // const { format } = this.props
    return (
      <DatePicker
        animation="slide-up"
        disabled={disabled}
        calendar={this.renderCalendar()}
        value={value}
        onChange={this.onChange}
      >
        {
          ({value}) => {
            return (
              <div className="dh-calendar-picker">
              <input
                placeholder={this.props.placeholder}
                style={{...this.props.style}}
                disabled={disabled}
                readOnly
                className="dh-calendar-picker-input"
                value={this.isValidRange(value) && `${this.format(value[0])} - ${this.format(value[1])}` || ''}                
              />
              </div>
            )
          }
        }
      </DatePicker>
    )
  }
}
export default RangeDateCalendar
