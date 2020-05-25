//condition rendering

import React, { Component } from "react";

class Counter2 extends Component {
  state = {
    count: 0,
    tags: [
      { text: "tag1", id: 1 },
      { text: "tag2", id: 2 },
      { text: "tag3", id: 3 },
    ],
  };

  rendertags() {
    //   conditional rendering #1
    //   if (this.state.tags.length === 0) return <p>there are no tags</p>;

    return this.state.tags.map((tag) => <li key={tag.id}>{tag.text}</li>);
  }

  //  conditional rendering #2
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "please create a new tag"}
        {this.rendertags()}
      </div>
    );
  }
}

export default Counter2;
