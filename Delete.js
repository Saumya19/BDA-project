import React, { Component } from 'react';
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
        'id': this.state.id,
        '': ''
      });
    var config = {
      method: 'delete',
      url: 'http://localhost:4000/remove',
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
					<h1>Delete application</h1>
					<p>Enter the id to delete it:</p>
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
