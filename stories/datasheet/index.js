import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';
import datasheetReadme from './datasheet.md';
import {  Datasheet } from '../../src';
const options = {
  inline: true, propTables: false
}
let grid = [
        [{ value: 1},  {value: 1}, {value: 3}, {value: 3}, {value: 3} ],
        [{ value: 2}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{ value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}]
      ]
let header = [
  { title: '测试1'},
  { title: '测试2'},
  { title: '测试3'},
  { title: '测试4'},
  { title: '测试5'},
  { title: '测试6'}
];
storiesOf('数据矩阵', module)
  .addDecorator(withReadme(datasheetReadme))
  .addWithInfo(
    '按钮样式',
    () => (
      <div className="test-datasheet" style={{width: 800, margin: 'auto' }}>
        <Datasheet dataSource={grid} header={header}/>
      </div>
  ), options)
