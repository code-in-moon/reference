import React, { Component } from "react";

class Counter extends Component {
  //state provide all data wich the component need
  // it can be any things
  state = {
    count: 0,
    // imageURL: "https://picsum.photos/200",

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

  // babel convert this jsx file to pail java wich can be understand in browser
  //const element =<h1>hello world</h1>     converted  to
  //var element = React.createElement("h1",null,"hello world")
  render() {
    return (
      <React.Fragment>
        {/* in this  {} you can write any javascript expression or function (which produce value)*/}
        {/* <img src={this.state.imageURL} alt="" /> */}
        {/* you can define styles by this.styles instead {....} */}

        {/* <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}

        <span style={{ fontSize: 30 }} className={this.getbadgeclasses()}>
          {this.formatCount()}
        </span>

        {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}

        {/* dynamic classname that can be changed */}
        <button className="btn btn-secondary btn-sm ">increment</button>
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

export default Counter;
