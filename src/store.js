import React from 'react';
import { extendObservable } from 'mobx';
import verticals from './json/verticals';
import courses from './json/courses';
import categories from './json/categories';
import { Card , Badge } from 'antd';
import { Link } from 'react-router-dom';

class Store {
    constructor() {
        extendObservable(this, {
          categoryId:0,
          activeVertical: 'Health & Fitness',
          activeCategories:[],
          activeCategory:'Booty & Abs',
          activeCourse:[],
          menu:verticals,
          categories:categories,
          course: courses
        });
      }


      getCategories(){
        let activeId=0;
        this.menu.map(item=>{
            if(item.Name===this.activeVertical){
                activeId=item.Id;
            }
        });

        this.categories.map(category=>{
            if(category.Verticals===activeId){
                this.activeCategories.push(category);
            }
        });

        return this.activeCategories.map(category=>{
                return <Link key={category.Id} to={'/courses/'+category.Name}><Card style={{ width: 300,margin:'1em' }}>
                <h3>{category.Name}</h3>
              </Card></Link>
            })

      }


      getCourse(){
          let activeId=0;

          this.categories.map(item=>{
              if(item.Name===this.activeCategory){
                  activeId=item.Id;
              }
          });

          this.course.map(item=>{
              if(item.Categories===activeId){
                  this.activeCourse.push(item);
              }
          });

          return this.activeCourse.map(course=>{
            return <Badge ley={course.Id} count={course.State} style={course.State==="active"?{ backgroundColor: '#52c41a' }:null}>
            <Card style={{ width: 300, marginLeft:'2em' }}>
                  
                    <h2>{course.Name}</h2>
                    <b>{course.Author}</b>
                    
                  </Card>
                  </Badge>
        });

      }

}

export default Store;