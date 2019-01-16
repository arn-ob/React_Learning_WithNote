import React, { Component } from "react";

export class StyleLearn extends Component {
  data = {
    count: 19,
    arr: ["arr1", "arr2", "arr3", "arr5"]
  };


  // note: Font Size will not increate like state, Because its Read Only
  // So we need to bind this Differently
  // https://stackoverflow.com/questions/22291913/how-to-change-reactjs-styles-dynamically
  style = {
    fontSize: 17,
    color: "red"
  };

  constructor() {
    super();
    this.events();
    console.log("constructor");
  }

  getCount() {
    const { count } = this.data;
    return count === 0 ? "Zero" : count;
  }

  getStyleChange() {
    const { count } = this.data;
    return count === 0 ? "badge badge-primary" : "badge badge-warning";
  }

  getStyle = () => {
    this.style.fontSize++;
    this.setState({
      fontSize: this.style.fontSize + 1
    })
    return this.style;
  }

  events = () => {
    console.log("Clicked", this.data.count);
    this.data.count++;
    this.style.fontSize++;
    console.log("Data Count", this.data.count);
    console.log("Front Size Count", this.style.fontSize);
    this.setState({
      count: this.data.count + 1,
      fontSize: this.style.fontSize + 1
    });
    this.getCount();
  };

  render() {
    let classStyle = this.getStyleChange();
    return (
      <div>
        <p style={{fontSize: this.style.fontSize }} className={classStyle}>
          Count {this.getCount()}
        </p>
        <p>Arnob</p>
        {this.data.arr.map(arr => (
          <p key={arr}>{arr}</p>
        ))}
        <button onClick={this.events} className="btn btn-primary">
          Click
        </button>
      </div>
    );
  }
}
