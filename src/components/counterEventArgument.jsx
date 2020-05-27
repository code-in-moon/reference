//event handler
//passing event handler  argument

import React, { Component } from "react";

class CounterEventArgument extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  componentDidUpdate(prevProps, prevState) {
    //ihis would be called after update
    //we can compare with old property anf if there is a change we can get data from server
    //console.log("prevprops:  ", prevProps);
    //console.log("prevState:  ", prevState);
    // if(prevProps.counter_mem !== this.props.counter_mem){
    //   ajax get data from server
    // }
  }

  componentWillUnmount() {
    //this will be run just before a componnent be deleted
    //we can clean timer listener and free memory here
    console.log("counter - ummounted ");
  }

  //sometimes you need to pass some information(argument) and you cant pass in onclick(it must be function referrence witout aruement ) to event to this by adding another function
  //  you can write this function straight in onclick
  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log("counter_mem is rendered");
    //console.log("props", this.props);
    return (
      <div>
        {/* <React.Fragment> */}

        {this.props.children}
        <h4>counter id = {this.props.id}</h4>
        <span style={{ fontSize: 30 }} className={this.getbadgeclasses()}>
          {this.formatCount()}
        </span>

        <button
          //   onClick = {this.doHandleIncrement}
          onClick={() => {
            this.props.onIncrement(this.props.counter_mem);
          }}
          className="btn btn-secondary btn-sm "
        >
          increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter_mem.id)}
          className="btn btn-danger btn-sm m-2"
        >
          DELETE
        </button>
        {/* </React.Fragment> */}
      </div>
    );
  }

  getbadgeclasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter_mem.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter_mem;
    return value === 0 ? "zero" : value;
  }
}

export default CounterEventArgument;
