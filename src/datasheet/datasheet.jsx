import React from 'react';
// import update from 'react/lib/update';
import PropTypes from 'prop-types';

import Row from './row.jsx';
function buildArray(number = 0) {
  let _array = [];
  for (let index = 0; index < number; index++) {
    _array.push({});
  }
  return _array
}

class Datasheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
    this.handleSeleteCell = this.handleSeleteCell.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.dataSource && Array.isArray(this.props.dataSource)) {
      let header = this.props.header;
      let dataSource = this.props.dataSource.map(item => {
        if (header.length > item.length) {
          return [].concat(item, buildArray(header.length - item.length))
        }
        return item;
      })
      this.setState({ dataSource });
    }
  }
  handleSeleteCell(rIndex, index) {
    const dataSource = this.state.dataSource;
    const _dataSource = dataSource.map((item, idx) => {
      if (rIndex === idx) {
        return item.map((c, jdx) => ({
            ...c,
            editable: false,
            selected: jdx === index ? true : false
          })
        );
      }
      return item.map(c => ({...c, editable: false, selected: false }));
    })
    this.setState({ dataSource: _dataSource })
  }
  handleChange(rIndex, index, value) {
    const dataSource = this.state.dataSource;
    const _dataSource = dataSource.map((item, idx) => {
      if (idx === rIndex) {
        return item.map((c, jdx) => ({ ...c, value: jdx === index ?  value : c.value }))
      }
      return item
    });
    this.setState({ dataSource: _dataSource })
  }
  handleKeyDown() {
    const dataSource = this.state.dataSource;
    const _dataSource = dataSource.map((item, idx) =>
      item.map(c => ({...c, editable: c.selected ? true : false }))
    )
    this.setState({ dataSource: _dataSource })
  }
  handleDoubleClick(rIndex, index) {
    const dataSource = this.state.dataSource.map((item, idx) => {
      if (idx === rIndex) {
        return item.map((c, jdx) => ({
          ...c,
          editable: jdx === index ? true : false
        }));
      }
      return item.map(c => ({...c, editable: false, selected: false }));
    })
    this.setState({ dataSource });
  }
  render() {
    const dataSource = this.state.dataSource;
    const header = this.props.header;
    return (
      <div className="dh-datasheet">
        <table  tabIndex={0} onKeyDown={this.handleKeyDown}>
          <thead>

            {
              header.map((item, idx) => (
                <th key={`datasheet-th-${idx}`}>{item.title}</th>
              ))
            }
          </thead>
          <tbody>
            {
              dataSource.map((item, idx) => (
                <Row
                  index={idx}
                  data={item}
                  key={`datasheet-row-${idx}`}
                  onChange={this.handleChange}
                  onDoubleClick={this.handleDoubleClick}
                  onEditable={this.handleEditable}
                  onSelectCell={this.handleSeleteCell}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default Datasheet
