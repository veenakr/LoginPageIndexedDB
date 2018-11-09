import React from 'react';
import { Card, Col, Row, Skeleton, Switch, Icon, Avatar } from 'antd';
import 'antd/lib/card/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/skeleton/style/css';
import 'antd/lib/switch/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/avatar/style/css';
import {store} from '../store/configureStore';

const { Meta } = Card;


class Table1 extends React.Component {
  state = {
    loading: true
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

    render() {
      const { loading } = this.state;
      const user = store.getState();
        return (
          <div>
            <h3 className="display">Displaying User information in different card patterns</h3>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title="User information (No Border)" bordered={false} style={{ width: 300 }}>
            <p>Email Address : {user.authentication.user.email}</p>
              <p>First Name : {user.authentication.user.firstName}</p>
              <p>Last Name : {user.authentication.user.lastName}</p>
            </Card>

            <Card
              title="User information (Basic card)"
              // extra={<a href="#">More</a>}
              style={{ width: 400, marginTop: '20px' }}
            >
              <p>Email Address : {user.authentication.user.email}</p>
              <p>First Name : {user.authentication.user.firstName}</p>
              <p>Last Name : {user.authentication.user.lastName}</p>
            </Card>

            <Card style={{ width: 300 , marginTop: '20px'}}>
            <p>Email Address : {user.authentication.user.email}</p>
              <p>First Name : {user.authentication.user.firstName}</p>
              <p>Last Name : {user.authentication.user.lastName}</p>
            </Card>

            <Card title="Customized Card" hoverable style={{ width: 240, marginTop: '20px' }}
              cover={<img alt="Profile pic" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
              <Meta title="Login Page Example" description="www.something.com" />
              </Card>
            </div>

            <div style={{ background: '#ECECEC', padding: '30px' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Email Address" bordered={false}>{user.authentication.user.email}</Card>
                </Col>
                <Col span={8}>
                  <Card title="FirstName" bordered={false}>{user.authentication.user.firstName}</Card>
                </Col>
                <Col span={8}>
                  <Card title="LastName" bordered={false}>{user.authentication.user.lastName}</Card>
                </Col>
              </Row>
            </div>

            <div style={{ background: '#ECECEC' }}>
        <Switch checked={!loading} onChange={this.onChange} />

        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="User info"
            description="Logged in User" 
          />
        </Card>

        <Card
          style={{ width: 300, marginTop: 20 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="User info"
              description="Logged in User"
            />
          </Skeleton>
        </Card>
      </div>

          
          </div>
        )
    }
}

export default Table1;


  