import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";

import Counters from "./components/counters";

//some life cycle hooks
//1- mount : constructor-render-componentDidMount
//2- update              render-componentDidMount
//3- unmount: componentWillUnmount

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, name: "product 1" },
      { id: 2, vlue: 0, name: "product 2" },
      { id: 3, value: 0, name: "product 3" },
      { id: 4, value: 0, name: "product 4" },
      { id: 5, value: 0, name: "product 5" },
    ],
  };

  constructor(props) {
    // this only call once when the component in created

    //call the constructor of parrent class by super()
    super(props);
    console.log("app - constructor");

    //good for initializing the property like set the props base of outside
    //this.state = this.props.something;

    //can not write setState here
  }

  componentDidMount() {
    // this method call after the component was rendered  into the dom
    //a good place for ajax call to get data from server
    //then
    //this.setState({})
    console.log("app - mounted");
  }

  handleDelete = (counter_id) => {
    const counters = this.state.counters.filter((c) => c.id !== counter_id);
    this.setState({ counters });
  };

  handleReset = () => {
    const new_counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: new_counters });
  };

  handleIncrement = (counter_mem) => {
    //clone the counter in state
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter_mem);
    counters[index] = { ...counter_mem };
    counters[index].value++;
    this.setState({ counters });
  };
  render() {
    console.log("app renderd");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
