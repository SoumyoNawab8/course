import React, { Component } from 'react'
import {observer} from 'mobx-react';


class Course extends Component {
  render() {
    const {store}=this.props;
    store.activeCategory=this.props.slug;
    
    return [
      <b><u>Courses</u></b>,<br/>,<br/>,
      <div style={{display:'flex'}}>
        {  store.getCourse() }
        </div>
    ]
  }
}


export default observer(Course);