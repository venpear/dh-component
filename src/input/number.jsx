import React from 'react';
import  RcInputNumber from 'rc-input-number';

class Number extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false
    }
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleFocus() {
    this.setState({ focus: true });
  }
  handleBlur() {
    this.setState({ focus: false });
  }
  render() {
    const { width } = this.props;
    const style = {
      transform: this.state.focus ? 'scaleX(1)':' scaleX(0)'
    };
    return (
      <div
        style={{ width }}
        className="dh-input">
        <RcInputNumber
          {...this.props}
          prefixCls="dh-input-number"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <div
          style={style}
          className="dh-input-bordered"
        />
      </div>
    )
  }
}
export default Number;
