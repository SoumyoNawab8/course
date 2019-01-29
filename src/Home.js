import React, { Component } from 'react'
import Headers from './components/header';
import { observer } from 'mobx-react'
import { Layout } from 'antd';
import Store from './store';
import { withRouter} from 'react-router-dom';
import Category from './components/category';
import Course from './components/course';


const { Content,Footer} = Layout;

class Home extends Component {
  render() {
    const routePath=this.props.match.path;
    let slug='';
    if(this.props.match.params.verticalid){
      slug=this.props.match.params.verticalid;
    }
    else if(this.props.match.params.categoryid){
      slug=this.props.match.params.categoryid;
    }

    return (
    <Layout>
        <Headers store={new Store()}/><br />
        <Content style={{ padding: '0 50px' }}>
     
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      {
        routePath==='/'?
          <div style={{textAlign:'center'}}><h1>Welcome</h1><br/><h2>Click on to navigation menu</h2></div>:
            routePath==='/category/:verticalid'?
              <Category store={new Store()} slug={slug} />:
              routePath==='/courses/:categoryid'?
              <Course store={new Store()} slug={slug} />:null
      }

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      PassionIo Tests
    </Footer>
    </Layout>
    )
  }
}

export default observer(withRouter(Home));