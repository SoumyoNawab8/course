import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import '../index.css';
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom';
const { Header } = Layout;


class Headers extends Component {
  render() {
    const {store} = this.props;
    return (
       <Layout className="layout">
        <Header>
          <Link to={"/"}><div className="logo" /></Link>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px' }}
          >
            {store.menu.map(menu=>{
              return <Menu.Item key={menu.Id}><Link to={'/category/'+menu.Name}>{menu.Name}</Link></Menu.Item>;
            })}
            

          </Menu>
        </Header> 
     </Layout>
    )
  }
}

export default observer(Headers);