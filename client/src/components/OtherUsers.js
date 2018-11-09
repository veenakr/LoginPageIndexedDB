import React from 'react';
import {store} from '../store/configureStore';
import { Table } from 'antd';
import 'antd/lib/table/style/css';

class OtherUsers extends React.Component {
    constructor(props){
        super(props);
        
        let filtersID = [];
        let filtersEmail = [];
        let filtersFirstName = []; 
        let filtersLastName = [];
        const users = store.getState();
        var actualUser = {
            firstName: users.authentication.user.firstName,
            lastName: users.authentication.user.lastName,
            email: users.authentication.user.email,
            id: users.authentication.user.id
        };;
        actualUser.key = actualUser.id;
        delete actualUser['token'];

        var usersArr = users.users.items.filter(data => {
            delete data['password'];
            delete data['confirmPassword'];
            data.key = data.id;
            return JSON.stringify(data) !== JSON.stringify(actualUser)
        })
        usersArr.map(data => {
            filtersID.push({ text: data.id, value: data.id });
            filtersEmail.push({ text: data.email, value: data.email});
            filtersFirstName.push({ text: data.firstName, value: data.firstName });
            filtersLastName.push({ text: data.lastName, value: data.lastName });
            return {
                filtersID, filtersEmail, filtersFirstName, filtersLastName
            }

        });

        this.columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: (a,b) => a.id - b.id
          }, {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
            filters: filtersEmail,
            filterMultiple: false,
            onFilter: (value, record) => record.email.indexOf(value) === 0,
            sorter: (a,b) => a.email.length - b.email.length
          }, {
            title: 'firstName',
            dataIndex: 'firstName',
            key: 'firstName',
            filters: filtersFirstName,
            filterMultiple: false,
            onFilter: (value, record) => record.firstName.indexOf(value) === 0,
            sorter: (a,b) => a.firstName.length - b.firstName.length
          }, {
            title: 'lastName',
            dataIndex: 'lastName',
            key: 'lastName',
            filters: filtersLastName,
            filterMultiple: false,
            onFilter: (value, record) => record.lastName.indexOf(value) === 0,
            sorter: (a,b) => a.lastName.length - b.lastName.length
          }];

          this.dataSource = usersArr;
    }

    render(){
        return(
            <Table dataSource={this.dataSource} columns={this.columns} />
        )
    }
}

export default OtherUsers;