import React, { Component } from "react";
import CounterEventArgument from "./counterEventArgument";

class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4, name: "product 1" },
      { id: 2, value: 0, name: "product 2" },
      { id: 3, value: 0, name: "product 3" },
      { id: 4, value: 0, name: "product 4" },
      { id: 5, value: 0, name: "product 5" },
    ],
  };

  handleDelete = (counter_id) => {
    //console.log("handeDelete is on", counter_id);
    //now we must create a new state and ask react to update the view
    // const new_counters = this.state.counters.filter((c) => c.id !== counter_id);
    // this.setState({ counters: new_counters });

    // simplify the above code
    const counters = this.state.counters.filter((c) => c.id !== counter_id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
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
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter_mem) => (
          <CounterEventArgument
            key={counter_mem.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            //   INSTESD OF THIS VALUE OF OBJECT WE CAN SEND THE WHOLE OBJECT
            // value={counter_mem.value}
            // seleted={true}
            // id={counter_mem.id}

            counter_mem={counter_mem}
          >
            {/* sometime you want to pass some information between tags so you use childeren props */}
            <h4>name = {counter_mem.name}</h4>
          </CounterEventArgument>
        ))}
      </div>
    );
  }
}

export default counters;
