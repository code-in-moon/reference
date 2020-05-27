import React, { Component } from "react";
import CounterEventArgument from "./counterEventArgument";

class counters extends Component {
  render() {
    //prevent write this.props by this
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter_mem) => (
          <CounterEventArgument
            key={counter_mem.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter_mem={counter_mem}
          >
            <h4>name = {counter_mem.name}</h4>
          </CounterEventArgument>
        ))}
      </div>
    );
  }
}

export default counters;
