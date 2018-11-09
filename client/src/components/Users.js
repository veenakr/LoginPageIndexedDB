import React from 'react';
import { Table } from 'antd';
import 'antd/lib/table/style/css';

class Users extends React.Component{
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
          }, {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
          }, {
            title: 'firstName',
            dataIndex: 'firstName',
            key: 'firstName',
          }, {
            title: 'lastName',
            dataIndex: 'lastName',
            key: 'lastName',
          }, {
            title: 'token',
            dataIndex: 'token',
            key: 'token',
          }];
          
          
        }
    render() {
      if(this.props.users){
        this.dataSource = this.props.users.map(data => data)
      }
        return (
            <Table dataSource={this.dataSource} columns={this.columns} />
        )
    }
}


// export default connect(mapStateToProps)(Users)
export default Users;