import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'

import axios from 'axios'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('http://localhost:4000/getData').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)

    return (

      <div className="customerdetails">


      <div className="addmargin">
      <div className>
        {

          this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.id} className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{customer.id}</Panel.Title>
          </Panel.Heading>
            <Panel.Body>

            <div className="col-md-4">
            <Panel bsStyle="info" className="centeralign">
              <Panel.Body>
              <p>Id: {customer.id}</p>
		 <p>course title: {customer.course_title}</p>
		 <p>course organisation : {customer.course_organization}</p>
		 <p>course_Certificate_type : {customer.course_Certificate_type}</p>
		 <p>course_rating: {customer.course_rating}</p>
		 <p>course_difficulty : {customer.course_difficulty}</p>
		 <p>course_students_enrolled : {customer.course_students_enrolled}</p>
              </Panel.Body>
                  </Panel>
            </div>


           
            
            

            </Panel.Body>
          </Panel>)
        }
      </div>

    </div>

</div>

  )
  }

}
