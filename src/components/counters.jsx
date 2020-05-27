import React, { Component } from "react";
import CounterEventArgument from "./counterEventArgument";

class counters extends Component {
  render() {
    console.log("counters render");
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter_mem) => (
          <CounterEventArgument
            key={counter_mem.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
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
