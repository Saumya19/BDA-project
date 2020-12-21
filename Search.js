import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import './Home.css';
import axios from 'axios';


export default class Home extends Component {

	constructor(props) {
    super(props);
    this.state = {
      id:'',

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
 'id': '' 
});
var config = {
  method: 'get',
  url: 'http://localhost:4000/find',
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
			<div className="Home">
				<div className="lander">
					<h1>Search application</h1>
			
					<form onSubmit={this.mySubmitHandler}>

                    <p>
                    <input
                      type='text'
                      name='id'
                      onChange={this.myChangeHandler}
                      placeholder="Enter Id"
                    />
                    </p>

                    
                    <p>
                    <input type='submit' />
                    </p>

                  </form>
				</div>
			</div>
		);
	}
}
