import React from 'react';
import Mark from './component/mark';
import { List, Avatar, Dropdown, Icon, Menu} from '../src';
import docList from '../doc/list.md';

class SelectTest extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <span>菜单1</span>
        </Menu.Item>
        <Menu.Item>
          <span>菜单2</span>
        </Menu.Item>
      </Menu>
    );
    const suffix = (
        <Dropdown overlay={menu} trigger="click">
          <Icon type="setting"/>
        </Dropdown>
    );
    return (
      <div className="test-list">
        <div className="test-list-item">
          <h2>小列表</h2>
          <List
            theme="nomarl"
            onChange={(eventKey) => { console.log(eventKey)}}
            mode="multiple"
            trigger={true}
          >
            <List.Item key="1" suffix={suffix}>13123</List.Item>
            <List.Item key="2" suffix={suffix}>13123</List.Item>
            <List.Item key="3" suffix={suffix}>13123</List.Item>
            <List.Item key="4" suffix={suffix}>13123</List.Item>
            <List.Item key="5" suffix={suffix}>13123</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>单选列表</h2>
          <List
            multiple
            rowSelection={{
            type: 'dropdown',
            options: [{name: 'test1', key: 'a'}, { name: 'test2', key: 'b'}],
            onClick: (record) => { console.log("回调", record)}
          }}>
            <List.Item key="1">13123</List.Item>
            <List.Item key="2">13123</List.Item>
            <List.Item key="3">13123</List.Item>
            <List.Item key="4">13123</List.Item>
            <List.Item key="5">13123</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>点击整行时触发</h2>
          <List multiple rowSelected>
            <List.Item key="1">13123</List.Item>
            <List.Item key="2">13123</List.Item>
            <List.Item key="3">13123</List.Item>
            <List.Item key="4">13123</List.Item>
            <List.Item key="5">13123</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>多选列表</h2>
          <List>
            <List.Item key="1">13123</List.Item>
            <List.Item key="2">13123</List.Item>
            <List.Item key="3">13123</List.Item>
            <List.Item key="4">13123</List.Item>
            <List.Item key="5">13123</List.Item>
          </List>
        </div>
        <div className="test-list-item">
          <h2>带前置插件图标的</h2>
          <List multiple>
            <List.Item key="1" prefix={<Avatar />}>Avatar的前置图标</List.Item>
            <List.Item
              key="2"
              prefix={<Avatar src="http://7xr8fr.com1.z0.glb.clouddn.com/IMG_2197.JPG"/>}
            >
              Avatar用户传入图片
            </List.Item>
            <List.Item
              key="3"
              prefix={<Avatar>OK</Avatar>}
            >
              Avatar自定义中间元素
            </List.Item>
            <List.Item
              key="4"
              prefix={<Avatar radius={false}>中国</Avatar>}
            >
              我是方形的前置元素
            </List.Item>
          </List>
        </div>
        <Mark content={docList}/>
      </div>
    )
  }
}
export default SelectTest;
