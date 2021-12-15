
import './index.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  studentData,
  studentNames,
  allAveragesPerAssignment,
} from "./data/studentData";
import studentProfiles from "./data/profiles";
import StudentChart from "./components/StudentChart";
import Overview from "./components/Overview";
import Footer from "./components/Footer"
import ListOfStudents from "./components/ListOfStudents";
import Help from "./components/Help";

// _state has imports from the data-folder____________________________________________________________________________________
class App extends Component {
  constructor() {
    super();
    this.state = {
      studentData: studentData,
      studentProfiles: studentProfiles,
      students: studentNames,
      allAveragesPerAssignment: allAveragesPerAssignment,
      assignmentOverview: allAveragesPerAssignment,
      studentProfile: [],
      isBarchart: true,
      isJoy: true,
      isDifficulty: true,
    };
  }

  // _methods are passed as props to lower level components, are used for a callback to change state__________________________
  handleClick = (name) => {
    if (name === "overView") {
      this.setState((prevState) => {
        const overView = prevState.assignmentOverview;
        return {
          allAveragesPerAssignment: overView,
          studentProfile: [],
        };
      });
    } else {
      this.setState((prevState) => {
        const selectedStudent = prevState.studentData.filter(
          (item) => item.name === name
        );
        const selectedProfile = prevState.studentProfiles.filter(
          (item) => item.first_name === name
        );
        return {
          allAveragesPerAssignment: selectedStudent,
          studentProfile: selectedProfile,
        };
      });
    }
  };

  handleChartType = (event) => {
    event.persist();
    this.setState((prevState) => {
      return { [event.target.name]: !prevState[event.target.name] };
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Overview handleClick={this.handleClick} />
            <ListOfStudents
              students={this.state.students}
              handleClick={this.handleClick}
            />
          </div>
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <>
                  <StudentChart
                    studentData={this.state.allAveragesPerAssignment}
                    isBarchart={this.state.isBarchart}
                    isJoy={this.state.isJoy}
                    isDifficulty={this.state.isDifficulty}
                    handleChartType={this.handleChartType}
                    studentProfile={this.state.studentProfile}
                  />
                  <Route path="/help" component={Help} />
                </>
              )}
            />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
