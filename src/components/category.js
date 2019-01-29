import React, { Component } from 'react'
import {observer} from 'mobx-react';




class Category extends Component {
  render() {
    const {store}=this.props;
    store.activeVertical=this.props.slug;
    
    return [<b><u>Categories</u></b>,
      <div style={{display:'flex'}}>
        { store.getCategories() }
      </div>
    ]
  }
}

export default observer(Category);