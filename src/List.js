import React from 'react';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import Axios from 'axios';
import './App.css';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['f001', 'f002', 'f003'];
const defaultCheckedList = ['f001', 'f002', 'f003'];


class PictureSelect extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pictures: [
        {
          id: '1',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '2',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
          id: '3',
          name: 'foo',
          url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        ],
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
        num:3
		}
  }
    onChange = checkedList => {
      this.setState({
        checkedList,
        indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
        checkAll: checkedList.length === plainOptions.length,
        num:checkedList.length
      });
    };

    onCheckAllChange = e => {
      this.setState({
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    };
	componentDidMount() {}
		render() {
      const { pictures } = this.state
      return (
        <div className="list">
          {pictures.map(e =>
            (<div className="pic">
              <img src={e.url} />
              <p>{e.name}</p>
            </div>
            )
          )}
           <div className="site-checkbox-all-wrapper">
              <Checkbox
                indeterminate={this.state.indeterminate}
                onChange={this.onCheckAllChange}
                checked={this.state.checkAll}
              >
                已选中{this.state.num}个文件
              </Checkbox>
            </div>
            <br />
            <CheckboxGroup
              options={plainOptions}
              value={this.state.checkedList}
              onChange={this.onChange}
            />
          </div>
    )}
}

export default PictureSelect
