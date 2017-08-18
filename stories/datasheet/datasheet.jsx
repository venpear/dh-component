import React from 'react'
import { Datasheet } from '../../src'

let grid = function () {
  let option = [];
  for (let idx = 0; idx < 50; idx++) {
    let row = [];
    for(let jdx = 0; jdx < 6; jdx++) {
      let t =  jdx === 0 ? { value: idx + 1} : { value: `${Math.floor(Math.random()*100)}` }
      row.push(t)
    }
    option.push(row)
  }
  return option
}
let header = [
    { title: '序号'},
    { title: '测试1'},
    { title: '测试2'},
    { title: '测试3'},
    { title: '测试4'},
    { title: '测试5'},
    { title: '测试6'}
];
class DataSheetDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: grid()
        }
    }
    handleScrollPage = (record) => {
       console.log(record)
      // let tmp = [].concat(this.state.grid, grid()).map((c, i) => {
      //   return c.map((d, j) => ({ ...d, value: j === 0 ? i : d.value }))
      // })
      // this.setState({
      //   grid: tmp
      // })
    }
    render() {
        return (
            <Datasheet
              dataSource={this.state.grid}
              header={header}
              onChange={(pre, next, index) => {
                console.log('pre', pre)
                console.log('next', next)
                console.log('index', index)
              }}
              onScrollPage={this.handleScrollPage}
            />
        )
    }
}
export default  DataSheetDemo
