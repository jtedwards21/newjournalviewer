import React from "react";

export default class JournalRow extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  render() {
　　  return <tr>
    <td>{this.props.data.title}</td>
    <td>{this.props.data.userName}</td>
    <td>{this.props.data.startTime}</td>
    <td>{this.props.data.routeDays}</td>
  </tr>
  }
}


