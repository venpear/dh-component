import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import withReadme from 'storybook-readme/with-readme';
import datasheetReadme from './datasheet.md';
import {  Datasheet } from '../../src';
const options = {
  inline: true, propTables: false
}
let grid = [
        [{ value: 1, c: 'aaaaaa'},  {value: 1}, {value: 3}, {value: 3}, {value: 3} ],
        [{ value: 2}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{ value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{ value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{ value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{ value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{ value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{ value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{ value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        [{value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}]
      ]
let header = [
  { title: '测试1'},
  { title: '测试2'},
  { title: '测试3'},
  { title: '测试4'},
  { title: '测试5'},
  { title: '测试6'},
  { title: '测试7'},
  { title: '测试8'},
  { title: '测试8'},
  { title: '测试8'},
  { title: '测试8'},
  { title: '测试8'},
  { title: '测试8'},
  { title: '测试8'},
  { title: '测试8'},
];
storiesOf('数据矩阵', module)
  .addDecorator(withReadme(datasheetReadme))
  .addWithInfo(
    '按钮样式',
    () => (
      <div className="test-datasheet" style={{width: 800, margin: 'auto', height: 220 }}>
        <Datasheet dataSource={grid} header={header} onChange={action('改变')}/>
      </div>
  ), options)
