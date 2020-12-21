import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios'
import './Home.css';

export default class Home extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
			id:'',
			course_title:'',
			course_organization:'',
			course_Certificate_type:'',
			course_rating:0,
			course_difficulty:'',
			course_students_enrolled:''
	        
	    };
	  }
	  myChangeHandler = (event) => {
	    let nam = event.target.name;
	    let val = event.target.value;
	    this.setState({[nam]: val});
	  }

	 
	  mySubmitHandler = (event)=>{
      var axios = require('axios');
      var qs = require('qs');
      var data = qs.stringify({
        'id':this.state.id,
        'course_title':this.state.course_title,
'course_organization':this.state.course_organization,
'course_Certificate_type':this.state.course_Certificate_type,
'course_rating':this.state.course_rating,
'course_difficulty':this.state.course_difficulty,
'course_students_enrolled':this.state.course_students_enrolled,
    
      });
      var config = {
        method: 'post',
        url: 'http://localhost:4000/insertdata',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
	  }



	render() {
		
		return (

            <div className="customerdetails">
              <Panel bsStyle="info" className="centeralign">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Insert New Document</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <form onSubmit={this.mySubmitHandler}>
                <div className="col-md-4">
                  <p>
                      <input
                      name='id'
                      type= 'text'
                      onChange={this.myChangeHandler}
                      placeholder=' id' /> </p>
                  <p>
                      <input
                      name='course_title'
                      type= 'text'
                      onChange={this.myChangeHandler}
                      placeholder='course_title'
                      /> </p>
                  <p>
                      <input
                      name='course_organization'
                      type= 'text'
                      onChange={this.myChangeHandler}
                      placeholder='course_organization'
                       /> </p>
                  <p>
                      <input
                      name='course_Certificate_type'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='course_Certificate_type'
                      /> </p>

                  <p>
                      <input name='course_rating'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='course_rating'
                       /> </p>
                  <p>
                      <input
                      name='course_difficulty'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='course_difficulty'
                      /> </p>
                  <p>
                      <input
                      name='course_students_enrolled'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='course_students_enrolled'
                      /> </p>
                </div>
                
                    <br/>
                   
                    <p>
                    <input type='submit' />
                    </p>
                  </form>
                </Panel.Body>
              </Panel>
            </div>
    );
  }
}
