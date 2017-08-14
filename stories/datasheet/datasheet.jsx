import React from 'react'
import { Datasheet } from '../../src'

let grid = function () {
  let arry = [];
  for (let i = 0; i < 50; i++) {
    let row = [];
    for(let i = 0; i < 15; i++) {
      row.push({value: `${Math.floor(Math.random()*100)}`})
    }
    arry.push(row)
  }
  return arry
}
let header = [
    { title: '测试1'},
    { title: '测试2'},
    { title: '测试3'},
    { title: '测试4'},
    { title: '测试5'},
    { title: '测试6'},
    { title: '测试7'},
    { title: '测试8'},
    { title: '测试9'},
    { title: '测试10'},
    { title: '测试11'},
    { title: '测试12'},
    { title: '测试13'},
    { title: '测试14'},
    { title: '测试15'},
];
class DataSheetDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: grid()
        }
    }
    handleOnLoad = (num) => {
        let load = [];
        for (let i = 0; i < 10; i++) {
            let row = [];
            for(let i = 0; i < 12; i++) {
                row.push({value: `滚动${Math.floor(Math.random()*100)}`})
            }
            load.push(row)
        }
        this.setState({grid: [...this.state.grid, ...load]})
    }
    render() {
        return (
            <Datasheet
                count={100}
                dataSource={this.state.grid}
                header={header}
                onLoad={this.handleOnLoad}
            />
        )
    }
}
export default  DataSheetDemo