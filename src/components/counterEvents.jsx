//event handler
//binding event handler

import React, { Component } from "react";

class CounterEvents extends Component {
  state = {
    count: 0,

    tags: [
      { text: "tag1", id: 1 },
      { text: "tag2", id: 2 },
      { text: "tag3", id: 3 },
    ],
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  //in event handler you dont have access to this
  // #1  solution but you must do for every event
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     console.log("btn click", this);
  //     console.log(this.state.count);
  //   }

  //#2 solution arrow function
  handleIncrement = () => {
    //update state be setstate() that is a method of component
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 30 }} className={this.getbadgeclasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm "
        >
          increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag.id}>{tag.text}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getbadgeclasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default CounterEvents;
