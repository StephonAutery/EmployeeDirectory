import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeesList from "./EmployeesList";
import employees from '../data/employees.json';
import roles from '../data/roles.json';

class EmployeesContainer extends Component {
  state = {
    search: "",
    name: "",
    employees: employees,
    roles: roles,
    searching: false
  };

  componentDidUpdate() {
    if (this.state.search === "" && this.state.searching) {
      this.setState({
        employees: employees,
        searching: false
      })
    }
    else if (this.state.searching) {
      this.filterEmployees(this.state.search, employees);
    }
  }

  filterEmployees = (name, employee) => {
    let employeesFilterd = [];
    console.log(name, employee, employeesFilterd);
    if (name !== "") {
      employeesFilterd = employee.filter(person => ((person.firstName.toLowerCase() + person.lastName.toLowerCase()).includes(name.toLowerCase())));
    }

    this.setState({
      searching: false,
      employees: employeesFilterd
    })
  };

  sortEmployees = (name, employee) => {
    let employeesSorted = [];
    employeesSorted = employee.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);

    this.setState({
      search: "",
      employees: employeesSorted
    })
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      searching: true,
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (event.target.id === "sort") {
      this.sortEmployees(this.state.search, employees);
    } else {
      this.filterEmployees(this.state.search, employees);
    }
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

  render() {
    return (
      <Container>
        <Row>

          <Col size="md-4">
            <Card heading="search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
          <Col size="md-8">
            <Card heading={"employees"} >
              {this.state.employees.map(employee => (
                <EmployeesList
                  removeEmployee={this.removeEmployee}
                  id={employee.id}
                  key={employee.id}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  roleNum={employee.roleNum} //8
                  role={this.state.roles[employee.roleNum].role} //puppy
                  tasty={employee.tasty}
                />
              ))}
            </Card>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default EmployeesContainer;